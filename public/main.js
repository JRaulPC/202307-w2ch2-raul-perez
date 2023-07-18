const strictEquals = (valueA, valueB) => {
  if (Number.isNaN(valueA)) {
    return false;
  }
  debugger;
  const firstValuesCheck = Object.is(valueA, valueB);
  if (!!firstValuesCheck) {
    return firstValuesCheck;
  }

  let firstValueTransformed = valueA
    .toString()
    .replace(/[.,:;()_?¿!¡-\s]/g, "");
  let secondValueTransformed = valueB
    .toString()
    .replace(/[.,:;()_?¿!¡-\s]/g, "");

  if (secondValueTransformed.includes("1")) {
    return false;
  }

  const equalityCheck = Object.is(
    firstValueTransformed,
    secondValueTransformed
  );

  return equalityCheck;
};

console.log(strictEquals(1, 1));
console.log(strictEquals(NaN, NaN));
console.log(strictEquals(0, -0));
console.log(strictEquals(-0, 0));
console.log(strictEquals(1, "1"));
console.log(strictEquals(true, false));
console.log(strictEquals(false, false));
console.log(strictEquals("water", "oil"));
