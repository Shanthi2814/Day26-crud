import React from 'react'

const Emp=props=> (
    <table className='table'>
         <thead className='heading'>
      <tr style={{color:'brown',fontSize:'1.5rem'}}>
        <th style={{padding:5}}>Name</th>
        <th style={{padding:5}}>Role</th>
        <th style={{padding:5}}>Actions</th>
      </tr>
     
    </thead>
    
    <tbody>
        {props.emps.length >0 ?(
            props.emps.map(emp=>(
                <tr key={emp.id}>
                    <td style={{padding:5}}>{emp.name}</td>
                    <td style={{padding:5}}>{emp.role}</td>
                    <td>
                        <button onClick={()=>{
                            props.editRow(emp);
                        }} className='button muted-button'>Edit</button>
                        <button onClick={()=>{
                            props.deleteEmp(emp.id)
                        }}className='button muted-button'>Delete</button>
                    </td>
                </tr>
            ))

        ):(
            <tr>
                <td colSpan={3}> No Emp</td>
            </tr>
        )
        }
    </tbody>
    </table>
);
  


export default Emp
