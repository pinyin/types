export type px = number
export type ms = number
export type rad = number
export type pct = number
export type ratio = number

export type timestamp = string

export {DeepNonNullable} from './src/DeepNonNullable'
export {DeepReadonly} from './src/DeepReadonly'
export {Equals} from './src/Equals'
export {EventHandler} from './src/EventHandler'
export {EventHandlers} from './src/EventHandlers'
export {InstanceOf} from './src/InstanceOf'
export {IsAny} from './src/IsAny'
export {ObjExclude} from './src/ObjExclude'
export {primitive} from './src/primitive'
export {Promised} from './src/Promised'
export {JSONObject} from './src/JSONObject'
export {ShapeOf} from './src/ShapeOf'

export {nothing} from './src/nothing'
export {something} from './src/something'
export {IsNothing, isNothing} from './src/IsNothing'

export {And} from './src/And'
export {Or} from './src/Or'
export {Not} from './src/Not'
export {Xor} from './src/Xor'

export {TagOf} from './src/tagged union/TagOf'
export {TagKey} from './src/tagged union/TagKey'
export {ContentOf} from './src/tagged union/ContentOf'
export {ContentKey} from './src/tagged union/ContentKey'
export {TagFromMap} from './src/tagged union/TagFromMap'
export {Tag}from './src/tagged union/Tag'
export {Tagged} from './src/tagged union/Tagged'
export {TaggedByMap} from './src/tagged union/TaggedByMap'
export {ExtractByTag} from './src/tagged union/ExtractByTag'
export {switchTag, Default} from './src/tagged union/switchTag'
export {TagMap}from './src/tagged union/TagMap'
export {tagAs} from './src/tagged union/tagAs'
export {taggedAs} from './src/tagged union/taggedAs'
