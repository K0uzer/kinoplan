'use client'
import React, { useState } from 'react'
import { MenuFoldOutlined } from '@ant-design/icons'
import { Dropdown, Space, DropdownProps, MenuProps } from 'antd'

import FiltersPanel from './FiltersPanels'
import SortPanel from './SortPanel'

import styles from './DropDown.module.css'

const App: React.FC = () => {
  const [open, setOpen] = useState(false)

  const handleOpenChange: DropdownProps['onOpenChange'] = (nextOpen, info) => {
    if (info.source === 'trigger' || nextOpen) {
      setOpen(nextOpen)
    }
  }

  const items: MenuProps['items'] = [
    {
      label: (
        <>
          <span>Фильтрация</span>
          <FiltersPanel />
        </>
      ),
      key: '1',
    },
    {
      label: (
        <>
          <span>Сортировка</span>
          <SortPanel />
        </>
      ),
      key: '2',
    },
  ]

  return (
    <Dropdown
      menu={{
        items,
      }}
      onOpenChange={handleOpenChange}
      open={open}
    >
      <a onClick={(event) => event.preventDefault()}>
        <Space>
          <MenuFoldOutlined className={styles.icon} />
        </Space>
      </a>
    </Dropdown>
  )
}

export default App
