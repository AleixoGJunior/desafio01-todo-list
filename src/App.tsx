import {ChangeEvent, useState} from "react";
import Header from "./components/Header.tsx";
import {PlusCircle} from "phosphor-react";
import {v4 as uuidv4} from 'uuid'

import styles from './App.module.css'
import ListHeader from "./components/ListHeader.tsx";
import ListEmpty from "./components/ListEmpty.tsx";
import ListItem, {ToggleStatusType} from "./components/ListItem.tsx";

export interface Task {
    id: string;
    content: string;
    isDone: boolean;
}

function App() {
    const [tasks, setTasks] = useState<Task[]>([])
    const [newTaskText, setNewTaskText] = useState('')

    const tasksDoneCounter = tasks.reduce((previous, current) => {
        if (current.isDone) {
            return previous + 1
        }

        return previous
    }, 0)

    function handleAddNewTask() {
        if (!newTaskText) {
            return
        }

        const newTask: Task = {
            id: uuidv4(),
            content: newTaskText,
            isDone: false
        }

        setTasks((state) => [...state, newTask])
        setNewTaskText('')
    }

    function handleNewTaskChange(event: ChangeEvent<HTMLInputElement>) {
        setNewTaskText(event.target.value)
    }

    function handleDeleteTask(id: string) {
        const filteredTasks = tasks.filter(task => task.id !== id)

        setTasks(filteredTasks)
    }

    function handleToggleTask({id, value}: ToggleStatusType) {
        const updatedTasks = tasks.map(task => {
            if (task.id === id) {
                return {...task, isDone: value}
            }

            return {...task}
        })

        setTasks(updatedTasks)
    }

    return (
        <div>
            <Header/>

            <div className={styles.wrapper}>
                <div className={styles.taskInputContainer}>
                    <input
                        type="text"
                        placeholder="Adicione uma nova tarefa"
                        onChange={handleNewTaskChange}
                        value={newTaskText}
                    />
                    <button type="button" onClick={handleAddNewTask}>
                        Criar
                        <PlusCircle size={16} color="#f2f2f2" weight="bold"/>
                    </button>
                </div>
                <div className={styles.taskListContainer}>
                    <ListHeader tasksCounter={tasks.length} tasksDoneCounter={tasksDoneCounter}/>

                    {tasks.length > 0 ? (
                        <div>
                            {tasks.map(task => (
                                <ListItem
                                    key={task.id}
                                    task={task}
                                    onDeleteTask={handleDeleteTask}
                                    toggleTaskStatus={handleToggleTask}/>
                            ))}
                        </div>
                    ) : (<ListEmpty/>)}
                </div>
            </div>
        </div>
    )
}

export default App
