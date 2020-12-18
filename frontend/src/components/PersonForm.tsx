import React, {ReactElement} from 'react'

type HandleSubmit = {
  (event: React.FormEvent<HTMLFormElement>): void
}

type PersonFormProps = {
  name: {
    type: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }
  handleSubmit: HandleSubmit
}

const PersonForm = ({name, handleSubmit}: PersonFormProps): ReactElement => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input placeholder={'Enter name here!'} {...name} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default PersonForm
