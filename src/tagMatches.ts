import {MatchTag} from './MatchTag'
import {Tag} from './Tag'
import {Tagged} from './Tagged'
import {TagKey} from './TagKey'

export function tagMatches<U extends Tagged, T extends Tag>(
    item: U,
    tag: T
): item is MatchTag<U, T> {
    return item[TagKey] === tag
}
