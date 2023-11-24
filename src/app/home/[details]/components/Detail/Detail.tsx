import React from "react"
import Image from 'next/image'
import styles from "./detail.module.scss"
import Link from "next/link"
import { IDetail } from "./state/useDetail.interfaces"


const Detail = ({ title, description, date, image }: IDetail) => {


    const dateValue = () => ((date) && (
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {date}
        </p>))

    const getImage = () => ((image) && (
        <Image
            className="m-2 object-center justify-center"
            src={image}
            alt="diana Logo"
            width={300}
            height={17}
            priority
        />))

    return (
        <>
            <div className="flex flex col m-5  md:flex-row md:overflow-hidden">
                <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <h5 className={styles.title}>
                        {title}
                    </h5>
                    <div className="flex justify-center">
                        {getImage()}
                    </div>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {description}
                    </p>
                    {dateValue()}
                    <div className="mb-2 text-base text-neutral-600 dark:text-neutral-200">
                        Autor: Diana
                    </div>
                </div>
            </div>
        </>
    )
}

export default Detail