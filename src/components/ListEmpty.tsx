import styles from './ListEmpty.module.css'

import clipboardImg from '../assets/clipboard.png'

function ListEmpty() {
    return (
        <div className={styles.listEmpty}>
            <img src={clipboardImg} alt=""/>
            <p>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                Crie tarefas e organize seus itens a fazer
            </p>
        </div>
    )
}

export default ListEmpty