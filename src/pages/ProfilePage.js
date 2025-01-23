import React from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import profileImage from "../images/profile2.jpg";
import EtcPage from "./EtcPage";

export default function ProfilePage() {
  const navigate = useNavigate();

  const Body = styled.div` // Use <div> instead of <body>    
    display: flex;
    justify-content: center;
    background-color: #454545;
  `;

  const InfoSection = styled.div`
    display: flex;
    border: 1px solid #fff;
    width: 65%;
    margin: 10%;
  `;

  const ImageSection = styled.div`
    display: inline-block;
    border: 1px solid #fff;
  `;

  const ProfileImage = styled.img`
    width: 300px;
    height: 100%;
  `;

  const ProfileInfoSection = styled.div`
    width: auto;
  `;

  const ProfileInfo = styled.div`
    display: flex;
    margin-top: 25px;
    margin-left: 30px;
    color: white;
    font-size: 25px;
  `;

  return (
    <>
     
       
      <Body>
        <InfoSection>
          <ImageSection>
            <ProfileImage src={profileImage} />
          </ImageSection>
          <ProfileInfoSection>
            <ProfileInfo>홍성현</ProfileInfo>
            <ProfileInfo>주전공: 가상현실전공 / 복수전공: 소프트웨어전공</ProfileInfo>
            <ProfileInfo>MBTI : ISTJ</ProfileInfo>
            <ProfileInfo>제일 좋았던 경험 : 학교 밴드부 입부 후 첫 공연을 끝냈을 때</ProfileInfo>
            <ProfileInfo>요즘 취미와 관심사 : 일렉기타, 게임</ProfileInfo>
            <ProfileInfo>
              앞으로의 계획 : 유레카 수료, JLPT N1 or N2 도전 &#40;N3 보유중..&#41;
            </ProfileInfo>
          </ProfileInfoSection>
        </InfoSection>
      </Body>
      <EtcPage/>
    </>
  );
}
