import {Tag} from './Tag'

export type Tagged<T extends Tag, C, TK extends string | symbol, CK extends string | symbol> =
    { [k in TK]: T } & { [ck in CK]: C }

