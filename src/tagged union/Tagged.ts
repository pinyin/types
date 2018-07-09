import {IsAny} from '../IsAny'
import {IsNothing} from '../IsNothing'
import {nothing} from '../nothing'
import {DefaultContentKey} from './DefaultContentKey'
import {DefaultTagKey} from './DefaultTagKey'
import {Tag} from './Tag'

export type Tagged<T extends Tag = Tag, C = any, TK extends string | symbol = DefaultTagKey, CK extends string | symbol = DefaultContentKey> =
    IsAny<C> extends false ?
        IsNothing<C> extends true ?
            { [k in TK]: T } & { [ck in CK]?: nothing } :
            { [k in TK]: T } & { [ck in CK]: C } :
        { [k in TK]: T } & { [ck in CK]?: any }

