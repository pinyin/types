export type RequiredNonNull<T, K extends keyof T = keyof T> = Required<{
    [Key in K]: NonNullable<T[Key]>
}>
