import React, { useState } from "react";
import './layout.css';
//import Output from "./output"

const Layout = (props) => {
    
    let [input, setInput] = useState('');
    let [result, setResult] = useState('0')

    const display = (symbol) => {
        setInput((prev) => prev + symbol);
        if (input[input.length - 1] === "=") {
            if (/[0-9.]/.test(symbol)) {
                setInput(symbol);
                setResult("0");
            } else {
                setInput(result + symbol);
            }
        }
    };
    
    const calculate = () => {
        setResult(Math.round(1000000000000 * eval(input)) / 1000000000000);
        setInput((prev) => prev + "=");
    };
      
    const allClear = () => {
        setInput("");
        setResult(0);
    };

    const clear = () => {
        setInput((prev) => prev.split("").slice(0, prev.length - 1).join(""));
        setResult(0);
    };


    return (
        <div className="frame">
            <div className="calculator">
                <br></br>
                <div id = "displayBox" >
                    <div id="formula" className="screen">{input}</div>
                    <div id="display" className="screen">{result}</div>
                </div>
                <i class="fa-brands fa-free-code-camp"></i>
                <div className="keys">
                    <input type='button' value={'C'} className='button clear' onClick={clear} id="clear" />
                    <input type='button' value={'DEL'} className='button clear' onClick={allClear} />
                    <input type='button' value={'%'} className='button operator' onClick={() => display("%")} />
                    <input type='button' value={'/'} className='button operator' onClick={() => display("/")} id="divide" />

                    <input type='button' value={'7'} className='button ' onClick={() => display("7")} id="seven" />
                    <input type='button' value={'8'} className='button ' onClick={() => display("8")} id="eight" />
                    <input type='button' value={'9'} className='button ' onClick={() => display("9")} id="nine" />
                    <input type='button' value={'*'} className='button operator' onClick={() => display("*")} id="multiply" />

                    <input type='button' value={'4'} className='button ' onClick={() => display("4")} id="four" />
                    <input type='button' value={'5'} className='button ' onClick={() => display("5")} id="five" />
                    <input type='button' value={'6'} className='button ' onClick={() => display("6")} id="six" />
                    <input type='button' value={'-'} className='button operator' onClick={() => display("-")} id="subtract"/>

                    <input type='button' value={'1'} className='button ' onClick={() => display("1")} id="one" />
                    <input type='button' value={'2'} className='button ' onClick={() => display("2")} id="two" />
                    <input type='button' value={'3'} className='button ' onClick={() => display("3")} id="three" />
                    <input type='button' value={'+'} className='button operator' onClick={() => display("+")} id="add"/>

                    <input type='button' value={'0'} className='button' onClick={() => display("0")} id="zero" />
                    <input type='button' value={'.'} className='button operator' onClick={() => display(".")} id="decimal" />
                    <input type='button' value={'='} className='button operator' onClick={calculate} id="equals" />

                </div>
            </div>
        </div>
    )
};

export default Layout;