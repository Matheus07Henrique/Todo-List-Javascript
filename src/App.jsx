import { useState } from 'react'
import {v4 as uuidv4} from 'uuid'
import DetailsTarefa from './components/DetailsTarefa'
import AddTarefa from './components/AddTarefa';
import Lista from './components/Lista';
import { BrowserRouter as Router, Route } from "react-router-dom";
import './styles/App.css';

const App = () => {
  const [lista, setLista] = useState([
    {
      id: '1',
      title: 'Task 1',
      completed: false,
    },
    {
      id: '2',
      title: 'Task 2',
      completed: false,
    },
    {
      id: '3',
      title: 'Task 3',
      completed: false,
    },
  ]);

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

  // deletar uma tarefa
  const handleTaskDeletion = (tarefaId) => {
    const newLista = lista.filter(tarefa => tarefa.id !== tarefaId);
    setLista(newLista);
  }

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
          path={'/:taskTitle'} component={DetailsTarefa}
        />
        
      </div>
    </Router>
  )
}

export default App;