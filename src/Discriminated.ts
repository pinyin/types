export type Discriminated<T extends object, K extends keyof T = keyof T> = {
    [k in K]: {
    type: k
} & T[k]
}[K]
