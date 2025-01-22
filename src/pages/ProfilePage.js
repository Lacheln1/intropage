import React from "react";
import styled from "styled-components";
import profileImage from "../images/profile2.jpg";
export default function ProfilePage() {
  const Body = styled.body`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #454545;
  `;

  const InfoSection = styled.div`
    display:flex;
    border: 1px solid #fff;
    width: 60%;
    margin :10%;
  `;

  const ImageSection = styled.div`
  display:inline-block;
  border : 1px solid #fff;
  `
  const ProfileImage = styled.img`
    width:300px;
    height:100%;
  `
  const ProfileInfoSection = styled.div`
    width:auto;
    
    
    
  `

  const ProfileInfo=styled.div`
    display:flex;
    margin-top : 25px;
    margin-left : 30px;
    color: white;
    font-size : 25px;
    
    
  `

  return (
    <Body>
      <InfoSection>
        <ImageSection>
            <ProfileImage src={profileImage}/>
        </ImageSection>

        <ProfileInfoSection>
            <ProfileInfo>홍성현</ProfileInfo>
            <ProfileInfo>주전공: 가상현실전공 / 복수전공: 소프트웨어전공</ProfileInfo>
            <ProfileInfo>MBTI : ISTJ</ProfileInfo>
            <ProfileInfo>제일 좋았던 경험 : 학교 밴드부 입부 후 첫 공연을 끝냈을 때</ProfileInfo>
            <ProfileInfo>요즘 취미와 관심사 : 일렉기타, 게임</ProfileInfo>
            <ProfileInfo>앞으로의 계획 : 일렉기타, 게임</ProfileInfo>
        </ProfileInfoSection>
      </InfoSection>
    </Body>
  );
}
