"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const jsx_runtime_1 = require("react/jsx-runtime");
require("@testing-library/jest-dom");
const react_1 = require("@testing-library/react");
const OutsideHandler_1 = require("./OutsideHandler");
test('event on outside click', () => {
    (0, react_1.render)((0, jsx_runtime_1.jsx)(OutsideHandler_1.OutsideHandler, { defaultValue: false }));
    const button = react_1.screen.getByTestId('button');
    react_1.fireEvent.click(button);
    expect(button).toBeDisabled();
});
//# sourceMappingURL=OutsideHandler.test.js.map