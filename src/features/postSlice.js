import {createSlice} from '@reduxjs/toolkit';

const initialState2 = {
    posts: [],
    loading: false,
    error: null
};

const initialState = [
    {id: 1, title: 'Test title 1', content: 'this is a test title content that is supposed to be displayed with the post card block. see if it works otherwise report back to the base'},
    {id: 2, title: 'Test title 2', content: 'this is a test title content that is supposed to be displayed with the post card block. see if it works otherwise report back to the base'},
    {id: 3, title: 'Test title 3', content: 'this is a test title content that is supposed to be displayed with the post card block. see if it works otherwise report back to the base'},
    {id: 4, title: 'Test title 4', content: 'this is a test title content that is supposed to be displayed with the post card block. see if it works otherwise report back to the base'}
];

const slicer = createSlice({
    name: 'post',
    initialState, 
    reducers: {

    }
})


export default slicer.reducer