import {ContentKey} from './ContentKey'
import {DefaultContentKey} from './DefaultContentKey'
import {DefaultTagKey} from './DefaultTagKey'
import {ExtractByTag} from './ExtractByTag'
import {Tag} from './Tag'
import {Tagged} from './Tagged'
import {TagKey} from './TagKey'

export function taggedAs<U extends Tagged<Tag, any, TK, CK>,
    T extends Tag,
    TK extends TagKey = DefaultTagKey,
    CK extends ContentKey = DefaultContentKey>(
    item: U,
    tag: T,
    tagKey: TK = DefaultTagKey as TK,
): item is ExtractByTag<U, T, TK, CK> {
    return item[tagKey] === tag as any
}
