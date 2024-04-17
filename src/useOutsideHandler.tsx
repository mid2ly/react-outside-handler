import {useEffect, useState} from "react";

export type OutsideHandlerResponse = [
    (node?: Element | null) => void
] & {
    ref: (node?: Element | null) => void;
}

export function useOutsideHandler<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any): OutsideHandlerResponse {
    const [ref, setRef] = useState<Element | null>(null);

    useEffect(() => {
        const _listener = function (this: Document, eventMap: DocumentEventMap[K]) {
            const target: any = eventMap.target
            if (target && ref && !ref.contains(target)) {
                listener.call(this, eventMap)
            }
        }
        document.addEventListener(type, _listener, false)

        return () => document.removeEventListener(type, _listener)
    }, [listener, ref, type]);

    return {
        ref: setRef
    } as OutsideHandlerResponse
}
