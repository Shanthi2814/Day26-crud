import React, { useState } from 'react'
import Emp from '../Employees/Emp';
import AddEmp from '../Employees/AddEmp';
import EditEmp from '../Employees/EditEmp';


const About = () => {
    const EmpData = [{
        id: 1,
        name: 'abc',
        role: 'ceo',
    },
    {
        id: 2,
        name: 'abcd',
        role: 'coo',
    },
    ];
    const initialFormState = { id: null, name: '', role: '' };

    const [emps, setEmps] = useState(EmpData);
    const [editing, setEditing] = useState(false);
    const [currentEmp, setCurrentEmp] = useState(initialFormState);
    const addEmp = emp => {
        emp.id = emps.length + 1;
        setEmps([...emps, emp]);

    };
    const editRow = emp => {
        setEditing(true);
        setCurrentEmp({ id: emp.id, name: emp.name, role: emp.role });
    };
    const deleteEmp = id => {
        setEditing(false);
        setEmps(emps.filter(emp => emp.id !== id));

    };
    const updateEmp = (id, updateEmp) => {
        setEditing(false);
        setEmps(emps.map(emp => (emp.id === id ? updateEmp : emp)));
    };

    return (
        <div className='about' style={{top: '10%',paddingLeft:500,paddingTop:100,paddingRight:400}}>

       
        <div className='container' style={{ backgroundColor: 'Tan', padding: 100,paddingTop:10}}>
            <h2 style={{color:'blueviolet',fontSize:'3rem',textAlign:'center'}}>Employee's data</h2>
            <div className="flex-row">
                {editing ? (
                    <div>
                        <h3>Edit Employee</h3>
                        <EditEmp
                            editing={editing}
                            setEditing={setEditing}
                            currentEmp={currentEmp}
                            updateEmp={updateEmp}
                        />
                    </div>
                ) : (
                    <div className='addemp'>
                        <h3 style={{ color: 'green',fontSize:'2rem' }}>Add Employee</h3>
                        <AddEmp addEmp={addEmp} />
                    </div>

                )}

            </div>
            <br />

            <div className='viewdata'>
                <h3 style={{ fontSize:'2rem',color:'green'}}>View Data</h3>
                <div>
                <Emp emps={emps} editRow={editRow} deleteEmp={deleteEmp} />
                </div>
                
            </div>
        </div>
        </div>
    )
};

export default About
