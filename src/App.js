import React, {useState} from 'react'
import './style.css'


function App() {

    const [tarefas, setTarefas] = useState([
        'pagar a conta de luz',
        'roubar um banco',
        'Fazer nada'
    ])


    function add() {
        setTarefas([...tarefas, 'Aprender js'])
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
            
            <button type="button" onClick={add}>Adicionar</button>
        </div>
    )
}

export default App

