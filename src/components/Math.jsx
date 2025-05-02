const a = 2;
const b = 3;
const c = a + b;

function Add() {
  return c;
}

function Multiply(n1, n2) {
  return n1 * n2;
}
function Divide(n1, n2) {
  return n1 / n2;
}

export default Add;
export { Multiply, Divide };
