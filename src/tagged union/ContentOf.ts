import {ContentKeyOf} from './ContentKeyOf'
import {Tagged} from './Tagged'

export type ContentOf<TG extends Tagged<any, any, any, any>> = TG[ContentKeyOf<TG>]