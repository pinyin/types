import {Discriminated} from './Discriminated'

export type Message<T extends object, K extends keyof T = keyof T> = Discriminated<{
    [Key in K]: { payload: T[Key] }
}>

