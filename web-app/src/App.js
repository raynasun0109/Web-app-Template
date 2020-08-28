import React,{useState,useEffect} from 'react';
import {Layout} from "./components/Layout";
import {TabBar} from "antd-mobile";
import {Switch,Route,withRouter,useHistory} from "react-router-dom";
import Live from "./pages/Live";
import Movie from "./pages/Movie";
import Library from "./pages/Library";
import Space from "./pages/Space";
import LivePage from "./pages/LivePage";
import {
    Provider as KeepAliveProvider, KeepAlive
} from "react-keep-alive"
import LiveList from "./components/Live/LiveList";
import BookDetailPage from "./pages/BookDetailPage";
import BookSearchPage from "./pages/BookSearchPage";
import LiveRoom from "./pages/LiveRoom";



function App(props) {
    const history=useHistory()
    const [selectedTab,setSelectedTab]=useState("redTab");
    const [hidden,setHidden]=useState(false);
    const [fullScreen,setFullScreen]=useState(true);

    history.listen((location,action)=>{
        switch (location.pathname) {
            case '/':
                document.title='homepage title';
                break;
            case '/movie':
                document.title='movie title';
                break;
            case '/book':
                document.title='book title';
                break;
            case '/user':
                document.title='user title';
                break;
            // case '/livelist':
            //     document.title='user title';
            //     break
            default:
                document.title="default title"

        }
    })

  return (
    <div className="App">
        <KeepAliveProvider>
        <Layout>
            <Switch>
                <Route exact path="/">
                    <KeepAlive name={"live"}>
                        <Live/>
                    </KeepAlive>
                </Route>
                <Route path="/movie">
                    <KeepAlive name={"movie"}>
                        <Movie/>
                    </KeepAlive>
                </Route>
                <Route path="/book">
                    <KeepAlive name={"library"}>
                        <Library/>
                    </KeepAlive>
                </Route>
                <Route path="/user">
                    <KeepAlive name={"space"}>
                        <Space/>
                    </KeepAlive>
                </Route>
                <Route path="/livelist">
                        <LivePage/>
                </Route>
                <Route path="/bookdetail/:id">
                    <BookDetailPage/>
                </Route>
                <Route path="/booksearch">
                    <BookSearchPage/>
                </Route>
                <Route path="/liveroom" component={LiveRoom}>
                </Route>
            </Switch>


            <div style={fullScreen ? { position: 'fixed', width: '100%', bottom: 0 } : { height: 0,overflow:"hidden" }}>
                <TabBar
                    unselectedTintColor="#949494"
                    tintColor="#33A3F4"
                    barTintColor="white"
                    hidden={hidden}
                >
                    <TabBar.Item
                        title="Live"
                        key="Life"
                        icon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/sifuoDUQdAFKAVcFGROC.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selectedIcon={<div style={{
                            width: '22px',
                            height: '22px',
                            background: 'url(https://zos.alipayobjects.com/rmsportal/iSrlOTqrKddqbOmlvUfq.svg) center center /  21px 21px no-repeat' }}
                        />
                        }
                        selected={selectedTab === 'blueTab'}
                        onPress={() => {
                            setSelectedTab(state=>"blueTab")
                            history.push('/')
                        }}
                        data-seed="logId"
                    />
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/BTSsmHkPsQSPTktcXyTV.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://gw.alipayobjects.com/zos/rmsportal/ekLecvKBnRazVLXbWOnE.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="Movie"
                        key="Koubei"
                        selected={selectedTab === 'redTab'}
                        onPress={() => {
                            setSelectedTab(state=>"redTab")
                            history.push('/movie')
                        }}
                        data-seed="logId1"
                    />
                    <TabBar.Item
                        icon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/psUFoAMjkCcjqtUCNPxB.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        selectedIcon={
                            <div style={{
                                width: '22px',
                                height: '22px',
                                background: 'url(https://zos.alipayobjects.com/rmsportal/IIRLrXXrFAhXVdhMWgUI.svg) center center /  21px 21px no-repeat' }}
                            />
                        }
                        title="Library"
                        key="Friend"
                        selected={selectedTab === 'greenTab'}
                        onPress={() => {
                            setSelectedTab(state=>"greenTab")
                            history.push('/book')
                        }}
                    />
                    <TabBar.Item
                        icon={{ uri: 'https://zos.alipayobjects.com/rmsportal/asJMfBrNqpMMlVpeInPQ.svg' }}
                        selectedIcon={{ uri: 'https://zos.alipayobjects.com/rmsportal/gjpzzcrPMkhfEqgbYvmN.svg' }}
                        title="Space"
                        key="my"
                        selected={selectedTab === 'yellowTab'}
                        onPress={() => {
                            setSelectedTab(state=>"yellowTab")
                            history.push('/user')
                        }}
                    />
                </TabBar>
            </div>



        </Layout>
        </KeepAliveProvider>
    </div>
  );
}

export default withRouter(App);
