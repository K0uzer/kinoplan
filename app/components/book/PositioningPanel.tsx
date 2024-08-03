import React, { MouseEventHandler } from 'react'
import { TableOutlined, LineOutlined } from '@ant-design/icons'

import Button from '@app/UI/Button'

import styles from './PositioningPanel.module.css'

const PositioningPanel = ({ changePositionOfContent }) => {
    return (
        <div className={styles.containerButtonOfPositioning}>
            <Button
                event={() => changePositionOfContent('table')}
                styles={styles.button}
            >
                <TableOutlined />
            </Button>
            <Button
                event={() => changePositionOfContent('list')}
                styles={styles.button}
            >
                <LineOutlined />
            </Button>
        </div>
    )
}

export default PositioningPanel
