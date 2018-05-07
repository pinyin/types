import {InstanceOf} from '@pinyin/types'
import {Component, ComponentClass, ReactHTML} from 'react'
import {ElementFromHTMLTag} from './ElementFromHTMLTag'

export type RefOf<A> =
    A extends Component<any, any> ?
        A :
        A extends ComponentClass<any> ?
            InstanceOf<A> :
            A extends keyof ReactHTML ?
                ElementFromHTMLTag<A> :
                never
