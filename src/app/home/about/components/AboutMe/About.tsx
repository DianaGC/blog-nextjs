import Image from 'next/image'
import Card from '../Card/Card'
import { INFORMATION } from "../../../../shared/constants/information"

const AboutDetail = () => {
  return (
    <>
      <div className="flex h-screen  md:flex-row md:overflow-hidden">
        <div className="w-full flex none">
          <div><Image
              src="/diana.PNG"
              alt="diana Logo"
              width={180}
              height={17}
              priority
            />
          </div>
        </div>
        <div >
          <div>
            <Card title={INFORMATION.BIOGRAPHY} description={INFORMATION.BIOGRAPHY_DESCRIPTION}></Card>
          </div>
          <div className="">
            <Card title={INFORMATION.SKILLS} description={INFORMATION.SKILLS_DESCRIPTION}></Card></div>
          <div className="">
            <Card title={INFORMATION.CONTACTS} description={INFORMATION.CONTACTS_DESCRIPTION}></Card></div>
        </div>

      </div>

    </>
  )

}

export default AboutDetail