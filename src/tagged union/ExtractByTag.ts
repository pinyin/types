import {ContentKey} from './ContentKey'
import {DefaultContentKey} from './DefaultContentKey'
import {DefaultTagKey} from './DefaultTagKey'
import {Tag} from './Tag'
import {Tagged} from './Tagged'
import {TagKey} from './TagKey'

export type ExtractByTag<D extends Tagged<Tag, any, any, any>,
    T extends Tag,
    TK extends TagKey = DefaultTagKey,
    CK extends ContentKey = DefaultContentKey> = {
    [Type in T]: D extends Tagged<Type, any, TK, CK> ? D : never
}[T]

