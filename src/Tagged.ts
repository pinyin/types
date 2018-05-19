import {Tag} from './Tag'
import {TagKey} from './TagKey'

export type Tagged<T extends Tag = string> = {
    [TagKey]: T
}
