import React from 'react'

import SortPanel from './SortPanel'
import FiltersPanel from './FiltersPanels'
import PositioningPanel from './PositioningPanel'

import styles from './Panel.module.css'

const Panels = () => {
    return (
        <section className={styles.section}>
            <SortPanel />
            <div className={styles.containerSortPanel}>
                <FiltersPanel />
                <PositioningPanel />
            </div>
        </section>
    )
}

export default Panels
