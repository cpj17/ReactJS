import React from 'react'
import { useSelector } from 'react-redux'
import {selectAllPost} from './postSlice'
import ReactionButton from './ReactionButton'

const PostList = () => {
    const allPost = useSelector(selectAllPost)
    //console.log(allPost)
    const renderedPosts = allPost.map((post) => (
        <div key={post.id}>
            {post.title} - {post.content}
            <br />
            <ReactionButton post={post} />
        </div>
    ))
  return (
    <div>
        <section>
            <h2> PostList </h2>
            {renderedPosts}
        </section>
    </div>
  )
}

export default PostList