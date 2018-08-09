import {check} from 'typings-tester'
import {DeepRequired} from './DeepRequired'

type T = { a: string, b?: number, obj: { readonly a: string, b?: number }, objo?: { a: string, b?: number, c: number | undefined, d?: number | undefined } }
const t: T =
    {a: 'a', b: 1, obj: {a: 'a', b: 1}, objo: {a: 'a', b: 1, c: undefined}}
const tr: DeepRequired<T> =
    {a: 'a', b: 1, obj: {a: 'a', b: 1}, objo: {a: 'a', b: 1, c: undefined, d: 1}}

let num: number
let str: string
let numn: number | undefined

str = t.a
str = tr.a
// typings:expect-error
num = t.b
num = tr.b
str = t.obj.a
str = tr.obj.a
str = tr.objo.a
num = tr.objo.b
// typings:expect-error
num = tr.objo.c
numn = tr.objo.c
num = tr.objo.d
numn = tr.objo.d
// typings:expect-error
t.obj.a = 'a'
// typings:expect-error
tr.obj.a = 'a'

describe('DeepRequired', () => {
    it(`should mark all keys as required recursively`, () => {
        check([__filename], 'tsconfig.json')
    })
})
