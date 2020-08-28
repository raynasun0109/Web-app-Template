import React from "react";
import {useHistory,useLocation} from "react-router-dom"
import { NavBar, Icon } from 'antd-mobile';
import "./css/live-list.scss";
import url from "url"
import LiveList from "../components/Live/LiveList";

export default function LivePage(props) {

    const history=useHistory();
    const location=useLocation()

    function handleGoBack() {
        history.goBack()
    }

    const search=location.search
    // const {location:{search}}=props;
    const {cate_id,cate_name}=url.parse(search,true).query;

    return(
        <div  className="live-room-page">
        <NavBar
            mode="dark"
            leftContent={[<Icon onClick={handleGoBack} key="1" type="left"/>]}
        >{cate_name}</NavBar>
            <LiveList api="getColumnRoom" cate_id={cate_id}/>
        </div>
    )
}
