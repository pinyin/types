export type ObjExclude<A extends object, B extends object, KB extends keyof B = keyof B> = A & {
    [key in KB]?: never // TODO key still exists
}

