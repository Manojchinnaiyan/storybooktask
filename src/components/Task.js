import React from 'react'
import PropTypes from 'prop-types'


const Task = ({task:{id,title,state},onArchive,onPinned}) => {
    return (
        <div className={ `list-item ${ state }` }>
            <label className="checkbox">
                <input
                    type="checkbox"
                    defaultChecked={ state === "TASK_ARCHIVED" }
                    disabled={ true }
                    name="checked"
                />
                <span className="checkbox-custom" onClick={()=> onArchive(id)}  />
            </label>
            <div className="title">
                <input type="text" value={ title } readOnly={ true } placeholder="Input title" style={{ background: 'red' }}></input>
            </div>
            <div className="actions" onClick={ event => event.stopPropagation() }>
                { state !== "TASK_ARCHIVED" && (
                    <a onClick={ () => onPinned( id ) }>
                        <span className={`icon-star`}></span>
                    </a>
                ) 
                    }
            </div>

           
        </div>
    )
}

export default Task

Task.propTypes = {
    task: PropTypes.shape( {
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        state: PropTypes.string.isRequired
    } ),
    onArchive: PropTypes.func,
    onPinned: PropTypes.func,
}