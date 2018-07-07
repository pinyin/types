import {Tagged} from './Tagged'
import {Tag} from './Tag'
import {TagKey} from './TagKey'
import {ContentKey} from './ContentKey'
import {nothing} from './nothing'
import {isNothing} from './IsNothing'

export function tagAs<T extends Tag, C = nothing>(tag: T, content?: C): Tagged<T, C> {
    if (isNothing(content)) {
        return {[TagKey]: tag} as any
    } else {
        return {[TagKey]: tag, [ContentKey]: content} as any
    }
}