import '../styles/NewTask.scss'
import { projects } from '../components/Items'
import React, { useState, useEffect, useContext, useRef } from 'react';
import { UserContext } from '../contexts/UserContext';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import TaskCards from '../components/TaskCards';

export default function NewTask({tasklist,setTaskList}) {

    useEffect(() => {
      console.log(tasklist)
      
    }, [tasklist])
    

    const navigate = useNavigate();
    const { user, setUser } = useContext(UserContext);
    useEffect(() => {
        if (user === null) {
            navigate("/")
        }

    }, [user])

    const initialTask = {
        category: "A",
        project: "NEDAP",
        articlenumber: "",
        user1: user,
        date: new Date().toISOString().slice(0, 10),
        problem: "",
        details: "",
        priority: "",
        user2: "",
        term: "",
        comment: "",
        status: "Folyamatban",        

    };

    //button és az adatok bevitelének kezelése
    const [task, setTask] = useState(initialTask);

    const handleTask = (t) => {
        console.log(t)
        setTask({
            ...task,
            [t.target.name]: t.target.value
        });

        console.log(task)
    }

    const AddTask = (a) => {
        a.preventDefault();
        if (!task.category || !task.project || !task.user1 || !task.date || !task.problem || !task.details || !task.user2 || !task.term) {
            toast.error('Ellenőrizd, hogy minden kötelező mezőt kitöltöttél-e!', {
                position: "bottom-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
                });
            console.log(task)
        } else {
            setTaskList([...tasklist, task]);
            toast.success('Sikeres mentés!', {
                position: "top-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
            // setTask(initialTask);

        }
    };

    console.log("tasklist", tasklist);

    return (
        <div className="newtask">
            <h2>Új feladat</h2>
            <form action="" method="post">
                <div>
                    <label>Kategória</label>
                    <select value={task.category} name='category' onChange={handleTask}>
                        <option value="A">A</option>
                        <option value="B">B</option>
                        <option value="c">C</option>
                    </select>
                </div>

                <div>
                    <label>Projekt</label>
                    <select value={task.project} name='project' onChange={handleTask}>
                        {projects.map((projects) => 
                            <option value={projects.value}>{projects.name}</option>
                        
                        )}
                    </select>
                </div>

                <div>
                    <label>Cikkszám</label>
                    <input type="" value={task.articlenumber} name='articlenumber' onChange={handleTask} placeholder="(nem kötelező)"/>
                </div>

                <div>
                    <label>Feladatot felvevő személy</label>
                    <input type="text" value={task.user1} name='user1' onChange={handleTask} />
                </div>

                <div>
                    <label>Dátum</label>
                    <input type="date" value={task.date} name='date' onChange={handleTask} />
                </div>

                <div>
                    <label>Felelős személy</label>
                    <input type="text" value={task.user2} name='user2' onChange={handleTask} placeholder=""/>
                </div>


                <div>
                    <label>Probléma leírása</label>
                    <textarea value={task.problem} name='problem' onChange={handleTask} maxLength={300} placeholder="Pár mondatban írja le a problémát!" />
                </div>

                <div>
                    <label>Teendő leírása</label>
                    <textarea type="text" value={task.details} name='details' onChange={handleTask} placeholder="Írja le mi a teendőt a problémára!"/>
                </div>

                <div>
                    <label>Megjegyzés</label>
                    <textarea type="text" value={task.comment} name='comment' onChange={handleTask} placeholder="(nem kötelező)"/>
                </div>

                
                <div>
                    <label>Határidő</label>
                    <input type="number" min="1" step="1"  value={task.term} name='term' onChange={handleTask} placeholder="nap"/>
                </div>

                <div>
                    <label>Státusz</label>
                    <select value={task.status} name='status' onChange={handleTask}>
                        <option value="Folyamatban">Folyamatban</option>
                        <option value="Befejezett">Befejezett</option>
                        <option value="Felfüggesztett">Fefüggesztett</option>
                    </select>
                </div>


                <button onClick={AddTask}>Feladat Mentése</button>

            </form>
            <br />
            <div >
               {!tasklist && tasklist.length !== 0 ? (
                    <div>
                        {tasklist.map((task) => (
                            <TaskCards className="listitem" task={task}></TaskCards>
                        ))}
                    </div>

                ) : null}

                <ToastContainer className="toast"/>            
            </div>


        </div>
    )

}