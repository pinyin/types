import {ContentKeyOf} from './ContentKeyOf'
import {DefaultTagKey} from './DefaultTagKey'
import {ExtractByTag} from './ExtractByTag'
import {Tag} from './Tag'
import {Tagged} from './Tagged'
import {TagKeyOf} from './TagKeyOf'

export function taggedAs<U extends Tagged<Tag, any, any, any>,
    T extends Tag,
    TK extends TagKeyOf<U>,
    CK extends ContentKeyOf<U>>(
    item: U,
    tag: T,
    tagKey: TK = DefaultTagKey as TK,
): item is ExtractByTag<U, T, TK, CK> {
    return item[tagKey] === tag as any
}
