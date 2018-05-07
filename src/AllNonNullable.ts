export type AllNonNullable<T, K extends keyof T = keyof T> = Required<{
    [Key in K]: NonNullable<T[Key]>
}>
