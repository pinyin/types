export type InstanceOf<A extends { new(...params: Array<any>): any }> =
    A extends { new(...params: Array<any>): infer B }
        ? B
        : never

