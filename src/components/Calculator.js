import React, { useState } from 'react';
import calculate from '../logic/calculate';
import '../styles/Calculator.css';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleClick = (event) => {
    const buttonName = event.target.value;
    const newData = calculate(calculatorData, buttonName);
    setCalculatorData(newData);
  };

  const displayValue = calculatorData.next || calculatorData.total || '0';

  return (
    <>
      <h2 className="calcheader">Lets do some math!</h2>
      <main className="calculator">
        <section className="input">
          <input
            className="calcDisplay"
            value={displayValue}
            type="text"
            readOnly
          />
        </section>
        <section className="buttons grid-container">
          <button
            className="grid-item item1"
            onClick={handleClick}
            value="AC"
            type="button"
          >
            AC
          </button>
          <button
            className="grid-item item2"
            onClick={handleClick}
            value="+/-"
            type="button"
          >
            +/-
          </button>
          <button
            className="grid-item item3"
            onClick={handleClick}
            value="%"
            type="button"
          >
            %
          </button>
          <button
            className="grid-item item4"
            onClick={handleClick}
            value="÷"
            type="button"
          >
            ÷
          </button>
          <button
            className="grid-item item5"
            onClick={handleClick}
            value="7"
            type="button"
          >
            7
          </button>
          <button
            className="grid-item item6"
            onClick={handleClick}
            value="8"
            type="button"
          >
            8
          </button>
          <button
            className="grid-item item7"
            onClick={handleClick}
            value="9"
            type="button"
          >
            9
          </button>
          <button
            className="grid-item item8"
            onClick={handleClick}
            value="x"
            type="button"
          >
            x
          </button>
          <button
            className="grid-item item9"
            onClick={handleClick}
            value="4"
            type="button"
          >
            4
          </button>
          <button
            className="grid-item item10"
            onClick={handleClick}
            value="5"
            type="button"
          >
            5
          </button>
          <button
            className="grid-item item11"
            onClick={handleClick}
            value="6"
            type="button"
          >
            6
          </button>
          <button
            className="grid-item item12"
            onClick={handleClick}
            value="-"
            type="button"
          >
            -
          </button>
          <button
            className="grid-item item13"
            onClick={handleClick}
            value="1"
            type="button"
          >
            1
          </button>
          <button
            className="grid-item item14"
            onClick={handleClick}
            value="2"
            type="button"
          >
            2
          </button>
          <button
            className="grid-item item15"
            onClick={handleClick}
            value="3"
            type="button"
          >
            3
          </button>
          <button
            className="grid-item item16"
            onClick={handleClick}
            value="+"
            type="button"
          >
            +
          </button>
          <button
            className="grid-item item17"
            onClick={handleClick}
            value="0"
            type="button"
          >
            0
          </button>
          <button
            className="grid-item item18"
            onClick={handleClick}
            value="."
            type="button"
          >
            .
          </button>
          <button
            className="grid-item item19"
            onClick={handleClick}
            value="="
            type="button"
          >
            =
          </button>
        </section>
      </main>
    </>
  );
}

export default Calculator;
