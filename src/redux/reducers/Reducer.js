import ActionType from "../actions/ActionType"


const initialstate={
    data:[]
}
export default (state=initialstate,{payload,type})=>{
    switch(type)
    {
        case ActionType.ADD:
            console.log(payload)
            let newAdd=state.data
            newAdd.push({id:Math.floor(Math.random()*400),todo:payload})
            return {...state}
        case ActionType.DEL:
            console.log(payload)
            let newDel=state.data
            newDel=newDel.filter(data=>data!==payload)
            state.data=newDel
            return {...state}
        case ActionType.UPD:
            console.log(payload)
            let newUp=state.data
            newUp.map(data=>{
                if(data.id==payload.id)
                {
                    data.todo=payload.data
                }
            })
            state.data=newUp
            return {...state}
        default:return state

    }

}