import {Tag} from './Tag'
import {Tagged} from './Tagged'

export type MatchTag<D extends Tagged<Tag>, T extends Tag> = {
    [Type in T]: D extends Tagged<Type> ? D : never
}[T]

