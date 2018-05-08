import {primitive} from './primitive'

export type Serializable =
    primitive |
    Iterable<primitive> |
    { [name: string]: Serializable }

