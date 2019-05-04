import React, { MouseEvent } from 'react'
import { PAGE_SIZE_OPTIONS } from '../../constants'

type SizeSelectProps = {
  onChange(newValue: string): void
  value: string
}

const SizeSelect = ({ onChange, value }: SizeSelectProps) => {
  const handleChange = (event: React.FormEvent<HTMLSelectElement>) => {
    const newValue = event.currentTarget.value

    if (newValue !== value) {
      onChange(newValue)
    }
  }

  return (
    <select onChange={handleChange} onBlur={handleChange} value={value}>
      {PAGE_SIZE_OPTIONS.map(number => (
        <option value={number} key={number}>
          {number}
        </option>
      ))}
    </select>
  )
}

export { SizeSelect }
