import {Tagged} from './Tagged'

export type ContentKeyOf<TG extends Tagged<any, any, any, any>> =
    TG extends Tagged<any, any, any, infer CK> ? CK : never