import {primitive} from './primitive'

export type Serializable =
    Exclude<primitive, symbol> |
    Iterable<Exclude<primitive, symbol>> |
    { [name: string]: Serializable }

