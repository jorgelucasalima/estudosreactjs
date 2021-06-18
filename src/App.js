import React, {useState, useEffect} from 'react'
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





    function add() {
        setTarefas([...tarefas, input])
        setInput('')
    }

    return(
        <div className="usestate">
            <h1>Hooks</h1>
            <h2>useState</h2>
            <ul>
                {tarefas.map(tarefa => (
                    <li key={tarefa}>{tarefa}</li>
                ))}
            </ul>
            
            <input type="text" value={input} onChange={e => setInput(e.target.value)} />
            <button type="button" onClick={add}>Adicionar</button>
        </div>
    )
}

export default App

