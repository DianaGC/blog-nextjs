export interface IUseBlogStateProps {
    blogs: IBlog[]  | [];
}

export interface IBlog {
    id:string,
    title: string,
    description: string,
    image: string,
    date: number
}