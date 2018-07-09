import {ContentKey} from './ContentKey'
import {Tag} from './Tag'
import {Tagged} from './Tagged'
import {TagKey} from './TagKey'

export function tagAs<T extends Tag, C>(tag: T,
                                        content: C): Tagged<T, C> {
    return {[TagKey]: tag, [ContentKey]: content} as Tagged<T, C>
}
