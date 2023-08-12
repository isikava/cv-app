"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FormWrapper = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("@chakra-ui/react");
const FormWrapper = (_a) => {
    var { title, children } = _a, props = __rest(_a, ["title", "children"]);
    return ((0, jsx_runtime_1.jsxs)(react_1.Card, Object.assign({ variant: "outline" }, props, { children: [(0, jsx_runtime_1.jsx)(react_1.CardHeader, Object.assign({ pb: 0 }, { children: (0, jsx_runtime_1.jsx)(react_1.Heading, Object.assign({ size: "xl" }, { children: title })) })), (0, jsx_runtime_1.jsx)(react_1.CardBody, { children: children })] })));
};
exports.FormWrapper = FormWrapper;
