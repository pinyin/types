export type DeepReadonly<T, K extends keyof T = keyof T> = {
    readonly [key in K]: Required<T>[key] extends object ?
        DeepReadonly<Required<T>[key]> :
        T[key]
}

