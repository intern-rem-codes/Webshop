import React from "react";
interface ICalculatorProps {
  onCalculate: (value: number) => void;
}

export default function Calculator(props: ICalculatorProps) {
  const [result, setResult] = React.useState(0);
  const [input, setInput] = React.useState("");

  function addNumber(num: string) {
    setInput((prev) => prev + num);
  }

  function addOperator(operator: string) {
    setInput((prev) => prev + " " + operator + " ");
  }

  function handleCalculate() {
    try {
      const calculatedResult = eval(input);
      setResult(calculatedResult);
      props.onCalculate(calculatedResult);
    } catch {
      alert("Invalid calculation");
    }
    setInput("");
    setResult(0);
  }

  return (
    <div className="calculator">
      <input
        className="calculator-input"
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <div className="button-container">
        <input type="text" value={result} readOnly />
        <button className="clear-button" onClick={handleCalculate}>
          C
        </button>
      </div>
      <div className="buttons-grid">
        <button className="number-button" onClick={() => addNumber("7")}>
          7
        </button>
        <button className="number-button" onClick={() => addNumber("8")}>
          8
        </button>
        <button className="number-button" onClick={() => addNumber("9")}>
          9
        </button>
        <button className="operator-button" onClick={() => addOperator("+")}>
          +
        </button>

        <button className="number-button" onClick={() => addNumber("4")}>
          4
        </button>
        <button className="number-button" onClick={() => addNumber("5")}>
          5
        </button>
        <button className="number-button" onClick={() => addNumber("6")}>
          6
        </button>
        <button className="operator-button" onClick={() => addOperator("-")}>
          -
        </button>

        <button className="number-button" onClick={() => addNumber("1")}>
          1
        </button>
        <button className="number-button" onClick={() => addNumber("2")}>
          2
        </button>
        <button className="number-button" onClick={() => addNumber("3")}>
          3
        </button>
        <button className="operator-button" onClick={() => addOperator("/")}>
          /
        </button>

        <button
          className="number-button zero-button"
          onClick={() => addNumber("0")}
        >
          0
        </button>
        <button className="calculate-button" onClick={handleCalculate}>
          =
        </button>
        <button className="operator-button" onClick={() => addOperator("*")}>
          x
        </button>
      </div>

      <p>Result: {result}</p>
    </div>
  );
}
