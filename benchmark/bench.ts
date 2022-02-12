import b from 'benny'

import { tiny } from '../__test__/data'
import rmp from '../index'

const rmpEn = rmp.encode(tiny)
async function run() {
  await b.suite(
    'encode',

    b.add('rmp', () => {
      rmp.encode(tiny)
    }),

    b.cycle(),
    b.complete(),
  )

  await b.suite(
    'decode',

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
