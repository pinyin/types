export type Discriminated<T extends {[Key in K]: object}, K extends keyof T = keyof T> = {
    [Key in K]: { type: Key } & T[Key]
}[K]
