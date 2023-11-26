import { IBlog } from "../home/components/Home/state/useBlogState.interfaces";

export const getBlogs = () => {
    try {
        const blogs: IBlog[] = require('../dataBase/blogs.json');
        return blogs
    } catch (error) {
        throw new Error('failed to fetch blogs')
    }
}

export const getBlogDetail = (id: string) => {
    const blogs: IBlog[] = require('../dataBase/blogs.json');
    return blogs.find((item) => item.id === id)
}

export const searchBlog = (name: string) => {
    const blogs: IBlog[] = require('../dataBase/blogs.json');
    return blogs.filter((item) => item.title.includes(name))
}