export type AllNonNullable<T, K extends keyof T = keyof T> = {
    [key in K]-?: AllNonNullable<NonNullable<T[key]>>
}
//
// const a: AllNonNullable<{
//     b?: {
//         c?: {
//             d: 'd'
//         }
//     }
// }> = {} as any
//
// const d = a.b.c.d
