import axios from "axios";

const initialState =
{
    username: '',
    id: 0,
    img: ''
}

const GET_USER_INFO = "GET_USER_INFO";

export function getUser(userID, userName, profilePic)
{
    let userData = axios.get('/auth/user').then(res =>
    {
        
        console.log(res.data);
        return res.data;
    });
    const { id, username, profile_pic } = userData;
    return (
    {
        type: GET_USER_INFO,
        payload: {id: id, username: username, img: profile_pic}
    });
}

export default function reducer(state = initialState, action)
{
    switch (action.type)
    {
        case GET_USER_INFO:
            return Object.assign({}, state, {state: action.payload});
        default:
            return state;
    }
}