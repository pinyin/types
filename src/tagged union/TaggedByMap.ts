import {TagFromMap} from './TagFromMap'
import {Tagged} from './Tagged'
import {TagMap} from './TagMap'

export type TaggedByMap<S extends TagMap> = {
    [key in TagFromMap<S>]: Tagged<key, S[key]>
}[TagFromMap<S>]
