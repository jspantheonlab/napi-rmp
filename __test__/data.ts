function array(length: number) {
  const arr = new Array(length)
  for (let i = 0; i < arr.length; i++) {
    arr[i] = i
  }
  return arr
}

const tiny = {
  foo: 1,
  bar: 'abc',
}

const small = {
  foo: 1,
  bar: [1, 2, 3, 4, 'abc', 'def'],
  foobar: {
    foo: true,
    bar: -2147483649,
    foobar: {
      foo: [1, 2, 3, 4, 5],
      bar: 1.5,
      foobar: [true, false, 'abcdefghijkmonpqrstuvwxyz'],
    },
  },
}

let obj: Record<string, string> = {}
for (let i = 0; i < 32; i++) {
  const a = 'a'.repeat(i)
  const b = 'b'.repeat(i)
  obj = { ...obj, [a]: a, [b]: b }
}
const medium = {
  unsigned: [1, 2, 3, 4, { b: { c: [128, 256, 65536, 4294967296] } }],
  signed: [-1, -2, -3, -4, { b: { c: [-33, -129, -32769, -2147483649] } }],
  str: ['abc', 'g'.repeat(32), 'h'.repeat(256)],
  array: [[], array(16)],
  map: {},
  nil: null,
  bool: { true: true, false: false, both: [true, false, false, false, true] },
  undefined: [undefined, true, false, null, undefined],
  ...obj,
}

let objl: Record<string, string> = {}
for (let i = 0; i < 1024; i++) {
  const a = 'a'.repeat(i)
  const b = 'b'.repeat(i)
  objl = { ...objl, [a]: a, [b]: b }
}
const large = {
  unsigned: [1, 2, 3, 4, { b: { c: [128, 256, 65536, 4294967296] } }],
  signed: [-1, -2, -3, -4, { b: { c: [-33, -129, -32769, -2147483649] } }],
  bin: ['abc', 'a'.repeat(256), 'a'.repeat(65535)],
  str: ['abc', 'g'.repeat(32), 'h'.repeat(256), 'g'.repeat(65535)],
  array: [[], array(16), array(256)],
  map: {},
  nil: null,
  bool: { true: true, false: false, both: [true, false, false, false, true] },
  undefined: [undefined, true, false, null, undefined],
  ...objl,
}

export { tiny, small, medium, large }
