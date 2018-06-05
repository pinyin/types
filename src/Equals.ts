import {And} from './And'
import {IsAny} from './IsAny'

export type Equals<A, B> = IsAny<A> extends true ?
    IsAny<B> extends true ?
        true :
        false :
    And<A extends B ? true : false, B extends A ? true : false>

// let a: Equals<'a', string> = '' as any
//
// if(a === true) {
// }
// if(a === false) {
// }
//
//
// let b: Equals<'a', 'a'> = '' as any
//
// if(b === true) {
// }
// if(b === false) {
// }
//
// let c: Equals<string, 'a'> = '' as any
//
// if(c === true) {
// }
// if(c === false) {
// }
//
// let d: Equals<any, 'a'> = '' as any
//
// if(d === true) {
// }
// if(d === false) {
// }
//
// let e: Equals<any, any> = '' as any
//
// if(e === true) {
// }
// if(e === false) {
// }
