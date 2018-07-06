import {nothing} from './nothing'
import {Tagged} from './Tagged'

export type TaggedUnion<S extends object, K extends Exclude<keyof S, nothing> = Exclude<keyof S, nothing>> = {
    [key in K]: Tagged<key, S[key]>
}[K]

export type ContentOf<M extends TaggedUnion<any>> = M['content']

// type S = {
//     a: number
//     b?: string
//     c: undefined
// }
//
// type M = Message<S>
//
// const m = {} as M
//
// if(m.type === 'a') {
//     m.payload // number
// }
//
// if(m.type === 'b') {
//     m.payload // string | undefined // TODO test types
// }
//
// if(m.type === 'c') {
//     m.payload // nothing
//     let b: M = {type: 'c'}
// }
