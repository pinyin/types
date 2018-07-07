import {IsNothing} from './IsNothing'
import {nothing} from './nothing'
import {Tag} from './Tag'
import {TagKey} from './TagKey'
import {ContentKey} from './ContentKey'

export type Tagged<T extends Tag = Tag, C = any> =
    IsNothing<C> extends true ?
        { [TagKey]: T, [ContentKey]?: nothing } :
        { [TagKey]: T, [ContentKey]: C }

