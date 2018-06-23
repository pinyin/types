export type DeepReadonly<T, K extends keyof T = keyof T> =
    T extends object ?
        { +readonly [key in K]: DeepReadonly<T[key]> } :
        T

