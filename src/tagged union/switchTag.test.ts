import {ContentKey} from './ContentKey'
import {Default, switchTag} from './switchTag'
import {TaggedUnion} from './TaggedUnion'
import {TagKey} from './TagKey'

describe(`${switchTag.name}`, () => {
    type A = {
        a: 'a'
        b: 'b'
        c: 1
    }

    type Msg = TaggedUnion<A>

    const a: Msg = {[TagKey]: 'a', [ContentKey]: 'a'}
    const b: Msg = {[TagKey]: 'b', [ContentKey]: 'b'}
    const c: Msg = {[TagKey]: 'c', [ContentKey]: 1}

    it(`should match message types by name`, () => {
        function match(msg: Msg) {
            return switchTag<A, number>(msg, ['a', 'b', 'c'])
                .a(content => 1)
                .b(content => 2)
                .c(content => content + 2)
                [Default](4)
        }

        expect(match(a)).toEqual(1)
        expect(match(b)).toEqual(2)
        expect(match(c)).toEqual(3)
        expect(match({type: 'd'} as any)).toEqual(4)
    })

    it(`should match message types by Proxy`, () => {
        function match(msg: Msg) {
            return switchTag<A, number>(msg)
                .a(content => 1)
                .b(content => 2)
                .c(content => content + 2)
                [Default](4)
        }

        expect(match(a)).toEqual(1)
        expect(match(b)).toEqual(2)
        expect(match(c)).toEqual(3)
        expect(match({type: 'd'} as any)).toEqual(4)
    })

})
