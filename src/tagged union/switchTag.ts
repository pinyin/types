import {nothing} from '../nothing'
import {ContentKey} from './ContentKey'
import {TagFromMap} from './TagFromMap'
import {TaggedByMap} from './TaggedByMap'
import {TagKey} from './TagKey'
import {TagMap} from './TagMap'

export function switchTag<A extends TagMap, B>(
    union: TaggedByMap<A>,
    tags: ReadonlyArray<TagFromMap<A>> | null = nothing,
): ActionMatcher<A, B> {
    if (tags) {
        const target: any = {}
        let result: B = undefined as any
        tags.forEach(tag =>
            target[tag] = (matched: (content: TagMap[TagFromMap<A>]) => B) => {
                if (union[TagKey] === tag as any) {
                    result = matched(union[ContentKey])
                }
                return target
            },
        )
        target[Default] = (value: B) =>
            result === undefined ? value : result
        return target
    } else {
        const proxy = new Proxy<ActionMatcher<A, B>>({[Default]: undefined} as any, {
            get(target: any, tag: TagFromMap<A>, receiver: any): any {
                if (tag === Default) {
                    return (value: B) => target[Default] === undefined ? value : target[Default]
                } else {
                    return (matched: (content: TagMap[TagFromMap<A>]) => B) => {
                        if (union[TagKey] === tag as any) {
                            target[Default] = matched(union[ContentKey])
                        }
                        return proxy
                    }
                }
            },
        })
        return proxy
    }
}

export const Default = Symbol('Default')

export type ActionMatcher<A extends TagMap, B, T extends TagFromMap<A> = TagFromMap<A>> = {
    [type in T]: (matched: (content: TagMap[type]) => B) => ActionMatcher<A, B, NonNullable<Exclude<T, type>>>
} & {
    [Default]: (value: B) => B
}
