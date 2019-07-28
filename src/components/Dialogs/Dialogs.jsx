import React from 'react'
import classes from './Dialogs.module.css'
import {NavLink} from 'react-router-dom'
const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}> 
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + '' + classes.active }>
                    <NavLink to="/dialogs/1">Ira</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/2">Vova</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/3">Kirill</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs/4">Valera</NavLink>
                </div>
                <div className={classes.dialog}>
                    Serega
                </div>
                </div>
                <div className={classes.messages}>
                <div className={classes.messages}>
                    Hello
                </div>
                <div className={classes.messages}>
                    HRU?
                </div>
                <div className={classes.messages}>
                    Good, thanks
                </div>
                </div>  
        </div>
    )
}

export default Dialogs;