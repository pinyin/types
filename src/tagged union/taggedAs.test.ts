import {nothing} from '../nothing'
import {ContentKey} from './ContentKey'
import {ExtractByTag} from './ExtractByTag'
import {taggedAs} from './taggedAs'
import {TaggedByMap} from './TaggedByMap'
import {TagKey} from './TagKey'

type U = {
    add: number
    concat: string
    destroy: nothing
}

type TU = TaggedByMap<U>

const add: ExtractByTag<TU, 'add'> = {[TagKey]: 'add', [ContentKey]: 1}

describe(`${taggedAs.name}`, () => {
    it(`should be able to discriminate tagged union`, () => {
        expect(taggedAs(add, 'add')).toBeTruthy()
        expect(taggedAs(add, 'add') ? add.content.toString() : 8).toEqual('1')
    })
})