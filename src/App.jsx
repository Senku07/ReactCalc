import { useState } from "react";
function App() {
  const [Value, setValue] = useState([]);
  const [Second, setSecond] = useState([]);
  const [Operator, setOperator] = useState([]);
  const [Preview, setPreview] = useState([]);

  const [Multiply, setMultiply] = useState(-52567832456837256);
  const [Add, setAdd] = useState(-6826538756328756324856);
  const [Divid, setDivid] = useState(-287356893756238756);
  const [Minus, setMinus] = useState(-5720846587256283756237856);

  // console.log(Add);
  if (Value.length == 0) {
    setValue(() => [0]);
  }

  if (Operator.length == 2) {
    Operator.pop();
  }

  if (Preview == "") {
    setPreview(() => [0]);
  }

  return (
    <div className="calculator-grid">
      <div className="output">
        <div className="previous-operand">{Preview}</div>
        <div className="current-operand">
          {Add >= -6298569435693284 ?  '='+Add : `${Value.join('')} ${Operator} ${Second.join('')}` } 
          {Minus >= -265387562837563 ? '='+' '+ Minus : '' }
          {Divid >= -297465728346954 ? '='+' '+ Divid : '' }
          {Multiply >= -2876537286523748 ? '='+" "+ Multiply : '' }  
        </div>
      </div>
      <button
        className="span-two"
        onClick={() => {
          setValue(() => [0]);
          setSecond(() => []);
          setOperator(() => []);
          setAdd();
          setMinus();
          setMultiply();
          setDivid();
          setPreview(0);
        }}
      >
        AC
      </button>
      <button
        onClick={() => {
          if (Value.length >= 2 && Operator.length == 1 && Second.length == 0) {
            Operator.pop();
            setOperator([...Operator]);
            console.log(Operator);
            // console.log(Value);
          } else if (Value.length >= 2 && Operator.length == 0) {
            Value.pop();
            setValue([...Value]);
            // console.log(Value);
          } else {
            Second.pop();
            setSecond([...Second]);
            // console.log(Second);
          }
        }}
      >
        DEL
      </button>
      <button
        onClick={() => {
          setOperator([...Operator, "÷"]);
        }}
      >
        ÷
      </button>
      <button
        onClick={() => {
          if (Operator.length != 0) {
            setSecond([...Second, 1]);
          } else {
            setValue(() => [...Value, 1]);
          }
        }}
      >
        1
      </button>
      <button
        onClick={() => {
          if (Operator.length != 0) {
            setSecond([...Second, 2]);
          } else {
            setValue(() => [...Value, 2]);
          }
        }}
      >
        2
      </button>
      <button
        onClick={() => {
          if (Operator.length != 0) {
            setSecond([...Second, 3]);
          } else {
            setValue(() => [...Value, 3]);
          }
        }}
      >
        3
      </button>
      <button
        onClick={() => {
          setOperator([...Operator, "+"]);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          if (Operator.length != 0) {
            setSecond([...Second, 4]);
          } else {
            setValue(() => [...Value, 4]);
          }
        }}
      >
        4
      </button>
      <button
        onClick={() => {
          if (Operator.length != 0) {
            setSecond([...Second, 5]);
          } else {
            setValue(() => [...Value, 5]);
          }
        }}
      >
        5
      </button>
      <button
        onClick={() => {
          if (Operator.length != 0) {
            setSecond([...Second, 6]);
          } else {
            setValue(() => [...Value, 6]);
          }
        }}
      >
        6
      </button>
      <button
        onClick={() => {
          setOperator([...Operator, "×"]);
        }}
      >
        ×
      </button>
      <button
        onClick={() => {
          if (Operator.length != 0) {
            setSecond([...Second, 7]);
          } else {
            setValue(() => [...Value, 7]);
          }
        }}
      >
        7
      </button>
      <button
        onClick={() => {
          if (Operator.length != 0) {
            setSecond([...Second, 8]);
          } else {
            setValue(() => [...Value, 8]);
          }
        }}
      >
        8
      </button>
      <button
        onClick={() => {
          if (Operator.length != 0) {
            setSecond([...Second, 9]);
          } else {
            setValue(() => [...Value, 9]);
          }
        }}
      >
        9
      </button>
      <button
        onClick={() => {
          setOperator([...Operator, "-"]);
        }}
      >
        -
      </button>
      <button
        onClick={() => {
          if (Operator.length == 0) {
            setValue([...Value, "."]);
            console.log(Value);
          } else {
            setSecond([...Second, "."]);
            console.log(Second);
          }
        }}
      >
        .
      </button>
      <button
        onClick={() => {
          if (Operator.length != 0) {
            setSecond([...Second, 0]);
          } else {
            setValue(() => [...Value, 0]);
          }
        }}
      >
        0
      </button>
      <button
        className="span-two"
        onClick={() => {
          let valueString = Value.join("");
          let secondString = Second.join("");
          let operatorString = Operator.join("");
          if (operatorString == "+") {
            setAdd(parseFloat(valueString) + parseFloat(secondString));
          } else if (operatorString == "-") {
            setMinus(parseFloat(valueString) - parseFloat(secondString));
          } else if (operatorString == "×") {
            setMultiply(parseFloat(valueString) * parseFloat(secondString));
          } else if (operatorString == "÷") {
            setDivid(parseFloat(valueString) / parseFloat(secondString));
          }
          setPreview(`${Value.join('')} ${Operator} ${Second.join('')}`);
        }}
      >
        =
      </button>
    </div>
  );
}

export default App;
