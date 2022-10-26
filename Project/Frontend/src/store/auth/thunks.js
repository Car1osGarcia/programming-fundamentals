
export const startLoginWithEmailPassword= ({email, password})=>{
    return async(dispatch) =>{
        dispatch(checkingCredentials());

        const {ok, displayName}= await loginWithEmailPassword({email, password});

        if(!ok) return dispatch(logout({errorMessage}));

        dispatch(login({uid, displayName}));
    }
}