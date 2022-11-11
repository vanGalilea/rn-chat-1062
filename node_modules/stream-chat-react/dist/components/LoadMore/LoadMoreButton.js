import React, { useEffect } from 'react';
import { LoadingIndicator } from '../Loading';
import { deprecationAndReplacementWarning } from '../../utils/deprecationWarning';
var UnMemoizedLoadMoreButton = function (_a) {
    var _b = _a.children, children = _b === void 0 ? 'Load more' : _b, isLoading = _a.isLoading, onClick = _a.onClick, refreshing = _a.refreshing;
    var loading = typeof isLoading !== 'undefined' ? isLoading : refreshing;
    useEffect(function () {
        deprecationAndReplacementWarning([[{ refreshing: refreshing }, { isLoading: isLoading }]], 'LoadMoreButton');
    }, []);
    return (React.createElement("div", { className: 'str-chat__load-more-button' },
        React.createElement("button", { "aria-label": 'Load More Channels', className: 'str-chat__load-more-button__button str-chat__cta-button', "data-testid": 'load-more-button', disabled: loading, onClick: onClick }, loading ? React.createElement(LoadingIndicator, null) : children)));
};
export var LoadMoreButton = React.memo(UnMemoizedLoadMoreButton);
