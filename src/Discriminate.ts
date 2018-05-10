import {Discriminated} from './Discriminated'

export type Discriminate<D extends Discriminated<any>, T extends D['type'] = D['type']> = {
    [Type in T]: D extends Discriminated<Type> ? D : never
}[T]

