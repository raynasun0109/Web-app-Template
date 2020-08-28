import React,{useState,useEffect} from "react";
import { NavBar, Icon,Tabs,WhiteSpace} from 'antd-mobile';
import "./css/live.scss"
import {StickyContainer,Sticky } from "react-sticky"
import LiveHome from "../components/Live/LiveHome";
import LiveList from "../components/Live/LiveList";


// const tabs2=[
//     {title:"all",sub:"t1"},
//     {title:"t2",sub:"sub2"},
//     {title:"t3",sub:"sub3"},
//     {title:"t4",sub:"sub4"},
//     {title:"t5",sub:"sub5"},
//     {title:"t6",sub:"sub6"},
//     {title:"t7",sub:"sub7"},
//     {title:"t8",sub:"sub8"},
//     {title:"t9",sub:"sub9"},
// ]

function renderTabBar(props) {
    return (<Sticky>
        {({ style }) => <div style={{ ...style, zIndex: 1 }}><Tabs.DefaultTabBar {...props} /></div>}
    </Sticky>);
}
const tabs = [
    { title: 'First Tab', sub: 't1' },
    { title: 'Second Tab', sub: 't2' },
    { title: 'Third Tab', sub: 't3' },
];



export default function Live() {
    const [tabs,setTabs]=useState([])

    async function getNavData(){
        const res=await fetch("http://h5sm.com/flutter/api/getColumnDetail")
        const {data}=await res.json();
        const arr=[{
            tag_id:0,
            tag_name:"all",
            sub:0,
            title:"all",
        },
            {
                tag_id:0,
                tag_name:"Home",
                sub:0,
                title:"Home",
            }]
        for (let key in data){
            if (key >15)break
            arr.push({
                tag_id:data[key]["tag_id"],
                tag_name:data[key]["tag_name"],
                sub:data[key]["tag_id"],
                title:data[key]["tag_name"],
            })
        }

        setTabs(state=>arr)
    }


    useEffect(()=>{
        getNavData();
    })

    return(
        <div className="live-page">
            <NavBar
                mode="dark"
            >My Web App</NavBar>

            <StickyContainer>
                <Tabs tabs={tabs}
                      initialPage={1}
                      renderTabBar={renderTabBar}
                >
                    {
                        tabs.map((item,index)=>{
                            if (index ===1){
                                return <LiveHome key={index}/>
                            }
                            return <LiveList tag_id={item["tag_id"]} api="subLiveList" tag_id={0} key={index}/>
                        })
                    }

                </Tabs>
            </StickyContainer>
        </div>
    )
}
