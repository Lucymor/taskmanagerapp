import React from 'react'
import 'boxicons' 

export default function TaskCards({task, deleteTask, index}) {
    console.log(task)
    return (
        <div className='task'>
            <div className='inner'>
                <div><p>Kategória:</p> {task.category}</div>
                <div><p>Project:</p> {task.project}</div>
                <div><p>Cikkszám:</p> {task.articlenumber}</div>
                <div><p>Létrehozta:</p> {task.user1}</div>
                <div><p>Létrehozás dátuma:</p>  {task.date}</div>
                <div><p>Probléma leírása:</p>  {task.problem}</div>
                <div><p>Teendő leírása:</p> {task.details}</div>
                <div><p>Felelős személy:</p> {task.user2}</div>
                <div><p>Határidő:</p>  {task.term} nap</div>
                <div><p>Státusz:</p>  {task.status}</div>
                <div><p>Megjegyzés:</p> {task.comment}</div>
            </div>
            <button onClick={() => deleteTask(index)}><box-icon type='solid' name='trash' animation='tada-hover'></box-icon></button>
        </div>
    )
}

