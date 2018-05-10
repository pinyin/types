import {Discriminated} from './Discriminated'

export type DiscriminateByMap<T extends {[Key in K]: object}, K extends keyof T = keyof T> = {
    [Key in K]: Discriminated<Key> & T[Key]
}[K]
