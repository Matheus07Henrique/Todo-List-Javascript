import { useHistory, useParams } from "react-router-dom";
import Button from "./Button";
import '../styles/DetailsTarefa.css'

const DerailsTarefa = () => {
    const params = useParams();
    const history = useHistory();

    const handleBackButtonClick = () => {
        history.goBack()
    }
    return ( 
        <>  
            
            <div className="back-button-container">
                <h2>{params.taskTitle}</h2>
                <Button onclick={handleBackButtonClick}>Voltar</Button>
            </div>
            <div className="task-details-container">
                
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Non molestias repudiandae voluptates assumenda porro? Voluptate.</p>
            </div>
        </>
     );
}
 
export default DerailsTarefa;