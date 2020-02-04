var StateManager = (function(){

    var _currentState = null,
        _subscribers = [],
        _reducer = null,
    
    function getState(){
        return _currentState;
    }

    function subscribe(callback){
        _subscribers.push(callback);
    }

    function notifySubscribers(){
        _subscribers.forEach(subscriber => subscriber());
    }

    function dispatch(action){
        var newState = _reducer(_currentState, action);
        if (newState === _currentState) return;
        _currentState = newState;
        notifySubscribers();
    }

    function createStore(reducer){
        _reducer = reducer;
        var store = { getState, subscribe, dispatch };
        return store;
    }

    return { createStore };
})();