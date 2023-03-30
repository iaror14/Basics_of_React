const changeColor = { color: "red" };
const chnageColor1 = { color: "blue" };
const fontSizeChange = { fontSize: "18px" };
//<SumCard />{" "}
export function EmployeeCard() {
  return (
    <div>
      <div>
        <h1 className="app-header"> Isha Arora </h1>
        <div className="app-body">
          <p>
            {" "}
            <span style={changeColor}>Designation </span> - Product Owner{" "}
          </p>
          <p>
            {" "}
            <span style={chnageColor1}> Experience </span> -{" "}
            <span style={fontSizeChange}> 6 years</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
