import {Message} from './Message'
import {TagMap} from './TagMap'
import {TagOf} from './TagOf'

export function matchMessage<A extends TagMap, B>(message: Message<A>,
                                                  tags?: ReadonlyArray<TagOf<A>>): ActionMatcher<A, B> {
    if (tags) {
        const target: any = {}
        let result: B = undefined as any
        tags.forEach(tag =>
            target[tag] = (matched: (payload: TagMap[TagOf<A>]) => B) => {
                if (message.type === tag as any) {
                    result = matched(message.payload)
                }
                return target
            }
        )
        target[Default] = (value: B) =>
            result === undefined ? value : result
        return target
    } else {
        const proxy = new Proxy<ActionMatcher<A, B>>({[Default]: undefined} as any, {
            get(target: any, tag: TagOf<A>, receiver: any): any {
                if (tag === Default) {
                    return (value: B) => target[Default] === undefined ? value : target[Default]
                } else {
                    return (matched: (payload: TagMap[TagOf<A>]) => B) => {
                        if (message.type === tag as any) {
                            target[Default] = matched(message.payload)
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

export type ActionMatcher<A extends TagMap, B, T extends TagOf<A> = TagOf<A>> = {
    [type in T]: (matched: (payload: TagMap[type]) => B) => ActionMatcher<A, B, NonNullable<Exclude<T, type>>>
} & {
    [Default]: (value: B) => B
}
