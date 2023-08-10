import '../styles/Calculator.css';

function Calculator() {
  return (
    <main className="calculator">
      <section className="input">
        <input className="enter" type="text" readOnly />
      </section>
      <section className="buttons grid-container">
        <button className="grid-item item1" value="AC" type="button">
          AC
        </button>
        <button className="grid-item item2" value="+/-" type="button">
          +/-
        </button>
        <button className="grid-item item3" value="%" type="button">
          %
        </button>
        <button className="grid-item item4" value="÷" type="button">
          ÷
        </button>

        <button className="grid-item item5" value="7" type="button">
          7
        </button>
        <button className="grid-item item6" value="8" type="button">
          8
        </button>
        <button className="grid-item item7" value="9" type="button">
          9
        </button>
        <button className="grid-item item8" value="x" type="button">
          x
        </button>

        <button className="grid-item item9" value="4" type="button">
          4
        </button>
        <button className="grid-item item10" value="5" type="button">
          5
        </button>
        <button className="grid-item item11" value="6" type="button">
          6
        </button>
        <button className="grid-item item12" value="-" type="button">
          -
        </button>

        <button className="grid-item item13" value="1" type="button">
          1
        </button>
        <button className="grid-item item14" value="2" type="button">
          2
        </button>
        <button className="grid-item item15" value="3" type="button">
          3
        </button>
        <button className="grid-item item16" value="+" type="button">
          +
        </button>

        <button className="grid-item item17" value="0" type="button">
          0
        </button>
        <button className="grid-item item18" value="." type="button">
          .
        </button>
        <button className="grid-item item19" value="=" type="button">
          =
        </button>
      </section>
    </main>
  );
}

export default Calculator;
