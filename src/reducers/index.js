const reducer = (state={},action)=>{
     switch(action.type){
         case 'GET_LATEST_MOVIES':
                  return {...state, isLoading:true}
         case 'LATEST_MOVIES_RECEIVED':
               return {...state, movies:action.latestMovies.results,isLoading:false}
         default:
             return state;
     }
 }
 
 export default reducer;
 