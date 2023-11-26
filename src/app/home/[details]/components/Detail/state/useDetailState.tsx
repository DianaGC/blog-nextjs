import { IBlog } from "@/app/home/components/Home/state/useBlogState.interfaces";
import { IUseDetailStateProps } from "./useDetail.interfaces";
import { useEffect, useState } from "react";
import { getBlogDetail } from "@/app/lib/api";

export const useDetailState = (id: string): IUseDetailStateProps =>{
    const[blogDetail, setBlogDetail] = useState<IBlog >()

    useEffect(()=>{
        const blog = getBlogDetail(id);
        setBlogDetail(blog);
    }, [])

    return {
        blog: blogDetail
    }

}
