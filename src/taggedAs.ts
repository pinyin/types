import {ExtractByTag} from './ExtractByTag'
import {Tag} from './Tag'
import {Tagged} from './Tagged'
import {TagKey} from './TagKey'

export function taggedAs<U extends Tagged, T extends Tag>(
    tag: T,
    item: U,
): item is ExtractByTag<U, T> {
    return item[TagKey] === tag
}
