import {Tag} from './Tag'

export type TagMap<T extends Tag = Tag> = {
    [Key in T]: any
}
