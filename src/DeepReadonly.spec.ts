import {check} from 'typings-tester'
import {DeepReadonly} from './DeepReadonly'

type T = { a: string, readonly b: number, obj: { a: string } }
const t: T = {a: 'a', b: 1, obj: {a: 'a'}}
const tr: DeepReadonly<T> = {a: 'a', b: 1, obj: {a: 'a'}}

t.a = 'a'
t.obj.a = 'a'
// typings:expect-error
tr.a = 'a'
// typings:expect-error
tr.obj.a = 'a'

describe('DeepReadonly', () => {
    it(`should mark all keys as required recursively`, () => {
        check([__filename], 'tsconfig.json')
    })
})
