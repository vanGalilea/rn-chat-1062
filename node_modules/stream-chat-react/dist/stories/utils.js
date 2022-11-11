import React, { useEffect, useState } from 'react';
import { Chat } from '../';
import { StreamChat, } from 'stream-chat';
var appKey = import.meta.env.E2E_APP_KEY;
if (!appKey || typeof appKey !== 'string') {
    throw new Error('expected APP_KEY');
}
export var streamAPIKey = appKey;
var useClient = function (_a) {
    var apiKey = _a.apiKey, tokenOrProvider = _a.tokenOrProvider, userData = _a.userData;
    var _b = useState(null), chatClient = _b[0], setChatClient = _b[1];
    useEffect(function () {
        var client = new StreamChat(apiKey);
        var didUserConnectInterrupt = false;
        var connectionPromise = client.connectUser(userData, tokenOrProvider).then(function () {
            if (!didUserConnectInterrupt)
                setChatClient(client);
        });
        return function () {
            didUserConnectInterrupt = true;
            setChatClient(null);
            connectionPromise
                .then(function () { return client.disconnectUser(); })
                .then(function () {
                console.log('connection closed');
            });
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [apiKey, userData.id, tokenOrProvider]);
    return chatClient;
};
export var ConnectedUser = function (_a) {
    var children = _a.children, token = _a.token, userId = _a.userId;
    var client = useClient({
        apiKey: streamAPIKey,
        tokenOrProvider: token,
        userData: { id: userId },
    });
    if (!client)
        return React.createElement("p", null,
            "Waiting for connection to be established with user: ",
            userId,
            "...");
    return (React.createElement(React.Fragment, null,
        React.createElement("h3", null,
            "User: ",
            userId),
        React.createElement("div", { className: 'chat-wrapper' },
            React.createElement(Chat, { client: client }, children))));
};
