import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("post/getPost", async ({ id }) => {
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`).then((res) =>
    res.json()
  );
});

export const deletePost = createAsyncThunk(
  "post/deletePost",
  async ({ id }) => {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${id}`, {
      method: "DELETE",
    }).then((res) => res.json());
  }
);
export const createPost=createAsyncThunk("post/createPost",async({values})=>{
    return fetch (`https://jsonplaceholder.typicode.com/posts/`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-type":"application/json"
        },
        body:JSON.stringify({
            title:values.title,
            body:values.body,
        }),
    }).then((res)=>res.json())
});

const postSlice = createSlice({
  name: "post",
  initialState: {
    post: [],
    loading: false,
    error: null,
    edit: false,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getPost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(getPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = [action.payload];
    });
    builder.addCase(getPost.rejected, (state, action) => {
      state.loading = true;
      state.post = action.payload;
    });
    builder.addCase(deletePost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(deletePost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = action.payload;
    });
    builder.addCase(deletePost.rejected, (state, action) => {
      state.loading = true;
      state.post = action.payload;
    });
         
     builder.addCase(createPost.pending, (state, action) => {
      state.loading = true;
    });
    builder.addCase(createPost.fulfilled, (state, action) => {
      state.loading = false;
      state.post = [action.payload];
    });
    builder.addCase(createPost.rejected, (state, action) => {
      state.loading = false;
      state.post = action.payload;
    });
  },
});

export default postSlice.reducer;
