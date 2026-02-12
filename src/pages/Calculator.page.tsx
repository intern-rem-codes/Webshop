import Calculator from "../components/Calculator.component";

export default function CalculatorPage() {
  return (
    <div className="calculator">
      calculator
      <Calculator
        onCalculate={(value) => {
          console.log("Calculated value:", value);
        }}
      />
    </div>
  );
}
