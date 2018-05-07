import {DetailedHTMLFactory, ReactHTML} from 'react'

export type ElementFromHTMLTag<A extends keyof ReactHTML> =
    ReactHTML[A] extends DetailedHTMLFactory<any, infer B> ?
        B :
        never
