/* eslint no-eval: 0 */
import React, { useState } from 'react'
import Functions from './components/Functions';
import MathOperations from './components/MathOperations';
import Numbers from './components/Numbers';
import Result from './components/Result';
import './App.scss';
import words from 'lodash.words'
const App = () => {

    let [stack, setStack] = useState('')
    let [operation, setOperation]= useState('')
    const items = words(stack, /[^-^+^*^/]+/g);

    const clickNumberFunction = text => {
        setStack(`${stack}${text}`)
    }
    const clickEqualFunction = text => {
        setOperation(stack)
        setStack(eval(stack).toString())
    }
    const clickOperationFunction = text => {
        setOperation(stack)
        setStack(`${stack}${text}`)
    }
    const contentClearFunction = text => {
        stack = '';
        setOperation(stack)
        setStack(stack)
    }
    const deleteFunction = text => {
        stack = stack.substring(0, stack.length - 1);
        setStack(stack)
    }

    const value = items.length > 0 ? items[items.length - 1] : "0"
    
    return (<main className='react-calculator'>
        <Result value={value} operation={operation} />
        <Numbers onClickNumber={clickNumberFunction} />
        <Functions onContentClear={contentClearFunction} onDelete={deleteFunction} onClickHandler={clickNumberFunction}/>
        <MathOperations
            onClickEqual={clickEqualFunction}
            onClickOperation={clickOperationFunction} />
    </main>)
}

export default App