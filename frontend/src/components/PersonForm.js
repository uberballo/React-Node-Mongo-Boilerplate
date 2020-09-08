import React from 'react'

const PersonForm = ({name, handleSubmit}) => {
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
