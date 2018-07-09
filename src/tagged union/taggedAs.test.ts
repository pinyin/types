import {nothing} from '../nothing'
import {DefaultContentKey} from './DefaultContentKey'
import {DefaultTagKey} from './DefaultTagKey'
import {ExtractByTag} from './ExtractByTag'
import {taggedAs} from './taggedAs'
import {TaggedUnion} from './TaggedUnion'

type U = {
    add: number
    concat: string
    destroy: nothing
}

type TU = TaggedUnion<U, DefaultTagKey, DefaultContentKey>

const add: ExtractByTag<TU, 'add'> = {kind: 'add', content: 1}

type Action = TaggedUnion<U, 'type', 'payload'>

const addCustom: ExtractByTag<Action, 'add', 'type', 'payload'> = {
    type: 'add', payload: 1,
}

describe(`${taggedAs.name}`, () => {
    it(`should be able to discriminate tagged union`, () => {
        expect(taggedAs(add, 'add')).toBeTruthy()
        expect(taggedAs(addCustom, 'add', 'type')).toBeTruthy()
        expect(taggedAs(add, 'add') ? add.content.toString() : 8).toEqual('1')
    })
})