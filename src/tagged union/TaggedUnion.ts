import {ContentKey} from './ContentKey'
import {DefaultContentKey} from './DefaultContentKey'
import {DefaultTagKey} from './DefaultTagKey'
import {TagFromMap} from './TagFromMap'
import {Tagged} from './Tagged'
import {TagKey} from './TagKey'

export type TaggedUnion<S extends object, TK extends TagKey = DefaultTagKey, CK extends ContentKey = DefaultContentKey> = {
    [key in TagFromMap<S>]: Tagged<key, S[key], TK, CK>
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
