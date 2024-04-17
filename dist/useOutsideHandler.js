"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useOutsideHandler = void 0;
const react_1 = require("react");
function useOutsideHandler(type, listener) {
    const [ref, setRef] = (0, react_1.useState)(null);
    (0, react_1.useEffect)(() => {
        const _listener = function (eventMap) {
            const target = eventMap.target;
            if (target && ref && !ref.contains(target)) {
                listener.call(this, eventMap);
            }
        };
        document.addEventListener(type, _listener, false);
        return () => document.removeEventListener(type, _listener);
    }, [listener, ref, type]);
    return {
        ref: setRef
    };
}
exports.useOutsideHandler = useOutsideHandler;
//# sourceMappingURL=useOutsideHandler.js.map