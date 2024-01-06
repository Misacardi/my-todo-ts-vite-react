import React from 'react'

import styles from './header.module.css'

interface HeaderProps {
    todoCount: number
}
export const Header: React.FC<HeaderProps> = ({todoCount}) => {
  return (
    <div className={styles.header}>
        <div className={styles.header_title}>
            Todo List <b>{todoCount} task(s)</b>
        </div>
    </div>
  )
}
