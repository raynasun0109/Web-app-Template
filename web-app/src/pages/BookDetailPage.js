import React,{useState,useEffect} from "react";
import {useParams,useHistory} from "react-router-dom"
import {Icon, NavBar} from "antd-mobile";




export default function BookDetailPage() {

    const bid=useParams()
    const [bookDetail,setBookDetail]=useState({})
    const history=useHistory()
    useEffect(()=>{
        const getBookDetailData=async ()=>{
            const res=await fetch("http://h5sm.com/flutter/api/book_subject",{
                method:'POST',
                body:'q='+bid,
                mode:"cors",
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
                }
            })
            const data=await res.json()
            setBookDetail(state=>data)
        }
        getBookDetailData()
    },[bid])

    function handleFilter(type) {
        return type && type.map(item=>item.name).join("")
    }

    function handleGoBack(){
        history.goBack()
    }

    return(
        <div className="BookDetailpage">
            <NavBar
            mode={"dark"}
            leftContent={[<Icon onClick={handleGoBack} key="1" type="left"/>]}>{bookDetail["title"]}</NavBar>

            <div className="book-cover">
                <div className="pic">
                    <img src={bookDetail["image"]} width={"100%"} height={"100%"}/>
                </div>
                <p>{bookDetail["title"]}</p>

            </div>

            <div className="book-detail">
                <p className="rating">
                    {bookDetail["rating"]}
                </p>

                <p className="publisher">
                    {bookDetail["publisher"]}
                </p>

                <p className="tags">
                    {handleFilter(bookDetail["tags"])}


                </p>



                <div className="author-des">
                    <p className="title">
                        {bookDetail["author"]}
                    </p>
                    <p className="author-intro">
                        {bookDetail["author_intro"]}
                    </p>
                </div>

                <div className="book-des">
                    <p className="name">
                        {bookDetail["title"]}
                    </p>
                    <p className="summary">
                        {bookDetail["summary"]}
                    </p>
                </div>
            </div>


        </div>
    )
}
