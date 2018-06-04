import {And} from './And'
import {Not} from './Not'
import {Or} from './Or'

export type Xor<A extends boolean, B extends boolean> =
    Or<And<A, Not<B>>, And<Not<A>, B>>


