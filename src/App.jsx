import "./styles.css";
import { EmployeeCard } from "./EmployeeCard";
import { SumCard } from "./SumCard";
import { AirConditioner } from "./AirConditioner";

export default function App() {
  return (
    <div className="App">
      <SumCard numberOne={67} numberTwo={77} numberThree={54} numberFour={27} />
      <EmployeeCard />
      <AirConditioner price={4568239} />
    </div>
  );
}
