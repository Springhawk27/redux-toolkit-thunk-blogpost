import { createSlice, nanoid } from "@reduxjs/toolkit"

// new 2
import { sub } from "date-fns";

const initialState = [
    {
        id: '1',
        title: 'Learning Redux Toolkit',
        content: "I've heard good things.",
        // new 2
        date: sub(new Date(), { minutes: 10 }).toISOString(),
        // new 4
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }
    },
    {
        id: '2',
        title: 'Slices...',
        content: "The more I say slice, the more I want pizza.",
        // new 2
        date: sub(new Date(), { minutes: 5 }).toISOString(),
        // new 4
        reactions: {
            thumbsUp: 0,
            wow: 0,
            heart: 0,
            rocket: 0,
            coffee: 0
        }

    }
];

// const postSlice = createSlice({
//     name: 'posts',
//     initialState,
//     reducers: {
//         postAdded(state, action) {
//             state.push(action.payload)
//         },
//     }
// });
const postSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        postAdded: {
            reducer(state, action) {
                state.push(action.payload)
            },
            prepare(title, content, userId) {
                return {
                    payload: {
                        id: nanoid(),
                        title,
                        content,
                        // new 2
                        date: new Date().toISOString(),
                        userId,
                        // new 4
                        reactions: {
                            thumbsUp: 0,
                            wow: 0,
                            heart: 0,
                            rocket: 0,
                            coffee: 0
                        },
                    }
                }
            }
        },
        // new 4
        reactionAdded(state, action) {
            const { postId, reaction } = action.payload
            const existingPost = state.find(post => post.id === postId)
            if (existingPost) {
                existingPost.reactions[reaction]++
            }
        }
    }
});

export const selectAllPosts = (state) => state.posts;

export const { postAdded, reactionAdded } = postSlice.actions;

export default postSlice.reducer;