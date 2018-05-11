import {Discriminated} from './Discriminated'

export type DiscriminateByMap<T extends object, K extends keyof T = keyof T> = {
    [Key in K]: Discriminated<Key> & T[Key]
}[K]
