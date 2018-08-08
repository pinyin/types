export type ParamsOf<T extends Function> =
    T extends (...params: infer R) => any ? R : never
