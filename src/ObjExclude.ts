export type ObjExclude<A extends object,
    B extends Partial<A & B>,
    K extends Exclude<keyof A, keyof B> = Exclude<keyof A, keyof B>> = {
    [Key in K]: A[K]
}

