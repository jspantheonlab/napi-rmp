import test from 'ava'

import { encode, decode } from '../index'

import { tiny, small, medium, large } from './data'

test('tiny', (t) => {
  const en = encode(tiny)
  const de = decode(en)
  t.deepEqual(tiny, de)
})

test('small', (t) => {
  const en = encode(small)
  const de = decode(en)
  t.deepEqual(small, de)
})

test.skip('medium', (t) => {
  const en = encode(medium)
  const de = decode(en)
  t.deepEqual(medium, de)
})

test.skip('large', (t) => {
  const en = encode(large)
  const de = decode(en)
  t.deepEqual(large, de)
})
