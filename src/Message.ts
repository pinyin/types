import {IsNothing} from './IsNothing'
import {nothing} from './nothing'
import {TagKey} from './TagKey'

export type Message<S extends object, K extends keyof S = keyof S> = {
    [key in K]: IsNothing<S[key]> extends true ?
        { [TagKey]: key, payload?: nothing } :
        { [TagKey]: key, payload: S[key] }
}[K]

export type PayloadOf<M extends Message<any>> = M['payload']
