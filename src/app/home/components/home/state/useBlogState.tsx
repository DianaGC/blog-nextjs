
import { getBlogs, searchBlog } from "@/app/lib/api";
import { IBlog, IUseBlogStateProps } from "./useBlogState.interfaces"
import { useEffect, useState } from "react";

export const useBlogState = ():IUseBlogStateProps =>{
    const[blogs, setBlogs] = useState<IBlog[]>([])
   

    useEffect(()=>{
        setBlogs(getBlogs());
    }, [])

    const handleSearchBlog = (event: {target: {value:string}}) =>  setBlogs(searchBlog(event.target.value))
    
    return {
        blogs,
        handleSearchBlog
    }

}