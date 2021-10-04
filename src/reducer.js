export const initialState = {
    users: null,
    playlists: [],
    playing: false,
    item: null,
    //remove after finished developing!!!!!!!!!!!!!
    token: "BQAJs0T0wnDq84QZIC2n5RzJh3D9L0PQSpOwtCPpwVt6ugWKCUf6UqmQhnLwWr-NmVo9hUB2y3U8O54-5SdoJAWzxJlyCjuB1wvp8PIWzHaR1SRHaWBBf0R-28Tb3RXMH32WdEYGhiu677bKQKEvOcg6f18Z97hx25OUI6xfOcaMsQJVnWHF"
}

const reducer = (state, action) => {
    console.log(action);

    switch(action.type){
        case 'SET_USER':
            return {
                ...state,
                user: action.user
            };
            case 'SET_TOKEN': 
            return{
                ...state,
                token: action.token,
            }
            default: 
            return state;
    }
}
export default reducer;