import {IsAny} from './IsAny'
import {something} from './something'
import {nothing} from './nothing'

export type IsNothing<T> =
    IsAny<T> extends true ?
        false :
        T extends something ?
            false :
            true

export function isNothing(maybe: any): maybe is nothing {
    return typeof maybe === 'undefined' || maybe === null || Number.isNaN(maybe as any)
}
