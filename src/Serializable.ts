export type Serializable =
    number | string | boolean |
    List |
    { [name: string]: Serializable }

interface List extends Array<Serializable> {}
