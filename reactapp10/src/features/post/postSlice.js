import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState = [
    {
        id: 1,
        title: "title 1",
        content: "content",
        reactions: {
            like: 0,
            dislike: 0
        }
    },
    {
        id: 2,
        title: "title 2",
        content: "content 2",
        reactions: {
            like: 0,
            dislike: 0
        }
    },
    {
        id: 3,
        title: "title 3",
        content: "content 3",
        reactions: {
            like: 0,
            dislike: 0
        }
    }
]

export const postSlice = createSlice({
    name: "posts",
    initialState,
    reducers: {
        addPost: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        reactions: {
                            like: 0,
                            dislike: 0
                        }
                    }
                }
            }
        },
        reactButtonClicked(state, action) {
            const {postId, reaction} = action.payload
            const selectedPost = state.find(post => post.id === postId)
            if (selectedPost) {
                selectedPost.reactions[reaction]++
            }
        }
    }
})

export const selectAllPost = (state) => state.posts

export const {addPost, reactButtonClicked} = postSlice.actions

export default postSlice.reducer