"use client"
import Card from "../../about/components/Card/Card"
import { useBlogState } from "./state/useBlogState"
import { IBlog } from "./state/useBlogState.interfaces"
import { getDate } from "../../../lib/utils"
import styles from './dashboard.module.scss'
import Link from "next/link"

const Dashboard = () => {
    const { blogs } = useBlogState()

    return (
        <>
            <div className={styles.title}> Tech Future</div>
            <div className={styles.cardContainer}>
                {
                    blogs?.map((blog, index) => {
                        return (
                            <div key={index} className={styles.card}>
                                <Card
                                    title={blog.title}
                                    description={blog.description}
                                    date={getDate(blog.date)}
                                    image={blog.image} />
                                <Link href={"/home/"+`${blog.id}`}>Leer mas...</Link>
                            </div>
                        )
                    })
                }

            </div>
        </>

    )
}

export default Dashboard