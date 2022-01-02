import React,{useState} from 'react'
import { connect } from 'react-redux'
import { add, del } from '../../redux/actions/ActionCreater'
import Presentation2 from './Presentation2'

function Presentation1({_add,_del,local}) {
    let data=local.data
    const[atodo,setatodo]=useState('')
    return (
        <div>
            <br/>
            <br/>
            <form onSubmit={(e)=>{
                e.preventDefault();
                _add(atodo);
                setatodo('')

            }}>
                <input value={atodo} onChange={(e)=>setatodo(e.target.value)}/>
                <button>ADD</button>

            </form>
            <Presentation2 data={data}/>
           
        </div>
    )
}

const mapStateToProps=(state)=>({
    local:state
})
const mapDispatchToProps={
    _add:add,
    _del:del

}

export default connect(mapStateToProps,mapDispatchToProps)(Presentation1)
