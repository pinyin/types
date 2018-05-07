import {EventHandler} from './EventHandler'

export type EventHandlers<Shape extends object, Keys extends keyof Shape = keyof Shape> = {
    [K in Keys]: EventHandler<Shape[K]>
}
