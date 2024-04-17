"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.OutsideHandler = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const react_1 = require("react");
const index_1 = require("./index");
const OutsideHandler = ({ defaultValue }) => {
    const [disable, setDisable] = (0, react_1.useState)(defaultValue);
    const { ref } = (0, index_1.useOutsideHandler)('click', () => setDisable(true));
    return (0, jsx_runtime_1.jsxs)("div", { children: [(0, jsx_runtime_1.jsx)("div", { ref: ref, children: "outside" }), (0, jsx_runtime_1.jsx)("button", { "data-testid": "button", disabled: disable, children: "Button" })] });
};
exports.OutsideHandler = OutsideHandler;
//# sourceMappingURL=OutsideHandler.js.map