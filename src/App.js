import React, {useState} from 'react'
import './style.css'


function App() {

    const [tarefas, setTarefas] = useState([
        'pagar a conta de luz',
        'roubar um banco',
        'Fazer nada'
    ])

    const [input, setInput] = useState('')

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

