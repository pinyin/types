import {And} from './And'
import {nothing} from './nothing'
import {something} from './something'

export type IsAny<T> =
    And<something extends T ? true : false,
        nothing extends T ? true : false>

// let a: IsAny<'a'> = '' as any
//
// if(a === true) {
// }
// if(a === false) {
// }
//
//
// let b: IsAny<object> = '' as any
//
// if(b === true) {
// }
// if(b === false) {
// }
//
// let c: IsAny<any> = '' as any
//
// if(c === true) {
// }
// if(c === false) {
// }
