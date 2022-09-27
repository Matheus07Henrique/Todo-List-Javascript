import Tarefa from './Tarefa';

const Lista = ({lista, handleTaskClick, handleTaskDeletion}) => {
    return(
        <>
            {lista.map(task => 
                <Tarefa 
                    task={task} 
                    handleTaskClick={handleTaskClick} 
                    handleTaskDeletion={handleTaskDeletion}
                />
            )}          
        </>
    )
}

export default Lista;