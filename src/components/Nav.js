import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsFilePerson } from 'react-icons/bs'
import { AiOutlineUnorderedList } from 'react-icons/ai'
import { GrProjects } from 'react-icons/gr'
import { BiMessageAltDetail } from 'react-icons/bi'



const Nav = () => {
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <nav>
      <a className={activeNav === "#home" ? "active" : ''} onClick={() => setActiveNav("#home")} href="#home"><AiOutlineHome /></a>
      <a className={activeNav === "#about" ? "active" : ''} onClick={() => setActiveNav("#about")} href="#about" ><BsFilePerson /></a>
      <a className={activeNav === "#skills" ? "active" : ''} onClick={() => setActiveNav("#skills")} href="#skills"><AiOutlineUnorderedList /></a>
      <a className={activeNav === "#projects" ? "active" : ''} onClick={() => setActiveNav("#projects")} href="#projects"><GrProjects /></a>
      <a className={activeNav === "#contact" ? "active" : ''} onClick={() => setActiveNav("#contact")} href="#contact"><BiMessageAltDetail /></a>
    </nav>
  )
}

export default Nav;