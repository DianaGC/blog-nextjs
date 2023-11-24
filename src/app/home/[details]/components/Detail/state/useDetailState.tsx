import { IBlog } from "@/app/home/components/home/state/useBlogState.interfaces";
import { IUseDetailStateProps } from "./useDetail.interfaces";
import { useEffect, useState } from "react";
import { getBlogDetail } from "@/app/lib/data";

export const useDetailState = (id: string): IUseDetailStateProps =>{
    const[blogDetail, setBlogDetail] = useState<IBlog >()
    console.log(id)

    useEffect(()=>{
        const blog = getBlogDetail(id);
        console.log(blog)
        setBlogDetail(blog);
    }, [])

    return {
        blog: blogDetail
    }

}
