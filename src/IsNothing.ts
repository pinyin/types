import {IsAny} from './IsAny'
import {something} from './something'

export type IsNothing<T> =
    IsAny<T> extends true ?
        false :
        T extends something ?
            false :
            true

