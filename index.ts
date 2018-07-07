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
export {Serializable} from './src/Serializable'
export {ShapeOf} from './src/ShapeOf'

export {nothing} from './src/nothing'
export {something} from './src/something'
export {IsNothing, isNothing} from './src/IsNothing'

export {And} from './src/And'
export {Or} from './src/Or'
export {Not} from './src/Not'
export {Xor} from './src/Xor'

export {ContentKey} from './src/ContentKey'
export {ContentOf} from './src/ContentOf'
export {TagKey} from './src/TagKey'
export {TagOf} from './src/TagOf'
export {TagFromMap} from './src/TagFromMap'
export {Tag}from './src/Tag'
export {Tagged} from './src/Tagged'
export {TaggedUnion} from './src/TaggedUnion'
export {ExtractByTag} from './src/ExtractByTag'
export {switchTag, Default} from './src/switchTag'
export {TagMap}from './src/TagMap'
export {tagMatches} from './src/tagMatches'
