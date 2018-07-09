import {Tagged} from './Tagged'

export type TagKeyOf<TG extends Tagged<any, any, any, any>> =
    TG extends Tagged<any, any, infer TK, any> ? TK : never