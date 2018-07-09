import {TagFromMap} from './TagFromMap'
import {Tagged} from './Tagged'
import {TagMap} from './TagMap'

export type TaggedByMap<S extends TagMap, K extends TagFromMap<S> = TagFromMap<S>> = {
    [key in K]: Tagged<key, S[key]>
}[K]
