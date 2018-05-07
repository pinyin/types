import {Component, ComponentClass, DetailedHTMLFactory, ReactHTML, StatelessComponent} from 'react'

export type PropsOf<T extends ComponentClass<any> | Component<any, any> | StatelessComponent<any> | keyof ReactHTML> =
    T extends ComponentClass<infer R> ?
        R :
        T extends StatelessComponent<infer R> ?
            R :
            T extends Component<infer R, any> ?
                R :
                T extends keyof ReactHTML ?
                    ReactHTML[T] extends DetailedHTMLFactory<infer R, any> ?
                        R :
                        never :
                    never

