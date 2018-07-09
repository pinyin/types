import {Tagged} from './Tagged'
import {TagKeyOf} from './TagKeyOf'

export type TagOf<TG extends Tagged<any, any, any, any>> = TG[TagKeyOf<TG>]