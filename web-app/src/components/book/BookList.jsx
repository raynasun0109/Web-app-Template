// import React,{useEffect,useState} from "react";
//
// import "./css/booklist.scss"
// export default function BookList({title}) {
//
//     const [bookList,setBookList]=useState([]);
//
//     useEffect(()=>{
//         const getBookList=async ()=>{
//             const res=await fetch("http://h5sm.com/flutter/api/search_book",{
//                 method:'POST',
//                 body:'q='+title,
//                 mode:"cors",
//                 headers:{
//                     "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
//                 }
//             })
//             const data=await res.json()
//             setBookList(state=>data)
//         }
//         getBookList()
//
//     },[title])
//
//     function handleGoBookDetailPage(id){
//         history.push({
//             pathname:"/bookdetail/"+id
//         })
//     }
//
//
//     if (!bookList.count) {
//         return <div>
//             loading
//         </div>
//     }
//
//
//
//
//     return (
//         <div className="booklist">
//             <ul>
//
//                 {
//                     bookList.books.map((item,index)=>{
//                         return (
//                             <li key={index} onClick={handleGoBookDetailPage}>
//                                 <div className="pic">
//                                     <img width="100%" height="100%" src={item["image"]}/>
//                                 </div>
//                                 <div className="book-info">
//                                     <p className="name">name {item["title"]}</p>
//                                     <p>author {item["author"]}</p>
//                                     <p>publish date {item["pubdate"]}</p>
//                                     <p>price {item["price"]}</p>
//                                     <p>publisher {item["publisher"]}</p>
//                                 </div>
//                             </li>
//                         )
//                     })
//                 }
//
//             </ul>
//         </div>
//     )
// }
