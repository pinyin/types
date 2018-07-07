import {TagMap} from './TagMap'

export type TagFromMap<D extends TagMap> = NonNullable<keyof D>

