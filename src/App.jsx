import React, { useState } from 'react'
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers';
import Result from './components/Result';
import './App.scss';

const App = () => {
    
    let [stack, setStack] = useState("")
    const clickNumberFunction = text => {
        stack += text;
        setStack(stack)
    }
    const clickEqualFunction = text => {
        stack = eval(text);
        setStack(stack)
    }
    const clickOperationFunction = text => {
        stack += text;
        setStack(stack)
    }
    const contentClearFunction = text => {
        stack = '';
        setStack(stack)
        console.log(text);
    }
    const deleteFunction = text => {
        console.log(text);
    }
    return (<main className='react-calculator'>
        <Result value={stack} />
        <Numbers onClickNumber={clickNumberFunction}/>
        <Functions onContentClear={contentClearFunction} onDelete={deleteFunction} />
        <MathOperations
            onClickEqual={clickEqualFunction}
            onClickOperation={clickOperationFunction} />
    </main>)
}

export default App