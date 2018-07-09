import {nothing} from '../nothing'
import {tagAs} from './tagAs'

describe(`${tagAs.name}`, () => {
    it(`should support custom keys`, () => {
        expect(tagAs('a', nothing)).toEqual({tag: 'a', content: null})
        expect(tagAs('a', 'b')).toEqual({tag: 'a', content: 'b'})
    })
})
