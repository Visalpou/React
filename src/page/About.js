import React, { useState, StrictMode, useEffect } from 'react';
import { fectData, CutString } from './../utils/fectdata'
function About() {

  const [load, setLoad] = useState(false)

  const [data, setData] = useState({
    username: '',
    password: ''
  })

  useEffect(() => {
    fectData();
  }, [])
  const handalClick = (e) => {
    setLoad(!load);
  }
  const handalSubmit = (e) => {
    return
  }
  const handalChange = (e) => {
    //setData({  e.target.name: e.target.value })
    console.log();
  }
  return (
    <div>
      <form>
        <input type='text' name="username" onChange={(e) => handalChange(e)} placeholder='Username' value={data.username} />
        <input type='password' name="password" onChange={(e) => handalChange(e)} placeholder='Password' value={data.username} />
        <Button type="submit" isLoading={load} onClick={(e) => handalSubmit(e)} size='md' title='sdf'>Summit</Button>
      </form>

    </div>
  )
}

export default About;



const Button = ({
  color = 'green',
  title = "Button",
  children,
  isLoading,
  size = 'sm',
  ...props
}) => {
  console.log(size);
  let classB = ''
  switch (size) {
    case 'sm':
      classB = 'btn btn-sm btn-danger'
      break
    case 'md':
      classB = 'btn btn-md btn-success'
      break
  }


  return <button className={classB} {...props}>
    {isLoading ? (
      <div class="spinner-border text-dark" role="status">
      </div>
    ) : ''}{children}
  </button>
}