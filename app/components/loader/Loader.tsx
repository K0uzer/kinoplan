import React from 'react'

import RoadLoad from '@app/UI/RoadLoad'

import styles from './Loader.module.css'

const Loader = () => {
  return (
    <div className={styles.loader}>
      <RoadLoad />
    </div>
  )
}

export default Loader
