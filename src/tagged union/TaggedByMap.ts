import {TagFromMap} from './TagFromMap'
import {Tagged} from './Tagged'

export type TaggedByMap<S extends object> = {
    [key in TagFromMap<S>]: Tagged<key, S[key]>
}[TagFromMap<S>]

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
