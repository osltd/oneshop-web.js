interface Payload {
    url: string;
    body?: object;
    query?: object;
}
export declare const create: (pl: Payload) => Promise<unknown>;
export declare const get: (pl: Payload) => Promise<unknown>;
export declare const update: (pl: Payload) => Promise<unknown>;
export declare const remove: (pl: Payload) => Promise<unknown>;
export {};
