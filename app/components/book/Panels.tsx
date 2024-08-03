import React from 'react'

import styles from './Panel.module.css'

interface PanelsProps {
    children: React.ReactNode
}

const Panels: React.FC<PanelsProps> = ({ children }) => {
    return <section className={styles.section}>{children}</section>
}

export default Panels
