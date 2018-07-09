import {ContentKey} from './ContentKey'
import {Tagged} from './Tagged'

export type ContentOf<TG extends Tagged<any, any>> = TG[ContentKey]