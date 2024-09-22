import React from 'react';
import './InputOption.css';

function InputOption({Icon, title}) {
  return (
    <div className='inputOption'>
      {Icon && <Icon />} 
      {title}
    </div>
  )
}

export default InputOption
