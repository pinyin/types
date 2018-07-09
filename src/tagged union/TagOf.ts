import {Tagged} from './Tagged'
import {TagKey} from './TagKey'

export type TagOf<TG extends Tagged<any, any>> = TG[TagKey]