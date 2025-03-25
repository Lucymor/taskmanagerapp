import React, {useContext, useEffect, useState} from "react";
import { useNavigate } from 'react-router-dom';
import '../styles/OngoingTask.scss'
import TaskCards from "../components/TaskCards";
import { UserContext } from '../contexts/UserContext';

export default function OngoingTask({tasklist, setTaskList}) {


    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    useEffect(() => {
        if (user === null) {
            navigate("/")
        }

    }, [user])


    const [toggleView, setToggleView] = useState(true);

// törlés gomb 
    function deleteTask(index){
        /*const newList = tasklist;
        newList.splice(index,1);*/
        const newList = tasklist.filter((task, idx) => idx !== index); 
        setTaskList(newList);
        console.log(newList);

    }

 
    return(
        <div className="ongoingtask">
            <h2>Feladatok</h2>
            <div className="view">
                {toggleView ? (
                    <button onClick={() => setToggleView(!toggleView)}><box-icon name='list-ul'></box-icon></button>               
                ):(
                    <button onClick={() => setToggleView(!toggleView)}><box-icon name='grid-alt'></box-icon></button>               
                )}                
            </div>

            {toggleView ? (
                <div className="cards-grid">
                    {tasklist.map((task, index)=> <TaskCards task={task} deleteTask={deleteTask} index={index}></TaskCards>) }
                    
                </div>

            ):(
                <div className="cards-list">
                    {tasklist.map((task, index)=> <TaskCards task={task} deleteTask={deleteTask} index={index}></TaskCards>) }
                    
                </div>

            )}
            
        </div>
    )
}