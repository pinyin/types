import {check} from 'typings-tester'
import {ParamsOf} from './ParamsOf'

type Func = (p1: number, p2: string, p3: boolean, p4: any) => void

type P = ParamsOf<Func>
let p: P = '' as any

// typings:expect-error
p[0] === ''
p[0] === 0
// typings:expect-error
p[1] === 0
p[1] === ''
p[2] === true
p[3] === true
p[4] === true


describe(`Params`, () => {
    it(`should return function's param type`, () => {
        check([__filename], 'tsconfig.json')
    })
})
