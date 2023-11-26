"use client"
import Card from "../../about/components/Card/Card"
import { useBlogState } from "./state/useBlogState";
import { getDate } from "../../../lib/utils"
import React, { useState } from "react"

const Dashboard = () => {
    const { blogs, handleSearchBlog } = useBlogState()

    return (
        <div>
            <section className="pb-2">
                <label className="relative block">
                    <span className="sr-only">Search</span>
                    <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                        <svg className="h-5 w-5 fill-slate-300" viewBox="0 0 20 20">...</svg>
                    </span>
                    <input onChange={handleSearchBlog} className="placeholder:italic placeholder:text-slate-400 block bg-white w-full border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm" placeholder="Search for anything..." type="text" name="search" />
                </label>
            </section>

            <section className="grid grid-cols-1 gap-12 md: grid-col-2 lg:grid-cols-3">
                {
                    blogs?.map((blog, index) => {
                        return (
                            <div role="Card" key={index}>
                                <Card
                                    title={blog.title}
                                    description={blog.description}
                                    date={getDate(blog.date)}
                                    image={blog.image}
                                    id={blog.id} />
                            </div>
                        )
                    })
                }
            </section>
        </div>
    )
}

export default Dashboard