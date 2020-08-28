import React from "react";
import {Icon} from "antd-mobile";
import "./css/bookNavBar.scss";
import {useHistory} from "react-router-dom"






export default function BookNavBar (props) {

    const history = useHistory()

    function handleGoBack(){
        history.goBack()
    }

    function sendInput(e) {
        if (e.keyCode===13){
            const {fn}= props

            fn(e.target.value)
        }
        e.target.value=""
    }

    return (
            <div className="book-nav">
                {
                    props.isShowLeft &&
                    <Icon type="left" color="white" onClick={handleGoBack}/>
                }

                <div className="search=wrap">
                    <Icon type={"search"} color="#999" />
                    <input onKeyUp={sendInput} className="search" type="text" placeholder="Search Book"/>
                </div>
                <Icon type={"search"} color={"white"} />
            </div>
    )
}
