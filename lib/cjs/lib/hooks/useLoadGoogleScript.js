"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = require("react");
var SCRIPT_URL = "https://accounts.google.com/gsi/client";
var useLoadGoogleScript = function () {
    var _a = (0, react_1.useState)(false), scriptLoaded = _a[0], setScriptLoaded = _a[1];
    (0, react_1.useEffect)(function () {
        var script = document.createElement('script');
        script.src = SCRIPT_URL;
        script.async = true;
        script.defer = true;
        script.onload = function () {
            setScriptLoaded(true);
        };
        script.onerror = function () {
            setScriptLoaded(false);
        };
        document.body.appendChild(script);
        return function () {
            document.body.removeChild(script);
        };
    }, []);
    return scriptLoaded;
};
exports.default = useLoadGoogleScript;
