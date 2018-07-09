import {ContentKey} from './ContentKey'
import {Tag} from './Tag'
import {TagKey} from './TagKey'

export type Tagged<T extends Tag, C> = { [TagKey]: T, [ContentKey]: C }

