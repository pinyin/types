import {Tagged} from './Tagged'
import {ContentKey} from './ContentKey'

export type ContentOf<M extends Tagged<any>> = M[ContentKey]
