import React from 'react'
import { TableOutlined, LineOutlined } from '@ant-design/icons'

import Button from '@app/UI/Button'
import { useBook } from '@app/hooks/useBook'

import styles from './PositioningPanel.module.css'

const PositioningPanel = () => {
  const { positionContent, setPositionContent } = useBook()
  return (
    <div className={styles.containerButtonOfPositioning}>
      {positionContent === 'lines' ? (
        <Button
          onClick={() => setPositionContent('table')}
          styles={styles.button}
        >
          <TableOutlined />
        </Button>
      ) : (
        <Button
          onClick={() => setPositionContent('lines')}
          styles={styles.button}
        >
          <LineOutlined />
        </Button>
      )}
    </div>
  )
}

export default PositioningPanel
