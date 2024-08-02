import React from 'react'
import { TableOutlined, LineOutlined } from '@ant-design/icons'

import Button from '@app/UI/Button'
import FiltersPanel from './FiltersPanels'

import styles from './Panel.module.css'
import SortPanel from './SortPanel'

const Panels = () => {
    return (
        <section className={styles.section}>
            <FiltersPanel />
            <SortPanel />
            <div className={styles.containerButtonPositioning}>
                <Button event={() => console.log(1)} styles={styles.button}>
                    <TableOutlined />
                </Button>
                <Button event={() => console.log(2)} styles={styles.button}>
                    <LineOutlined />
                </Button>
            </div>
        </section>
    )
}

export default Panels
