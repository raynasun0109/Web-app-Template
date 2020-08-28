import React,{useEffect,useState} from "react";
import { NavBar, Icon } from 'antd-mobile';
import {Player} from "video-react"
import "video-react/dist/video-react.css";


export default function LiveRoom() {

    const [dm,setDm]=useState([])

    function WebSocketTest() {
        if ("WebSocket" in window) {
            console.log("您的浏览器支持 WebSocket!");

            // 打开一个 web socket
            const ws = new WebSocket("ws://h5sm.com:1236/socket/dy/flutter");

            ws.onopen = function() {
                ws.send("getChat");
                console.log("数据发送中...");
            };

            ws.onmessage = function (evt) {
                const received_msg = JSON.parse(evt.data);
                console.log(received_msg)
                console.log("数据已接收...");

                setDm(state=>{
                    const data = JSON.parse(JSON.stringify(state))
                        data.push(received_msg[1])
                    return data
                })

            };

            ws.onclose = function() {
                // 关闭 websocket
                console.log("连接已关闭...");
            };
        }

        else {
            // 浏览器不支持 WebSocket
            console.log("您的浏览器不支持 WebSocket!");
        }
    }


    useEffect(()=>{
        WebSocketTest()
    },[])

    return (
        <div className="LiveRoomPage">
            <NavBar
                mode="dark"
                leftContent={[<Icon key={1} type={"search"}/>]}
            >NavBar</NavBar>

            <Player>
            </Player>
            <ul>
                {
                    dm.map((item,index)=>{
                        console.log(item)
                        return (
                            <li key={index}>
                                {item.lv}{item.name}:{item.text}
                            </li>
                        )
                })
                }

            </ul>

        </div>
    )
}
