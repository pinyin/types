import {nothing} from '../nothing'
import {tagAs} from './tagAs'

describe(`${tagAs.name}`, () => {
    it(`should support default keys`, () => {
        expect(tagAs('a')).toEqual({kind: 'a'})
        expect(tagAs('a', nothing)).toEqual({kind: 'a'})
        expect(tagAs('a', 'b')).toEqual({kind: 'a', content: 'b'})
    })
    it(`should support custom keys`, () => {
        expect(tagAs('a', nothing, 'type', 'payload')).toEqual({type: 'a'})
        expect(tagAs('a', 'b', 'type', 'payload')).toEqual({type: 'a', payload: 'b'})
    })
})
