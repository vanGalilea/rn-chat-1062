var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
import React from 'react';
import { Channel, ChannelHeader, ChannelList, MessageList, Thread, useChannelStateContext, Window, } from '../index';
import { ConnectedUser } from './utils';
var PinnedMessagesList = function () {
    var pinnedMessages = useChannelStateContext().pinnedMessages;
    if (!(pinnedMessages === null || pinnedMessages === void 0 ? void 0 : pinnedMessages.length))
        return null;
    return (React.createElement("ul", { "data-testid": 'pinned-messages-list' }, pinnedMessages === null || pinnedMessages === void 0 ? void 0 : pinnedMessages.map(function (pm) { return (React.createElement("li", { key: pm.id }, pm.text)); })));
};
var Controls = function () {
    var channel = useChannelStateContext().channel;
    return (React.createElement("div", null,
        React.createElement("button", { "data-testid": 'truncate', onClick: function () { return channel.truncate(); } }, "Truncate"),
        React.createElement("button", { "data-testid": 'add-message', onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, channel.sendMessage({
                                text: 'pin-message-0',
                            })];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, channel.sendMessage({
                                    pinned: true,
                                    pinned_at: new Date().toISOString(),
                                    text: 'pin-message-1',
                                })];
                        case 2:
                            _a.sent();
                            return [4 /*yield*/, channel.sendMessage({
                                    text: 'pin-message-2',
                                })];
                        case 3:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            }); } }, "Add message")));
};
var App = function (_a) {
    var token = _a.token, userId = _a.userId;
    return (React.createElement(React.Fragment, null,
        React.createElement(ConnectedUser, { token: token, userId: userId },
            React.createElement(ChannelList, { filters: { id: { $eq: 'pin-message-channel' }, members: { $in: [userId] } }, setActiveChannelOnMount: true }),
            React.createElement(Channel, null,
                React.createElement(PinnedMessagesList, null),
                React.createElement(Window, null,
                    React.createElement(ChannelHeader, null),
                    React.createElement(MessageList, null)),
                React.createElement(Thread, null),
                React.createElement(Controls, null)))));
};
export var User1 = function () {
    var userId = import.meta.env.E2E_TEST_USER_1;
    var token = import.meta.env.E2E_TEST_USER_1_TOKEN;
    if (!userId || typeof userId !== 'string') {
        throw new Error('expected TEST_USER_1');
    }
    if (!token || typeof token !== 'string') {
        throw new Error('expected TEST_USER_1_TOKEN');
    }
    return React.createElement(App, { token: token, userId: userId });
};
