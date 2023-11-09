{
    // problem no 8



function checkValue(value: number): string {
  const result = value > 10 ? "Greater than 10" : "Not greater than 10";
  return result;
}

const valuesToCheck = [5, 10, 15, 20];

valuesToCheck.forEach((value) => {
  console.log(`Value ${value}: ${checkValue(value)}`);
});
}