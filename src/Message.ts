import {TagKey} from './TagKey'

export type Message<S extends object, K extends keyof S = keyof S> = {
    [key in K]: {
        [TagKey]: key
        payload: S[key]
    }
}[K]

export type PayloadOf<M extends Message<any>> = M['payload']
