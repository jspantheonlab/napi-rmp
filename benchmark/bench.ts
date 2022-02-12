import b from 'benny'
import mpr from 'msgpackr'

import { tiny } from '../__test__/data'
import rmp from '../index'

const mprEn = mpr.encode(tiny)
const rmpEn = rmp.encode(tiny)
async function run() {
  await b.suite(
    'encode',

    b.add('mpr', () => {
      mpr.encode(tiny)
    }),

    b.add('rmp', () => {
      rmp.encode(tiny)
    }),

    b.cycle(),
    b.complete(),
  )

  await b.suite(
    'decode',

    b.add('mpr', () => {
      mpr.decode(mprEn)
    }),

    b.add('rmp', () => {
      rmp.decode(rmpEn)
    }),

    b.cycle(),
    b.complete(),
  )
}

run().catch((e) => {
  console.error(e)
})
