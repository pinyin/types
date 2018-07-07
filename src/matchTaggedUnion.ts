import {TaggedUnion} from './TaggedUnion'
import {TagMap} from './TagMap'
import {TagFromMap} from './TagFromMap'

export function matchTaggedUnion<A extends TagMap, B>(union: TaggedUnion<A>,
                                                      tags?: ReadonlyArray<TagFromMap<A>>): ActionMatcher<A, B> {
    if (tags) {
        const target: any = {}
        let result: B = undefined as any
        tags.forEach(tag =>
            target[tag] = (matched: (content: TagMap[TagFromMap<A>]) => B) => {
                if (union.type === tag as any) {
                    result = matched(union.content)
                }
                return target
            }
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
                        if (union.type === tag as any) {
                            target[Default] = matched(union.content)
                        }
                        return proxy
                    }
                }
            }
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
