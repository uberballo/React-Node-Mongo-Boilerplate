import React, {ReactElement} from 'react'

type HandleSubmit = {
  (event: React.FormEvent<HTMLFormElement>): void
}

type PersonFormProps = {
  nameField: {
    type: string
    value: string
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  }
  handleSubmit: HandleSubmit
}

const PersonForm = ({nameField, handleSubmit}: PersonFormProps): ReactElement => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input placeholder={'Enter name here!'} {...nameField} />
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}

export default PersonForm
