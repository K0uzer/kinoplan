import React, { MouseEventHandler } from 'react'
import { TableOutlined, LineOutlined } from '@ant-design/icons'

import Button from '@app/UI/Button'

import styles from './PositioningPanel.module.css'

const PositioningPanel = () => {
    const changeStylesListBooks = (event) => {}

    return (
        <div className={styles.containerButtonOfPositioning}>
            <Button
                event={(event: MouseEventHandler<HTMLButtonElement>) =>
                    changeStylesListBooks(event)
                }
                styles={styles.button}
            >
                <TableOutlined />
            </Button>
            <Button
                event={(event: MouseEventHandler<HTMLButtonElement>) =>
                    changeStylesListBooks(event)
                }
                styles={styles.button}
            >
                <LineOutlined />
            </Button>
        </div>
    )
}

export default PositioningPanel
