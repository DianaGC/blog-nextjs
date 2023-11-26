export interface IUseBlogStateProps {
    blogs: IBlog[]  | [];
    setBlogs?:   () => void;
    handleSearchBlog: (
        event: { target: { value: string } } | any
      ) => void;
}

export interface IBlog {
    id:string,
    title: string,
    description: string,
    image: string,
    date: number
}