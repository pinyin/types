export type ObjExclude<A extends object,
    B extends object,
    K extends Exclude<keyof A, keyof B> = Exclude<keyof A, keyof B>> = {
    [Key in K]: A[K]
}

