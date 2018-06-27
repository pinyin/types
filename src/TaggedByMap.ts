import {Tagged} from './Tagged'
import {TagMap} from './TagMap'

export type TaggedByMap<T extends TagMap, K extends keyof T = keyof T> = {
    [key in K]: Tagged<key> & T[key]
}
