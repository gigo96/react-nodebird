import { createAsyncActions } from '../utils/factory';

export const ADD_POST = createAsyncActions('ADD_POST');
export const ADD_COMMENT = createAsyncActions('ADD_COMMENT');
export const REMOVE_POST = createAsyncActions('REMOVE_POST');
export const EDIT_POST = createAsyncActions('EDIT_POST');
export const LOAD_POSTS = createAsyncActions('LOAD_POSTS');
export const LOAD_USER_POSTS = createAsyncActions('LOAD_USER_POSTS');
export const LOAD_HASHTAG_POSTS = createAsyncActions('LOAD_HASHTAG_POSTS');
export const LOAD_POST = createAsyncActions('LOAD_POST');
export const LIKE_POST = createAsyncActions('LIKE_POST');
export const UNLIKE_POST = createAsyncActions('UNLIKE_POST');
export const UPLOAD_IMAGES = createAsyncActions('UPLOAD_IMAGE');
export const REMOVE_IMAGE = 'REMOVE_IMAGE';
export const RETWEET = createAsyncActions('RETWEET');
