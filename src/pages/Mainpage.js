import React, { useState } from "react";
import styled from "styled-components";
import ProfilePage from "./ProfilePage";
import EtcPage from "./EtcPage";

export default function Mainpage(){
    const [activeTab,setActiveTab] = useState("ProfilePage");




    

    return(
        <>
            <div>
                <button >프로필</button>
                <button>etc..</button>
            </div>
            
        </>
    )
}



