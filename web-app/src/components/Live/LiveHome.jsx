import React from "react";
import LiveBanner from "./LiveBanner";
import LiveCategory from "./LiveCategory";
import { WhiteSpace } from 'antd-mobile';
import LiveList from "./LiveList";



export default function LiveHome() {
    return(
        <div>
            <WhiteSpace/>
            <LiveBanner/>
            <WhiteSpace/>
            <LiveCategory/>
            <WhiteSpace/>
            <LiveList tag_id={0} api="subLiveList" />
        </div>
    )
}
