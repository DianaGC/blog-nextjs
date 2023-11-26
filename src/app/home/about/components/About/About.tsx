import Image from 'next/image'
import Card from '../Card/Card'
import { INFORMATION_BIOGRAPHY } from "../../../../shared/constants/biography"
import React from 'react'
import styles from "./about.module.scss"


const AboutDetail = () => {
  return (
    <div className="grid grid-cols-1 gap-12 md: grid-col-2 lg:grid-cols-2">
      <div className=" h-full block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
        <img
          className='w-2/4'
          src="/diana.PNG"
          alt="diana Logo"
          width={180}
          height={17}
        />
        <h5 className={styles.name}> DIANA GUANOTASIG</h5>
      </div>
      <div >
        <div className='p-1'>
          <Card title={INFORMATION_BIOGRAPHY.BIOGRAPHY} description={INFORMATION_BIOGRAPHY.BIOGRAPHY_DESCRIPTION}></Card>
        </div>
        <div className='p-1'>
          <Card title={INFORMATION_BIOGRAPHY.SKILLS} description={INFORMATION_BIOGRAPHY.SKILLS_DESCRIPTION}></Card></div>
        <div className='p-1'>
          <Card title={INFORMATION_BIOGRAPHY.CONTACTS} description={INFORMATION_BIOGRAPHY.CONTACTS_DESCRIPTION}></Card></div>
      </div>
    </div>
  )

}

export default AboutDetail