import React, {useState,useEffect}from "react";
import './css/live-room-page.scss'

import {useHistory} from "react-router-dom"


export default function LiveList(props) {
    const history=useHistory()
    const [liveList,setLiveList]=useState([])

    async function getLiveList() {
        let {api,tag_id,cate_id}=props;
        // tag_id =tag_id||0;
        // cate_id=cate_id||0;
        const res=await fetch(`http://h5sm.com/flutter/api/${api}?tag_id=${tag_id}&cate_id=${cate_id}`)
        const {data} =await res.json();
        setLiveList(state=>data)
    }

    function goToLiveRoom(){
        history.push("/liveroom")
    }

    useEffect(()=>{
        getLiveList()
    },[])

    return(
        <div className="live-list">
            <ul>
                {liveList.map((item,index)=>{
                    return(
                        <li key={item["room_id"]} onClick={goToLiveRoom}>
                            <div className="live-list-info">
                                <img className="live-list-info-src" src={item["room_src"]}/>
                                <p className="live-list-info-anchor">{item["nickname"]}</p>
                                <p className="live-list-info-count">{item["online"]}</p>
                            </div>

                            <div className="live-list-name">
                                {item["room_name"]}
                            </div>

                            <div className="live-list-category">
                                {item["game_name"]}

                            </div>
                        </li>
                    )
                })}

            </ul>
        </div>
    )
}
