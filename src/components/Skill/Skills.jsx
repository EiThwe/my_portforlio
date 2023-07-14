import React from 'react'
import Skillbar from './Skillbar'

const Skills = () => {
  return (
    <>
      <div className=" my-20">
        {/*  text  */}
      <div className="text p-5">
      <p className='pb-5'><small className='text-white  text-xs font-medium pb-5 uppercase '>Skills</small></p>
        <h3 className='text-2xl pb-5 font-light text-white'>Skills I have collected over <br /> one years and days.</h3>
        <div className="w-10 h-[1px] bg-white"></div>
      </div>
      {/* progress bar  */}
     <div className="p-5">
     <Skillbar title="html" percentage="95%" item="html"/>
     <Skillbar title="css" percentage="85%" item="css"/>
      <Skillbar title="javascript" percentage="75%" item="javascript"/>
      <Skillbar title="reactjs" percentage="80%" item="react"/>
      <Skillbar title="php" percentage="30%" item="php"/>
     </div>
      </div>
    </>
  )
}

export default Skills
