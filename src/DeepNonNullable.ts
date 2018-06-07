export type DeepNonNullable<T, K extends keyof T = keyof T> =
    T extends object ?
        { [key in K]-?: DeepNonNullable<NonNullable<T[key]>> } :
        NonNullable<T>
//
// const a: DeepNonNullable<{
//     b?: {
//         c?: {
//             d: 'd'
//         }
//     }
// }> = {} as any
//
// const d: 'd' = a.b.c.d
