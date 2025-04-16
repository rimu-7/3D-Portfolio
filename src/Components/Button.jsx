import React from 'react'

const Button = ({text, className, id}) => {
  return (
    <a className={`${className ?? ""} cta-wrapper`}>
        <div className="cta-button group">
            <div className='bg-circle'/>
            <p className='text'>See my Work</p>
            <div className="arrow-wrapper">
                <img src="/public/images/arrow-down.svg" alt="arrow" />
            </div>
        </div>
    </a>
  )
}

export default Button