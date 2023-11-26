"use client"
import { useDetailState } from './components/Detail/state/useDetailState'
import Detail from './components/Detail/Detail'
import React from 'react'

import Comments from './components/Coments/Comments'

const BlogDetails = ({ params }: any) => {
  const { details } = params
  const { blog } = useDetailState(details)

  return (
    <section >
      <div className="p-6">
        <Detail title={blog?.title} description={blog?.description} image={blog?.image} date={blog?.date} />
      </div>
      <div className="p-6">
        <Comments/>
      </div>
    </section>
  )
}
export default BlogDetails