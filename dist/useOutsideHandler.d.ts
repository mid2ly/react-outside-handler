export type OutsideHandlerResponse = [
    (node?: Element | null) => void
] & {
    ref: (node?: Element | null) => void;
};
export declare function useOutsideHandler<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any): OutsideHandlerResponse;
