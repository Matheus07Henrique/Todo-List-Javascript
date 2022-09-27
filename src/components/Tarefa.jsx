import '../styles/Tarefa.css'
import { CgClose, CgInfo } from "react-icons/cg";

const Tarefa = ({task, handleTaskClick, handleTaskDeletion}) => {
    return (       
        <div className='tarefa-container' style={task.completed ? {borderLeft: "6px solid green"} : {}} >         
            <div className='task-title' onClick={() => handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className='buttons-container'>
                <button className='see-details' onClick={''}>
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