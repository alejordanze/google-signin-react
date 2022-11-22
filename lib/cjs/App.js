"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./App.css");
var GoogleLogin_1 = __importDefault(require("./lib/components/GoogleLogin"));
function App() {
    var success = function (res) {
        console.log(res);
    };
    return (react_1.default.createElement("div", { className: "App" },
        react_1.default.createElement(GoogleLogin_1.default, { clientId: "802994861131-pc800ev4qrfvkundvmpoca5eulp8o8bv.apps.googleusercontent.com", onSuccess: success })));
}
exports.default = App;
