import React from 'react'

import styles from './Loader.module.css'
import RoadLoad from '@app/UI/RoadLoad'

const Loader = () => {
    return (
        <div className={styles.loader}>
            <RoadLoad />
        </div>
    )
}

export default Loader
