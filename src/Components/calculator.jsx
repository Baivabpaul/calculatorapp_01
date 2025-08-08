import React, { useState } from "react";
import './style.css'

export default function Calculator() {

    const [inputval, setInputVal] = useState('')
    const [result, setResult] = useState(null)

    const handleclick = (value) => {
        //new value attached with previous value
        return setInputVal(previous => previous + value)
    }

    const handleresult =()=>{
        try{
            // creating a new anonymous immediately invoking function expresssion 
            // parsing the string expression by mathemetical parser of js and giving the result 
            const res = new Function(`return ${inputval}`)()
            setResult(res)
        }catch(err){
            // if the expression is invalid 
            setInputVal("wrong expression")
        }

    }

    const clearall = () => {
        setInputVal('')
        setResult('')
    }

    const backspace = () => {
        // exclude the last value and show the rest value expression 
        setInputVal(prev => prev.slice(0, prev.length - 1))
    }

    return (
        <>
            <h2>My calculator</h2>
            <div className="calcbox">
                <label htmlFor="number" style={{ fontSize: "20px" }}>Enter numbers</label><br />

                {/* readonly : value of input field just for reading purpose only */}
                <input type="text" id="valuebox" value={inputval} readOnly />

                <div>
                    <button id="resultbutton" style={{ marginRight: "10px" }} onClick={()=>handleresult()}>Result</button>
                    <input type="number" id="resultbox" value={result} readOnly/>
                </div>

                <div id="operator-box">
                    <button className="clearbox" onClick={() => clearall()}>AC</button>
                    <button className="clearbox" onClick={() => backspace()}>BS</button>
                    <button className="operator" id="add" onClick={() => handleclick('+')}>
                        +
                    </button>
                    <button className="operator" id="sub" onClick={() => handleclick('-')}>
                        -
                    </button>
                    <button id="mul" onClick={() => handleclick('*')}>
                        *
                    </button>
                    <button className="operator" id="divide" onClick={() => handleclick('/')}>
                        /
                    </button>
                </div>
                <div className="numbers">
                    <div className="numbox">

                        {/* setInputVal is the updater function also holding the previous value of the state */}
                        <button onClick={() => setInputVal(previous => previous + '1')}>
                            1
                        </button>
                        <button onClick={() => setInputVal(previous => previous + '2')}>
                            2
                        </button>
                        <button onClick={() => setInputVal(previous => previous + '3')}>
                            3
                        </button>
                    </div>

                    <div className="numbox">
                        <button onClick={() => setInputVal(previous => previous + '4')}>
                            4
                        </button>
                        <button onClick={() => setInputVal(previous => previous + '5')}>
                            5
                        </button>
                        <button onClick={() => setInputVal(previous => previous + '6')}>
                            6
                        </button>
                    </div>
                    <div className="numbox">
                        <button onClick={() => setInputVal(previous => previous + '7')}>
                            7
                        </button>
                        <button onClick={() => setInputVal(previous => previous + '8')}>
                            8
                        </button>
                        <button onClick={() => setInputVal(previous => previous + '9')}>
                            9
                        </button>
                    </div>
                    <div className="numbox">
                        <button onClick={() => setInputVal(previous => previous + '00')}>
                            00
                        </button>
                        <button onClick={() => setInputVal(previous => previous + '0')}>
                            0
                        </button>
                        <button style={{fontWeight:"bolder"}}onClick={() => setInputVal(previous => previous + '.')}>
                            Decimal
                        </button>
                    </div>
                </div>
            </div>

        </>
    )

}