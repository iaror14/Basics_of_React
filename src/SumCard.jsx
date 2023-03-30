const headerStyle = { color: "green" };
const fontSizeChange = { fontSize: "15px" };
const multiplyColor = { color: "Orange" };
const sumColor = { color: "Brown" };
// const sum = "9";
// const numberOne = 5;
// const numberTwo = 4;

export function SumCard({ numberOne, numberTwo, numberThree, numberFour }) {
  //Passing props above in the brackets
  //console.log({props});
  return (
    <div>
      <h1 className="app-header" style={headerStyle}>
        {" "}
        Sum of Two Numbers{" "}
      </h1>
      <div className="app-body">
        <p style={(fontSizeChange, sumColor)}> First Number : {numberOne} </p>
        <p style={(fontSizeChange, sumColor)}> Second Number: {numberTwo} </p>
        <p style={(fontSizeChange, sumColor)}>
          {" "}
          Sum : {numberOne + numberTwo}{" "}
        </p>
        <p style={(fontSizeChange, multiplyColor)}>
          {" "}
          Third Number : {numberThree}{" "}
        </p>
        <p style={(fontSizeChange, multiplyColor)}>
          {" "}
          Fourth Number: {numberFour}{" "}
        </p>
        <p style={(fontSizeChange, multiplyColor)}>
          {" "}
          Multiplication : {numberThree * numberFour}{" "}
        </p>
      </div>
    </div>
  );
}
