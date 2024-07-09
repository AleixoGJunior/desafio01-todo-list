import styles from './ListHeader.module.css'

interface ListHeaderProps {
    tasksCounter: number;
    tasksDoneCounter: number;
}

function ListHeader({tasksCounter, tasksDoneCounter}: ListHeaderProps) {
    const calculatedTasks = tasksCounter === 0 ? tasksDoneCounter : `${tasksDoneCounter} de ${tasksCounter}`

    return (
        <header className={styles.header}>
            <aside>
                <p>Tarefas criadas</p>
                <span>{tasksCounter}</span>
            </aside>

            <aside>
                <p>Concluídas</p>
                <span>{calculatedTasks}</span>
            </aside>
        </header>
    )
}

export default ListHeader