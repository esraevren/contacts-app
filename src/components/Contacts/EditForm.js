import React, { useState } from 'react'

function EditForm({contact}) {
  const [name,setName]=useState(contact.name);
  const [number, setNumber]= useState(contact.phone_number)

  const handleSubmit=()=>{};



  return (
    <div>
    <form onSubmit={handleSubmit}>
      <input
        placeholder="name"
        value={name}
        // onChange={(e) => setName(e.target.value)}
      />
      <input
        placeholder="phone number"
        value={number}
        // onChange={(e) => setNumber(e.target.value)}
      />
      <div className="btn">
        <button type="submit">Add</button>
      </div>
    </form>
  </div>
  )
}

export default EditForm