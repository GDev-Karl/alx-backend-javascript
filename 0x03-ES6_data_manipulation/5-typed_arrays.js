export default function createInt8TypedArray(length, position, value) {
  if (position < 0 || position >= length) {
    throw new Error('Position outside range');
  }

  const view = new Int8Array(length).fill(0);
  view[position] = value;

  return view.buffer;
}

