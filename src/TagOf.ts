import {Tag} from './Tag'
import {Tagged} from './Tagged'
import {TagKey} from './TagKey'
import {TagMap} from './TagMap'

export type TagOf<D extends Tagged | TagMap> =
    D extends Tagged ?
        D[TagKey] :
        keyof D & Tag

