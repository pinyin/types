import {Default, matchMessage} from './matchMessage'
import {Message} from './Message'

describe(`${matchMessage.name}`, () => {
    type A = {
        a: 'a'
        b: 'b'
        c: 1
    }

    type Msg = Message<A>

    const a: Msg = {type: 'a', payload: 'a'}
    const b: Msg = {type: 'b', payload: 'b'}
    const c: Msg = {type: 'c', payload: 1}

    it(`should match message types by name`, () => {
        function match(msg: Msg) {
            return matchMessage<A, number>(msg, ['a', 'b', 'c'])
                .a(payload => 1)
                .b(payload => 2)
                .c(payload => payload + 2)
                [Default](4)
        }
        expect(match(a)).toEqual(1)
        expect(match(b)).toEqual(2)
        expect(match(c)).toEqual(3)
        expect(match({type: 'd'} as any)).toEqual(4)
    })

    it(`should match message types by Proxy`, () => {
        function match(msg: Msg) {
            return matchMessage<A, number>(msg)
                .a(payload => 1)
                .b(payload => 2)
                .c(payload => payload + 2)
                [Default](4)
        }
        expect(match(a)).toEqual(1)
        expect(match(b)).toEqual(2)
        expect(match(c)).toEqual(3)
        expect(match({type: 'd'} as any)).toEqual(4)
    })

})
