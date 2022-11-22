"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
require("core-js/modules/web.dom.iterable.js");
var _react = require("react");
const SCRIPT_URL = "https://accounts.google.com/gsi/client";
const useLoadGoogleScript = () => {
  const [scriptLoaded, setScriptLoaded] = (0, _react.useState)(false);
  (0, _react.useEffect)(() => {
    const script = document.createElement('script');
    script.src = SCRIPT_URL;
    script.async = true;
    script.defer = true;
    script.onload = () => {
      setScriptLoaded(true);
    };
    script.onerror = () => {
      setScriptLoaded(false);
    };
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return scriptLoaded;
};
var _default = useLoadGoogleScript;
exports.default = _default;