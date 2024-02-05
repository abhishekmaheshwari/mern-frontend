//import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import TaskForm from './taskForm'

const Dashboard = () => {
  const navigate = useNavigate()
  const { user } = useSelector(state => state.auth)

  useEffect(() =>{
    if(!user) navigate('/login')
  }, [user,navigate])
  return (
    <>
      <section className='heading'>
        <h1> Welcome {user && user.name}</h1>
        <div style={{display: 'flex', justifyContent: 'center'}}>
          <button className='btn' onClick={() => navigate('/alltasks')}>Check tasks</button></div>
        <p>Tasks Dashboard</p>
      </section>
      <TaskForm></TaskForm>
    </>
  )
}

export default Dashboard