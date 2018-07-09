import {nothing} from '../nothing'
import {ContentKey} from './ContentKey'
import {tagAs} from './tagAs'
import {TagKey} from './TagKey'

describe(`${tagAs.name}`, () => {
    it(`should support custom keys`, () => {
        expect(tagAs('a', nothing)).toEqual({[TagKey]: 'a', [ContentKey]: null})
        expect(tagAs('a', 'b')).toEqual({[TagKey]: 'a', [ContentKey]: 'b'})
    })
})
