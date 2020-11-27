import React from 'react'
import Button from './components/Button/Button';
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Result from './components/Result';
import './App.scss';
const App = () => {
    let result = '0';
    const clickHandlerFunction = text => {
        console.log(text);
    }
    const clickEqualFunction = text => {
        console.log(text);
    }
    const clickOperationFunction = text => {
        console.log(text);
    }
    const contentClearFunction = text => {
        console.log(text);
    }
    const deleteFunction = text => {
        console.log(text);
    }
    return (<main className='react-calculator'>
        <Result value={result} />
        <div className="numbers">
            < Button text="1" clickHandler={clickHandlerFunction} />
            < Button text="2" clickHandler={clickHandlerFunction} />
            < Button text="3" clickHandler={clickHandlerFunction} />
            < Button text="4" clickHandler={clickHandlerFunction} />
            < Button text="5" clickHandler={clickHandlerFunction} />
            < Button text="6" clickHandler={clickHandlerFunction} />
            < Button text="7" clickHandler={clickHandlerFunction} />
            < Button text="8" clickHandler={clickHandlerFunction} />
            < Button text="9" clickHandler={clickHandlerFunction} />
            < Button text="0" clickHandler={clickHandlerFunction} />
        </div>
        <Functions onContentClear={contentClearFunction} onDelete={deleteFunction} />
        <MathOperations
            onClickEqual={clickEqualFunction}
            onClickOperation={clickOperationFunction} />
    </main>)
}

export default App