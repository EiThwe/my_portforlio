import React from 'react'
import "./Skillbar.css"

const Skillbar = ({title,percentage,item}) => {
  return (
    <>
      <div className="skill-box pb-5">
        <h3 className='title text-white uppercase '>{title}</h3>
        <div className="skill-bar ">
            <span className={`skill-per ${item} `}>
                <span className='tooltip text-white ' >
                    {percentage}
                </span>
            </span>

        </div>
      </div>
    </>
  )
}

export default Skillbar
