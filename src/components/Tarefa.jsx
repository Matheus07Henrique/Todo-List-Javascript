import '../styles/Tarefa.css'
import { CgClose, CgInfo } from "react-icons/cg";
import { useHistory } from 'react-router-dom';

const Tarefa = ({task, handleTaskClick, handleTaskDeletion}) => {
    const history = useHistory()

    const handleTaskDetaislClick = () => {
        history.push(`/${task.title}`)
    }

    return (       
        <div className='tarefa-container' style={task.completed ? {borderLeft: "6px solid green"} : {}} >         
            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className='buttons-container'>
                <button className='see-details' onClick={handleTaskDetaislClick}>
                    <CgInfo/>
                </button>
                <button className='remove-task' onClick={() => handleTaskDeletion(task.id)}>
                    <CgClose/>
                </button>
            </div>
        </div> 
    );
}
 
export default Tarefa;