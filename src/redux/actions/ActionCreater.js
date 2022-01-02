import ActionType from "./ActionType"

export const add=(payload)=>({
    type:ActionType.ADD,
    payload:payload
})
export const del=(payload)=>({
    type:ActionType.DEL,
    payload:payload
})
export const upd=(id,data)=>({
    type:ActionType.UPD,
    payload:{id:data}
})