import {isNothing} from '../IsNothing'
import {ContentKey} from './ContentKey'
import {DefaultContentKey} from './DefaultContentKey'
import {DefaultTagKey} from './DefaultTagKey'
import {Tag} from './Tag'
import {Tagged} from './Tagged'
import {TagKey} from './TagKey'

export function tagAs<T extends Tag,
    C,
    TK extends TagKey,
    CK extends ContentKey>(tag: T,
                           content?: C,
                           tagKey: TK = DefaultTagKey as TK,
                           contentKey: CK = DefaultContentKey as CK): Tagged<T, C, TK, CK> {
    if (isNothing(content)) {
        return {[tagKey]: tag} as any
    } else {
        return {[tagKey]: tag, [contentKey]: content} as any
    }
}
