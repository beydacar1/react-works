import React, { useEffect, useState } from 'react';
import '../styles/form.css'

function Color() {
    const [color, setColor] = useState('#6224b5')
   
   useEffect(() => {
     document.querySelector('.form-content').style.backgroundColor = color
   }, [color]);
  return (
    <div className='form-content'>
    <div className="text-color">
      <label for="color">&lt;meta name="theme-color" content="<span className="preview">{color}</span>"&gt;</label>
      <input id="color" type="color" value={color} onChange={(e) => setColor(e.target.value)}></input>
    </div>
    <div className="text">{color}</div>
  </div>
  )
}
export default Color;