export type DeepReadonly<T, K extends keyof T = keyof T> =
    T extends object ?
        { +readonly [key in K]: DeepReadonly<T[key]> } :
        NonNullable<T>
//
// const a: DeepReadonly<{
//     b: {
//         readonly c: {
//             d: 'd'
//         }
//     }
// }> = {} as any
//
// a.b.c.d = 'd'

