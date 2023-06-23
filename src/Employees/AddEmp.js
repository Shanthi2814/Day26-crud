import React, { useState } from 'react'
const AddEmp = props => {
  const initialFormState = { id: null, name: '', role: '' };
  const [emp, setEmp] = useState(initialFormState);

  const handleInputChange = event => {
    const { name, value } = event.target;
    console.log(event.target);
    setEmp({ ...emp, [name]: value });
  }
  return (
    <form onSubmit={event => {
      event.preventDefault();
      if (!emp.name || !emp.role) return;
      props.addEmp(emp);
      setEmp(initialFormState);
    }}>
      <label style={{ padding: 3,fontSize:20 }}><strong>Name:</strong></label><br />
      <input type='text' name='name' value={emp.name} onChange={handleInputChange} required style={{ padding: 7, width: 300 }} />
      <br /><br />
      <label style={{ padding: 3,fontSize:20 }}><strong>Role:</strong></label><br />
      <input type='text' name='role' value={emp.role} onChange={handleInputChange} required style={{ padding: 7, width: 300 }} /><br /><br />
      <button className='btn btn-primary' style={{ padding: 10, color: 'white', backgroundColor: 'black',borderRadius: '10px' }}>Add New Employee</button>
    </form>
  )
}

export default AddEmp