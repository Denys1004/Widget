import React from 'react'
import '../../sass/App.scss';

const MyModal = (props) => {
    const rootClasses = ["myModal_container"];

    if(props.modal === true){ rootClasses.push("mod_active") };
    
    return(
        <div className={rootClasses.join(" ")} onClick={ ()=>{props.setModal(false)} }>
            <div className="myModal" onClick={ (e)=>{e.stopPropagation()} }>
                {props.children}
            </div>
        </div>
    );
}

export default React.memo(MyModal)