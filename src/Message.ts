import {IsNothing} from './IsNothing'
import {nothing} from './nothing'
import {TagKey} from './TagKey'

export type Message<S extends object, K extends Exclude<keyof S, nothing> = Exclude<keyof S, nothing>> = {
    [key in K]: IsNothing<S[key]> extends true ?
        { [TagKey]: key, payload?: nothing } :
        { [TagKey]: key, payload: S[key] }
}[K]

export type PayloadOf<M extends Message<any>> = M['payload']

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
