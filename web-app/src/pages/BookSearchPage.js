import React,{useEffect,useState} from "react";
import BookNavBar from "../components/book/BookNavBar";
import "./css/booksearchpage.scss"
import {useHistory} from "react-router-dom"

export default function BookSearchPage() {

    const [name,setName]=useState("灵异")

    const [bookSearch,setBookSearch]=useState({})

    const history=useHistory();

    useEffect(()=>{
        const getBookSearchList=async ()=>{
            const res=await fetch("http://h5sm.com/uni/api/search_book",{
                method:'POST',
                body:'q='+name+"&tag="+name,
                mode:"cors",
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
                }
            })
            const data=await res.json()
            setBookSearch(state=>data)
        }
        getBookSearchList()
    },[name])


    function getUserInput(res) {
        setName(state=>res)
    }

    function handleGoBookDetail(id) {
        history.push({
            pathname:"/bookdetail/"+id
        })
    }



    if (!bookSearch.books){
        return "enter book name"
    }

    return (
        <div className="BookSearchPage">
            <BookNavBar fn={getUserInput} isShowLeft={true}/>

            <div className="list">
                <ul>
                    {
                        bookSearch.books.map((item,index)=>{
                            return(
                                <li key={item.id} onClick={handleGoBookDetail.bind(null,item.id)}>

                                    <img width="100%" height="100%" src={item.image}/>
                                    <p>{item.title}</p>

                                </li>
                            )
                        })
                    }




                </ul>



            </div>


        </div>
    )
}
