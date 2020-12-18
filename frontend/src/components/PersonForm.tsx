import React, {Dispatch} from 'react'

type HandleSubmit = {
  (event: React.FormEvent<HTMLFormElement>): void
}

type PersonFormProps = {
  name: {type: any; value: string; onChange: (event: any) => void}
  handleSubmit: HandleSubmit
}

const PersonForm = ({name, handleSubmit}: PersonFormProps) => {
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
