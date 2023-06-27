import React, { useEffect, useState } from 'react'

const EditEmp = props=> {
    const [emp,setEmp] = useState('props.currentEmp');
    const handleInputChange = event=>{
        const{name,value}=event.target;
        setEmp({...emp,[name]:value});
    };
    useEffect(()=>{
        setEmp(props.currentEmp);
    },[props]);

  return (
    <form onSubmit={event=>{
        event.preventDefault();
        props.updateEmp(emp.id, emp);
    }}>
        <label><strong>Name</strong></label><br/>
        <input type='text' name='name'value={emp.name} onChange={handleInputChange} style={{padding:5 ,width:300}}/>
        <br/>
        <label><strong>Role</strong></label><br/>
        <input type='text' name='role' value={emp.role} onChange={handleInputChange} style={{padding:5 ,width:300}}/><br/><br/>
        <button style={{padding:5}}>Update</button>
        <button onClick={()=>props.setEditing(false)} className='button muted-button' style={{padding:5}}>Cancel</button>
    </form>
  );
};

export default EditEmp
