import React from 'react'
import { Select, Space } from 'antd'

const SelectData: React.FC = () => (
    <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        options={[
            { value: 'Фильтр не выбран', label: 'Jack' },
            { value: 'lucy', label: 'Lucy' },
            { value: 'Yiminghe', label: 'yiminghe' },
            { value: 'disabled', label: 'Disabled', disabled: true },
        ]}
    />
)

export default SelectData
