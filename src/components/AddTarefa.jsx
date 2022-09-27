import { useState } from 'react';
import '../styles/AddTask.css'
import Button from './Button'

const AddTask = ({handleTaskAddition}) => {
    const [inputData, setInputData] = useState('')

    // mudar o conteudo do input
    const handleInputChange = (e) => {
        setInputData(e.target.value);
    }

    // clicar em adicionar tarefa
    const handleAddTaskClick = () => {
        handleTaskAddition(inputData);
        setInputData('');
    }

    return ( 
        <div className="add-task-container">
            <input 
                onChange={handleInputChange} 
                className="add-task-input" 
                placeholder='Nome da nova tarefa'
                type="text" 
                value={inputData}
            />
            <div className='add-task-button-container'>
                <Button onclick={handleAddTaskClick}>Adicionar</Button>
            </div>
        </div>
     );
}
 
export default AddTask;