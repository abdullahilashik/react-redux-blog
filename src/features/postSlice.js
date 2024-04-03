import { createSlice, nanoid, createAsyncThunk } from "@reduxjs/toolkit";
import { sub } from "date-fns";
import axios from 'axios';

const URL = 'https://jsonplaceholder.typicode.com/posts'

export const fetchPosts = createAsyncThunk('posts/fetch', async() => {
  try{
    const response = await axios.get(URL);
    return [...response.data];
  }catch(error){
    return error.message;
  }
});

export const addNewPost = createAsyncThunk('posts/addPost', async(data) => {
  try{
    const response = await axios.post(URL, data);
    return response.data;
  }catch(error){
    return error.message;
  }
});

const initialState = {
  posts: [],
  status: 'idle', // idle, loading, succeeded, failed
  error: null
};

const initialState2 = [
  {
    id: 1,
    title: "Test title 1",
    content:
      "this is a test title content that is supposed to be displayed with the post card block. see if it works otherwise report back to the base",
    date: sub(new Date(), { minutes: 1 }).toISOString(),
    reactions: {
        'laugh': 0,
        'happy': 0,
        'wink': 0,
        'love': 0,
        'angry': 0
    }
  },
  {
    id: 2,
    title: "Test title 2",
    content:
      "this is a test title content that is supposed to be displayed with the post card block. see if it works otherwise report back to the base",
    date: sub(new Date(), { minutes: 2 }).toISOString(),
    reactions: {
        'laugh': 0,
        'happy': 0,
        'wink': 0,
        'love': 0,
        'angry': 0
    }
  },
  {
    id: 3,
    title: "Test title 3",
    content:
      "this is a test title content that is supposed to be displayed with the post card block. see if it works otherwise report back to the base",
    date: sub(new Date(), { minutes: 3 }).toISOString(),
    reactions: {
        'laugh': 0,
        'happy': 0,
        'wink': 0,
        'love': 0,
        'angry': 0
    }
  },
  {
    id: 4,
    title: "Test title 4",
    content:
      "this is a test title content that is supposed to be displayed with the post card block. see if it works otherwise report back to the base",
    date: sub(new Date(), { minutes: 4 }).toISOString(),
    reactions: {
        'laugh': 0,
        'happy': 0,
        'wink': 0,
        'love': 0,
        'angry': 0
    }
  },
];

const slicer = createSlice({
  name: "posts",
  initialState,
  reducers: {
    postAdded: {
      reducer: (state, action) => {
        state.posts.push(action.payload);
      },
      prepare: ({ title, content, author }) => {        
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            author: parseInt(`${author}`),
            date: new Date().toISOString(),
            reactions: {
                'laugh': 0,
                'happy': 0,
                'wink': 0,
                'love': 0,
                'angry': 0
            }
          },
          
        };
      },
    },
    addReaction : (state, action) => {
      const {postId, react} = action.payload;
      const post = state.posts.find(i => i.id === postId);      
      post.reactions[react] += 1;
    }
  },
  extraReducers(builder){
    builder
      .addCase(fetchPosts.pending, (state, action) => {
        state.status = 'loading';        
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {        
         state.status = 'succeeded';
         const cleanPosts = action.payload.map(post=> {
          post.date = new Date().toDateString();
          post.reactions = {
            'laugh': 0,
            'happy': 0,
            'wink': 0,
            'love': 0,
            'angry': 0
          };
          post.content = post.body;
          post.author = post.userId;
          return post;
         });
         state.posts= cleanPosts;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addNewPost.fulfilled, (state, action) => {
        const post = action.payload;
        post.date = new Date().toDateString();
        post.reactions = {
          'laugh': 0,
          'happy': 0,
          'wink': 0,
          'love': 0,
          'angry': 0
        };
        post.content = post.body;
        post.author = post.userId;
        state.posts.push(post);
      });
  }
});

export const { postAdded, addReaction } = slicer.actions;
export const selectAllPosts = (state) => state.posts.posts;
export const getPostStatus = (state) => state.posts.status;
export const getPostError = (state) => state.posts.error;
export default slicer.reducer;
