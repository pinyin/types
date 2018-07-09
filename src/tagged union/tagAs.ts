import {ContentKey} from './ContentKey'
import {Tag} from './Tag'
import {Tagged} from './Tagged'
import {TagKey} from './TagKey'

export function tagAs<T extends Tag,
    C,
    TK extends TagKey,
    CK extends ContentKey>(tag: T,
                           content: C,
                           tagKey: TK,
                           contentKey: CK): Tagged<T, C, TK, CK> {
    return {[tagKey]: tag, [contentKey]: content} as Tagged<T, C, TK, CK>
}
