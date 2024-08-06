import React from 'react'
import { TableOutlined, LineOutlined } from '@ant-design/icons'

import Button from '@app/UI/Button'

import styles from './PositioningPanel.module.css'

interface PositioningPanelProps {
    changePositionOfContent: (position: 'table' | 'lines') => void
}

const PositioningPanel: React.FC<PositioningPanelProps> = ({
    positionContent,
    changePositionOfContent,
}) => {
    return (
        <div className={styles.containerButtonOfPositioning}>
            {positionContent === 'lines' ? (
                <Button
                    onClick={() => changePositionOfContent('table')}
                    styles={styles.button}
                >
                    <TableOutlined />
                </Button>
            ) : (
                <Button
                    onClick={() => changePositionOfContent('lines')}
                    styles={styles.button}
                >
                    <LineOutlined />
                </Button>
            )}
        </div>
    )
}

export default PositioningPanel
