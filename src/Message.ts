import {DiscriminateByMap} from './DiscriminateByMap'

export type Message<T extends object, K extends keyof T = keyof T> = DiscriminateByMap<{
    [Key in K]: { payload: T[Key] }
}>

