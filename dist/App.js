"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const Header_1 = require("./components/Header");
const Main_1 = require("./components/Main");
const data_1 = __importDefault(require("./data"));
function App() {
    return ((0, jsx_runtime_1.jsxs)(react_1.ChakraProvider, Object.assign({ theme: react_1.theme }, { children: [(0, jsx_runtime_1.jsx)(Header_1.Header, {}), (0, jsx_runtime_1.jsx)(Main_1.Main, { data: data_1.default })] })));
}
exports.default = App;
