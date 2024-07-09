import {Trash, Check} from "phosphor-react";

import styles from './ListItem.module.css'
import {Task} from "../App.tsx";

export interface ToggleStatusType {
    id: string;
    value: boolean;
}

interface ListItemProps {
    task: Task;
    onDeleteTask: (id: string) => void
    toggleTaskStatus: ({id, value}: ToggleStatusType) => void
}

function ListItem({task, onDeleteTask, toggleTaskStatus}: ListItemProps) {
    function handleTaskToggle() {
        toggleTaskStatus({id: task.id, value: !task.isDone})
    }

    function handleDelete() {
        onDeleteTask(task.id)
    }

    const checkboxCheckedClassName = task.isDone ? styles['checkbox-checked'] : styles['checkbox-unchecked']
    const paragraphCheckedClassName = task.isDone ? styles['paragraph-checked'] : ''

    return (
        <div className={styles.item}>
            <div>
                <label htmlFor="checkbox" onClick={handleTaskToggle}>
                    <input readOnly type="checkbox" checked={task.isDone}/>
                    <span className={`${styles.checkbox} ${checkboxCheckedClassName}`}>
                        {task.isDone && <Check size={12}/>}
                    </span>

                    <p className={`${styles.paragraph} ${paragraphCheckedClassName}`}>
                        {task.content}
                    </p>
                </label>
            </div>

            <button type="button" onClick={handleDelete}><Trash size={16}/></button>
        </div>
    )
}

export default ListItem