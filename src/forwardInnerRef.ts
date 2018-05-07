import {ClassAttributes, ComponentType, createElement, forwardRef, Ref} from 'react'
import {PropsOf} from './PropsOf'

// TODO support other keys
export function forwardInnerRef<C extends WithInnerRef<any, any>>(HOC: C): ForwardedInnerRef<C> {
    return forwardRef<InnerRefOf<C>, PropsOf<ForwardedInnerRef<C>>>((props, ref) => {
        return createElement<PropsOf<C>>(
            HOC,
            Object.assign(
                {},
                props,
                {innerRef: ref}
            ),
            props.children
        )
    })
}

export type WithInnerRef<C, P extends { innerRef?: Ref<C> }> = ComponentType<P>

export type ForwardedInnerRef<C extends WithInnerRef<any, any>> =
    ComponentType<PropsOf<C> &
        { innerRef: never } &
        ClassAttributes<InnerRefOf<C>>>

export type InnerRefOf<C extends WithInnerRef<any, any>> =
    C extends WithInnerRef<infer R, any> ? R : never

