import { NavBar, Icon ,WhiteSpace} from 'antd-mobile';
import "./css/space.scss"
import Cookies from "js-cookie"
import React, {Component} from 'react';

class Space extends Component {

    state={
        username:'',
        password:''
    }

    Login=async (username,password)=>{
        const res=await fetch("http://h5sm.com/uni/users/loginAndRegister",{

            method:'POST',
                body:'username='+username+"&password="+password,
                mode:"cors",
                headers:{
                    "Content-Type":"application/x-www-form-urlencoded;charset=UTF-8"
                }
            });
            const data=await res.json()
            console.log(data)

        if(data.status ==1){
            Cookies.set("token",data.msg.token,{expires:7})
            Cookies.set("avatar",data.msg.avatar,{expires:7})
        }

    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const{username,password}=this.state
        this.Login(username,password)
    }

    handleUser=(e)=>{

        this.setState({
            username:e.target.value
        })
}

    handlePwd=(e)=>{
        this.setState({
            password:e.target.value
        })
    }

    isShowLogin=()=>{
        const token = Cookies.get("token")

        if(!token){
            return(
                <form onSubmit={this.handleSubmit}>
                    <div className="">
                        <input onChange={this.handleUser} name="username" type="text"/>


                    </div>
                    <WhiteSpace/>

                    <div>
                        <input name="pwd" onChange={this.handlePwd} type="text"/>


                    </div>
                    <WhiteSpace/>
                    <div className="submit">
                        <input name="pwd" type="submit" value="Login register"/>


                    </div>
                </form>
            )
        } else {

            const avatar=Cookies.get("avatar")
            console.log("avatar")
            console.log(avatar)
            return (
                <div style={{
                    display:"flex",
                    height:"100vh",
                    justifyContent: "center",
                    alignItems:"center"
                }}>
                    <img width={50} height={50} src={avatar} />
                </div>

            )
        }

    }

    render() {
        return (
            <div className="userpage">
                <NavBar
                    mode="dark"
                >Login Register</NavBar>
                <WhiteSpace/>
                {
                    this.isShowLogin()

                }





            </div>
        );
    }
}

export default Space;

