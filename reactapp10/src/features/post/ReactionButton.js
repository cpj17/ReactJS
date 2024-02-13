import React from 'react'
import { useDispatch } from 'react-redux'
import { reactButtonClicked } from './postSlice'

const reactionEmoji = {
    like: '👍',
    dislike: '👎'
}

const ReactionButton = ({post}) => {
    const dispatch = useDispatch()

    const handleClick = (id, name) => {
        // console.log(id);
        // console.log(name);
        dispatch(
            reactButtonClicked({postId: id, reaction: name})
        )
    }

  return (
    <div>
        {
            Object.entries(reactionEmoji).map(([key, value]) => {
                return (
                    <button
                        key={key}
                        onClick={() => handleClick(post.id, key)}

                    >
                        {value} {post.reactions[key]}
                    </button>
                )
            })
        }
    </div>
  )
}

export default ReactionButton

