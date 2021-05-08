let initialState={
    user:null,
    a:"manish"
}

const fbreducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_USER":{
            console.log(action.user,"USER")
            return{
                ...state,
                user:action.user
            }
        }
        default:
            return{
                state
            }
    }
}
export default fbreducer 