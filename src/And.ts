export type And<A extends boolean, B extends boolean> =
    A extends true ?
        B extends true ?
            true :
            false :
        false

