"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PersonalInfo = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const react_2 = require("@chakra-ui/react");
const FormWrapper_1 = require("./common/FormWrapper");
const InfoWrapper_1 = require("./common/InfoWrapper");
const Form = ({ title, initialInfo, onSave, stopEditing }) => {
    const [info, setInfo] = (0, react_1.useState)(initialInfo);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo(Object.assign(Object.assign({}, info), { [name]: value }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        onSave(info);
    };
    const isNameErr = info.name === '';
    const isEmailErr = info.email === '';
    return (
    // @ts-ignore
    (0, jsx_runtime_1.jsx)(FormWrapper_1.FormWrapper, Object.assign({ title: title, mb: 4 }, { children: (0, jsx_runtime_1.jsxs)("form", Object.assign({ onSubmit: handleSubmit }, { children: [(0, jsx_runtime_1.jsxs)(react_2.VStack, Object.assign({ mb: 4 }, { children: [(0, jsx_runtime_1.jsxs)(react_2.FormControl, Object.assign({ isInvalid: isNameErr, isRequired: true }, { children: [(0, jsx_runtime_1.jsx)(react_2.FormLabel, { children: "Name" }), (0, jsx_runtime_1.jsx)(react_2.Input, { type: "text", name: "name", value: info.name, onChange: handleChange, autoFocus: true }), isNameErr && (0, jsx_runtime_1.jsx)(react_2.FormErrorMessage, { children: "Name is required" })] })), (0, jsx_runtime_1.jsxs)(react_2.FormControl, Object.assign({ isInvalid: isEmailErr, isRequired: true }, { children: [(0, jsx_runtime_1.jsx)(react_2.FormLabel, { children: "Email" }), (0, jsx_runtime_1.jsx)(react_2.Input, { type: "email", name: "email", value: info.email, onChange: handleChange }), isEmailErr && ((0, jsx_runtime_1.jsx)(react_2.FormErrorMessage, { children: "Email is required" }))] })), (0, jsx_runtime_1.jsxs)(react_2.FormControl, { children: [(0, jsx_runtime_1.jsx)(react_2.FormLabel, { children: "Phone" }), (0, jsx_runtime_1.jsx)(react_2.Input, { type: "tel", name: "phone", value: info.phone, onChange: handleChange })] })] })), (0, jsx_runtime_1.jsxs)(react_2.ButtonGroup, Object.assign({ colorScheme: "blue" }, { children: [(0, jsx_runtime_1.jsx)(react_2.Button, Object.assign({ type: "submit" }, { children: "Save" })), (0, jsx_runtime_1.jsx)(react_2.Button, Object.assign({ variant: "outline", onClick: stopEditing }, { children: "Cancel" }))] }))] })) })));
};
const PersonalInfo = ({ personal, onSave, onEdit, stopEditing, editIdx, }) => {
    const isEditing = editIdx === 0;
    const title = 'Personal Info';
    return ((0, jsx_runtime_1.jsx)(react_2.Box, { children: isEditing ? ((0, jsx_runtime_1.jsx)(Form, { title: title, initialInfo: personal, onSave: onSave, stopEditing: stopEditing })) : ((0, jsx_runtime_1.jsxs)(InfoWrapper_1.InfoWrapper, Object.assign({ title: title }, { children: [(0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("b", { children: "Full Name:" }), " ", personal.name] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("b", { children: "Email:" }), " ", personal.email] }), (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("b", { children: "Phone:" }), " ", personal.phone] }), (0, jsx_runtime_1.jsx)("br", {}), (0, jsx_runtime_1.jsx)(react_2.Button, Object.assign({ onClick: () => onEdit(0) }, { children: "Edit" }))] }))) }));
};
exports.PersonalInfo = PersonalInfo;
