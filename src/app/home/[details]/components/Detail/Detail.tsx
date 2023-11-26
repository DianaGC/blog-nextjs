import React from "react"
import Image from 'next/image'
import styles from "./detail.module.scss"
import { IDetail } from "./state/useDetail.interfaces"


const Detail = ({ title, description, date, image }: IDetail) => {

    const dateValue = () => ((date) && (
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
            {date}
        </p>))

    return (
        <section>
            <div className="grid grid-cols-1 gap-12 ">
                <div className="block rounded-lg bg-white p-6 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-neutral-700">
                    <h5 className={styles.title}>
                        {title}
                    </h5>
                    <div className="flex justify-center">
                        <img
                            className="m-2 object-center justify-center w-2/4 p-3"
                            src={image}
                            alt="blog"
                        />
                    </div>
                    <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">
                        {description}
                    </p>
                    {dateValue()}
                    <div className={styles.author}>
                        Autor: Diana
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Detail