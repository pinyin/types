export type DeepRequired<T extends object, K extends keyof T = keyof T> = {
    [key in K]-?: Required<T>[key] extends object ?
        DeepRequired<Required<T>[key]> :
        T[key]
}

