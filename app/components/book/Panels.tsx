import React, { ReactNode } from 'react'

import styles from './Panel.module.css'

const Panels = ({ children }: { children: ReactNode }) => {
  return <section className={styles.section}>{children}</section>
}

export default Panels
