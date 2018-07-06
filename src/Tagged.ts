import {IsNothing} from './IsNothing'
import {nothing} from './nothing'
import {Tag} from './Tag'
import {TagKey} from './TagKey'

export type Tagged<T extends Tag = Tag, C = any> =
    IsNothing<C> extends true ?
        { [TagKey]: T, content?: nothing } :
        { [TagKey]: T, content: C }
