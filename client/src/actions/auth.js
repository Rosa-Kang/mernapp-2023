import { AUTH } from '../constants/actionTypes';
import * as api from '../api/index.js';

export const signin = (form, navigate) => async (dispatch) => {
    try {
       //log in the user
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}
export const signup = (form, navigate) => async (dispatch) => {
    try {
       //sign up the user
        navigate('/');
    } catch (error) {
        console.log(error);
    }
}