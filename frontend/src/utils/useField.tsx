import {useState} from 'react'

type UseFieldTypes = {
  type: string
  value: string
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const useField = (type: string): UseFieldTypes => {
  const [value, setValue] = useState('')

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value)
  }
  return {
    type,
    value,
    onChange,
  }
}

export default useField
