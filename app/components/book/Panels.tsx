import React from 'react'

import FiltersPanel from './FiltersPanels'
import SortPanel from './SortPanel'
import PositioningPanel from './PositioningPanel'

import styles from './Panel.module.css'

const Panels = () => {
    return (
        <section className={styles.section}>
            <FiltersPanel />
            <SortPanel />
            <PositioningPanel />
        </section>
    )
}

export default Panels
