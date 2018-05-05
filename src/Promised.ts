type Promised<T extends Promise<any>> = T extends Promise<infer V> ? V : never
