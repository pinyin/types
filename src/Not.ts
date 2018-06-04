export type Not<A extends boolean> =
    A extends true ? false : true
