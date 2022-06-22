const initialstate = {

list:[]

}

const todoReducer = (state=initialstate,action) =>{

        switch(action.type)
        {
            case "ADD_TODO":
            const {id , data} = action.payload;
            return{
                    ...state,
                    list:[
                        ...state.list,
                        {
                            id:id,
                            data:data

                        }

                    ]

            }

            case "DELETE_TODO":
           const newlist= state.list.filter((elemt)=>elemt.id!=action.id);
           console.log("gello");
            return{
                    ...state,
                    list:newlist

            }

            case "REMOVE_TODO":
            return{

                ...state,
                list:[]

            }



            default: return state;
        }

}

export default todoReducer;