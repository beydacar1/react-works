import React from 'react'
import '../styles/useProps.css'

export default function UseProps(props) {
  return (
    <div className='developer-information'>
      <h3>Name : {props.name}</h3>
        <p>Jobs: {props.job}</p>
        <p>Programming languages ​​used: {props.language}</p>
    </div>
  )
}
