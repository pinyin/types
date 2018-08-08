import {And} from './And'
import {IsAny} from './IsAny'

export type Equals<A, B> = IsAny<A> extends true ?
    IsAny<B> extends true ?
        true :
        false :
    And<A extends B ? true : false, B extends A ? true : false>

