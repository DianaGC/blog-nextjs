
import { getBlogs } from "@/app/lib/data";
import { IBlog, IUseBlogStateProps } from "./useBlogState.interfaces";
import { useEffect, useState } from "react";

export const useBlogState = ():IUseBlogStateProps =>{
    const[blogs, setBlogs] = useState<IBlog[]>([])
   

    useEffect(()=>{
        const blogs = getBlogs();
        setBlogs(blogs);
    }, [])

    return {
        blogs
    }


}