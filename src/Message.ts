import {DiscriminateByMap} from './DiscriminateByMap'

export type Message<T extends object = object, K extends keyof T = keyof T> = DiscriminateByMap<{
    [Key in K]: T[Key] extends undefined | null | never ? {} : { payload: T[Key] }
}>

