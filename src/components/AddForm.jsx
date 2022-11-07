import React, { useState } from 'react'

function AddForm({showForm, onSave}) {
    const [taskname, setTaskname] = useState('');
    const [daytime, setDaytime] = useState('');
    const [reminder, setReminder] = useState(false);
    
    function onSubmit(e){
        e.preventDefault();
        let newTask = {
            name: taskname,
            daytime: daytime,
            isReminder: reminder
        }

        onSave(newTask);

        setTaskname('');
        setDaytime('');
        setReminder(false);
    }
    return (<>
    {showForm && <form className='' onSubmit={onSubmit}>
        <div className="form-group">
            <label htmlFor="taskname" className='form-label'>Task</label>
            <input type="text" id="taskname" className='form-control' placeholder='Add Task' value={taskname} onChange={e=>setTaskname(e.target.value)} required/>
        </div>
        <div className="form-group">
            <label htmlFor="daytime" className='form-label'>Day &amp; Time</label>
            <input type="text" id="daytime" className='form-control' placeholder='Add Day & Time' value={daytime} onChange={e=>setDaytime(e.target.value)}/>
        </div>
        <div className="form-group">
            <label htmlFor="reminder" className='form-label'>Set Reminder
                <input type="checkbox" id="reminder" className='form-control' value={reminder} onChange={e=>setReminder(e.target.value)}/>
            </label>
        </div>
        <button type="submit" className='btn btn-block btn-dark'>Save Task</button>
    </form>}
    </>
  )
}

export default AddForm