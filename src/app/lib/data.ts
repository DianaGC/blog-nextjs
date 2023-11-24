import { IBlog } from "../home/components/home/state/useBlogState.interfaces";
export  const  getBlogs = () =>{
    try{
      const blogs : IBlog[]  = require('../dataBase/blogs.json');
       return blogs  
    } catch (error){
        throw new Error('failed to fetch blogs')
    }
}

export const getBlogDetail =(id: string) =>{
    console.log("kkkkkkkk", id)
    const blogs : IBlog[]  = require('../dataBase/blogs.json');
    console.log("++++6666++++++",blogs)
    console.log("6666++++++", blogs.find((item)=>item.id = id))
    return blogs.find((item)=>item.id = id)
}