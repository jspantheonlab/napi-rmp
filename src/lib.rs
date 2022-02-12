#![deny(clippy::all)]

use napi::bindgen_prelude::Buffer;
use napi_derive::napi;
use rmpv::encode::write_value;
use rmpv::{decode::read_value, Value as ValueR};
use serde_json::Value;
use serde_json::{from_slice, to_vec};

#[cfg(all(
  any(windows, unix),
  target_arch = "x86_64",
  not(target_env = "musl"),
  not(debug_assertions)
))]
#[global_allocator]
static ALLOC: mimalloc::MiMalloc = mimalloc::MiMalloc;

#[napi]
pub fn encode(input: Value) -> Buffer {
  let mut wr = vec![];
  let val = ValueR::Binary(to_vec(&input).unwrap());
  write_value(&mut wr, &val).unwrap();
  let output = Buffer::from(wr);
  output
}

#[napi]
pub fn decode(input: Buffer) -> Value {
  let buf = read_value(&mut &input[..]).unwrap();
  let output = from_slice(&buf.as_slice().unwrap()).unwrap();
  output
}
