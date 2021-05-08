let initialState={
    formUser:{
    firstName:null,
    lastName:null,
    email:null,
    password1:null,
    password2:null
},
formUserArray:[]
}

export const formReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_USER":
            return{
                ...state,
                formUser:action.user,
    }
  
    
    default:
        return state
        
    
   
}
}