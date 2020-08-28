import React,{useState,useEffect} from "react";
import {useHistory} from "react-router-dom"


export default function LiveCategory() {

    const history=useHistory()
    const [category,setCategory]=useState([])

    async function getLiveCategory(){
        const res = await fetch("http://h5sm.com/flutter/api/getColumnlist");
        const {data} =await res.json()
        setCategory(state=>data)
    }


    function handleListCategory(id,name){
        history.push({
            pathname:"/livelist",
            search:"?cate_id="+id+"&cate_name="+name
        })
    }

    useEffect(()=>{
        getLiveCategory()
    },[])

    return(
        <div className="live-category">
            <ul>
                {
                    category.map((item,index)=>{
                        return (
                            <li key={index} onClick={handleListCategory.bind(null,item["cate_id"],item["cate_name"])}>
                                <img src={item["pic"]}/>
                                <span>{item["cate_name"]}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    )
}
