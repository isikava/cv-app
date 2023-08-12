"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Header = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const Header = () => {
    return ((0, jsx_runtime_1.jsx)(react_1.Box, Object.assign({ as: "header", p: 4, bg: "gray.600", color: "white" }, { children: (0, jsx_runtime_1.jsx)(react_1.Heading, Object.assign({ as: "h1" }, { children: "CV Application" })) })));
};
exports.Header = Header;
