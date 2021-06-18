import React, {useState, useEffect, useMemo, useCallback} from 'react'
import './style.css'

//estudando useState e useEffect

function App() {

    const [tarefas, setTarefas] = useState([])

    const [input, setInput] = useState('')


    //useEffect

    useEffect(()=>{
        const tarefasStorage = localStorage.getItem('tarefas')

        if (tarefasStorage) {
            setTarefas(JSON.parse(tarefasStorage))
        }
    }, [])


    useEffect(()=>{
        localStorage.setItem('tarefas', JSON.stringify(tarefas))
    }, [tarefas])

    
    //adiciona as tarefas no input
    // utilizando o useCallback
    const add = useCallback(() => {
        setTarefas([...tarefas, input])
        setInput('')
    }, [input, tarefas])

    //useMemo
    const totalTarefas = useMemo(() => tarefas.length, [tarefas])

    return(
        <div className="usestate">
            <h1>Hooks</h1>
            <h2>useState</h2>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
            <br/>
            <strong>Você tem {totalTarefas} tarefas</strong>
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button type="button" onClick={add}>Adicionar</button>
        </div>
    )
}

export default App

