import { useState, useEffect } from 'react'
import {v4 as uuidv4} from 'uuid'
import axios from "axios";
import DetailsTarefa from './components/DetailsTarefa'
import AddTarefa from './components/AddTarefa';
import Lista from './components/Lista';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/App.css';

const App = () => {
  const [lista, setLista] = useState([]);

  // consumir uma api
  useEffect(() => { 
    const fetchLista = async () => {
      const {data} = await axios.get("https://jsonplaceholder.cypress.io/todos?_limit=10");
      setLista(data);
    }  

    fetchLista();    
  }, []);

  // clicar em uma tarefa
  const handleTaskClick = (tarefaId) => {
    const newLista = lista.map(tarefa => {
      if (tarefa.id === tarefaId){ 
        return {...tarefa, completed: !tarefa.completed}
      }
      return tarefa;
    });

    setLista(newLista);
  }

  // adicionar uma tarefa
  const handleTaskAddition = (inputData) => {
    const newLista = [...lista, {
      title: inputData,
      id: uuidv4(),
      completed: false,
    }];

    setLista(newLista);
  }

  // remover uma tarefa
  const handleTaskDeletion = (tarefaId) => {
    const newLista = lista.filter(tarefa => tarefa.id !== tarefaId);
    setLista(newLista);
  }

  // o react-router-dom está na versão @5.2.0
  return (
    <Router>
      <div className="App container">
        <Route 
          path={'/'} exact render={() => (
            <>
              <AddTarefa handleTaskAddition={handleTaskAddition} />
              <Lista lista={lista} handleTaskClick={handleTaskClick} handleTaskDeletion={handleTaskDeletion}/>
            </>
          )}
        />
        <Route
          path={'/:taskTitle'} exact component={DetailsTarefa}
        />
        
      </div>
    </Router>
  )
}

export default App;