import React from 'react'

import styles from './Panel.module.css'

const Panels = ({ children }) => {
    return <section className={styles.section}>{children}</section>
}

export default Panels
