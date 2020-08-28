import React from "react";
import "./css/book.scss";
import {Icon, Tabs} from 'antd-mobile';
import BookNavBar from "../components/book/BookNavBar";
import {Sticky, StickyContainer} from "react-sticky";
import LiveHome from "../components/Live/LiveHome";
import LiveList from "../components/Live/LiveList";
import BookList from "../components/book/BookList";
import {useHistory} from "react-router-dom"


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


export default function Library() {


    const history=useHistory()


    function handleGoSearch() {
        history.push("/booksearch")
    }

    return(
        <div className="book-page">
            <div className="book-nav-bar topnavbar" onClick={handleGoSearch}>
                <BookNavBar isShowLeft={false}/>
            </div>



            <StickyContainer>
                <Tabs tabs={tabs}
                      initialPage={1}
                      renderTabBar={renderTabBar}
                >
                    {/*{*/}
                    {/*    tabs.map((item,index)=>{*/}
                    {/*        return <BookList key={index} title={item["title"]}/>*/}
                    {/*    })*/}
                    {/*}*/}

                </Tabs>
            </StickyContainer>
        </div>
    )
}
