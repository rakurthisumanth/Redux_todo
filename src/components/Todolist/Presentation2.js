import React,{useState} from 'react'
import { add, del, upd } from '../../redux/actions/ActionCreater'
import {connect} from 'react-redux'

function Presentation2({_del,_upd,data}) {
    const [edite,setedite]=useState(false)
    const [atodo,setatodo]=useState('')
    return (
        <div>
           {
               data.map(data=>{
                   return(
                       <ul>
                           {edite?<div>
                               <input value={atodo} onChange={(e)=>setatodo(e.target.value)}/>
                               <button onClick={()=>{_upd(data.id,atodo);setedite(false)}}>Update</button>


                           </div>
                           :<div> {data.todo}
                           
                           
                           
                           <div>
                               <button onClick={()=>{setedite(true);setatodo(data.todo)}}>edite</button>
                           </div>

                           </div>
                           }
                           <div><button onClick={()=>_del(data)}>delete</button></div>
                       </ul>
                   )
               })
           }

        </div>
    )
}
const mapStateToProps=(state)=>({
    local:state
})
const mapDispatchToProps={
    _del:del,
    _upd:upd
}

export default  connect(mapStateToProps,mapDispatchToProps)(Presentation2)
