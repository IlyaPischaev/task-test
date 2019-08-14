import React from 'react';

function CreateList(props){

    return(
        <div className={'text-checkbox'}>
            <p>{props.item.n}</p>
            <input
                type={'checkbox'}
                checked={props.isChecked}
                onChange={ () => props._handleChangeCheck(props._index)}
            />
        </div>
    )
}

export default CreateList;