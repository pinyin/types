import {Tagged} from './Tagged'
import {TagMap} from './TagMap'
import {TagOf} from './TagOf'

export type TaggedByMap<TM extends TagMap, K extends TagOf<TM> = TagOf<TM>> = {
    [Key in K]: Tagged<Key> & TM[Key]
}[K]
