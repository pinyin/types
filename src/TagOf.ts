import {Tagged} from './Tagged'
import {TagKey} from './TagKey'

export type TagOf<M extends Tagged<any>> = M[TagKey]
