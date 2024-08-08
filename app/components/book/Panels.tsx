import React from 'react'

import styles from './Panel.module.css'
import SortPanel from './SortPanel'
import FiltersPanel from './FiltersPanels'
import PositioningPanel from './PositioningPanel'
import { useBook } from '@app/hooks/useBook'

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
