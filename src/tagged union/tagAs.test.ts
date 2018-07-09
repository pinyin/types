import {nothing} from '../nothing'
import {tagAs} from './tagAs'

describe(`${tagAs.name}`, () => {
    it(`should support custom keys`, () => {
        expect(tagAs('a', nothing, 'type', 'payload')).toEqual({type: 'a', payload: null})
        expect(tagAs('a', 'b', 'type', 'payload')).toEqual({type: 'a', payload: 'b'})
    })
})
