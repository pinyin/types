import {check} from 'typings-tester'

import {Equals} from './Equals'

{
    const equals: Equals<'a', string> = '' as any
// typings:expect-error
    equals === true
    equals === false
}

{
    const equals: Equals<'a', 'a'> = '' as any
    equals === true
// typings:expect-error
    equals === false
}

{
    const equals: Equals<string, 'a'> = '' as any
// typings:expect-error
    equals === true
    equals === false
}

{
    const equals: Equals<any, 'a'> = '' as any
// typings:expect-error
    equals === true
    equals === false
}

{
    const equals: Equals<any, any> = '' as any
    equals === true
// typings:expect-error
    equals === false
}

describe(`Equals`, () => {
    it(`should return true if two types are identical`, () => {
        check([__filename], 'tsconfig.json')
    })
})
