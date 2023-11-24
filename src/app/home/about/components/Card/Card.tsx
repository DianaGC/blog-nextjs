import React from "react"
import Image from 'next/image'
import { ICard } from "./Card.interfaces"
import styles from "./card.module.scss"
import Link from "next/link"


const Card = ({ title, description, date, image }: ICard) => {

    const dateValue = () => ((date) && (
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {date}
        </p>))

    const getImage = () => ((image) && (
        <Image
            className={styles.img}
            src={image}
            alt="diana Logo"
            width={300}
            height={17}
            priority
        />))

    return (
        <>
            <div className="flex flex col  md:flex-row md:overflow-hidden">


                <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    {getImage()}
                    <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50 p-2">
                        {title}
                    </h5>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {description}
                    </p>

                    {dateValue()}
                   

                </div>
            </div>
        </>
    )
}

export default Card