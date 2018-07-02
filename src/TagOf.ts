import {TagMap} from './TagMap'

export type TagOf<D extends TagMap> = NonNullable<keyof D>

