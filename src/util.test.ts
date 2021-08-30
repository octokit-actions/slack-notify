import {filterByKeys, splitComma} from './util'

describe('splitComma', () => {
  test('splitComma normal', () => {
    expect(splitComma('a,b,c,d')).toEqual(['a', 'b', 'c', 'd'])
  })
  test('splitComma trim', () => {
    expect(splitComma('a  , b,\nc,d\n')).toEqual(['a', 'b', 'c', 'd'])
  })
  test('splitComma empty value', () => {
    expect(splitComma('a,b,c,d, ,')).toEqual(['a', 'b', 'c', 'd'])
  })
})

describe('filterByKeys', () => {
  test('filterByKeys normal', () => {
    expect(filterByKeys({key: 'value', key2: 'value2'}, ['key'])).toEqual({
      key: 'value'
    })
  })
  test('filterByKeys undefined value', () => {
    expect(filterByKeys({key: undefined}, ['key'])).toEqual({})
  })
  test('filterByKeys unselect key', () => {
    expect(filterByKeys({key: undefined}, [])).toEqual({})
  })
})
