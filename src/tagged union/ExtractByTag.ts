import {Tag} from './Tag'
import {Tagged} from './Tagged'

export type ExtractByTag<D extends Tagged<any, any>, T extends Tag> = {
    [Type in T]: D extends Tagged<Type, any> ? D : never
}[T]

