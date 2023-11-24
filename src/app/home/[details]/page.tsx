"use client"
import { useRouter } from 'next/router'
import Link from 'next/link'
import { useDetailState } from './components/Detail/state/useDetailState'
import Detail from './components/Detail/Detail'
import { IBlog } from '../components/home/state/useBlogState.interfaces'

import Comments from './components/Coments/Comments'

const BlogDetails = ({ params }: any) => {
  const { details } = params
  const { blog } = useDetailState(details)
 

  return(
    <div >
    <div>
    <Detail title={blog?.title} description={blog?.description} image={blog?.image} date={blog?.date} />
    </div>
    
    <div >
      <Comments></Comments>
    </div>
    </div>
  )
}
export default BlogDetails