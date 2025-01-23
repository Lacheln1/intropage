import React from "react";
import rd250Img from "../images/rd250.jpg";
import pac612Img from "../images/pac612.jpg";
import planeImg from "../images/20210923_192040.jpg";
import skyImg from "../images/20230712_051148.jpg";
import guitarImg from "../images/20240125_140525.jpg";
import trainImg from "../images/20240125_141446.jpg";
import valImg from "../images/20240825_210636.jpg";
import jpImg from "../images/20241130_145105.jpg";
import playImg from "../images/playList.png";
import styled from "styled-components";
import { Tooltip } from "react-tooltip";
export default function EtcPage() {
  const Body = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    background-color: #454545;
  `;

  const InfoSection = styled.div`
    display: flex;
    border: 1px solid #fff;
    padding: 20px;
    justify-content: space-around;
    width: 60%;
    margin: 3%;
  `;

  const ImageSection = styled.div`
    width :100%;
    border: 1px solid #fff;
  `;
  const ProfileImage = styled.img`
  &:hover{
    transform:scale(1.1);
    transition:0.5s;
  }
    width: 100%;
  `;
  const ProfileInfoSection = styled.div`
    width: auto;
  `;

  const ProfileInfo = styled.div`
    display: flex;
    text-align: center;
    justify-content: center;
    color: white;
    font-size: 25px;
  `;

  const Trdesign = styled.tr`
    color: white;
    font-size: 25px;
  `;

  const TableDesign = styled.table`
    width : 100%;
    border-collapse: separate;
    border-spacing: 10px 10px;
  `;

  return (
    <Body>
      <InfoSection>
        <TableDesign>
          <Trdesign>사용중인 기타</Trdesign>

          <tr>
            <td>
              <ImageSection>
                <div
                  data-tooltip-id="pac612"
                  data-tooltip-content={"YAMAHA Pacifica PAC612VIIFM"}
                >
                  <ProfileImage src={pac612Img} />
                </div>
                <Tooltip id="pac612" place="right" />
                <ProfileInfo>메인 기타</ProfileInfo>
              </ImageSection>
            </td>
            <td>
              <ImageSection>
                <div
                  data-tooltip-id="rd250"
                  data-tooltip-content={"Spear RD-250"}
                >
                  <ProfileImage src={rd250Img} />
                </div>
                <Tooltip id="rd250" place="right" />
                <ProfileInfo>서브 기타</ProfileInfo>
              </ImageSection>
            </td>
            <td>
            <ImageSection>
                <div
                  data-tooltip-id="playList"
                  data-tooltip-html={"공연 곡 <br/> YB - 박하사탕2 <br/> Maroon 5 - Lucky Strike <br/> QWER - 별의 하모니 <br/> SPYAIR - Some Like It Hot <br/> Ado - 역광 <br/> Radiohead - Creep <br/><br/> 그 외 가능한 곡<br/> 데이식스 - 한 페이지가 될 수 있게<br/>중식이 밴드 - 나는 반딧불 <br/> WOODZ - Drowning <br/> Linkin Park - Heavy Is The Crown <br/> All Time Low - Time Bomb<br/> The Offspring - You're Gonna Go Far, Kid <br/>아이묭 - 마리골드 <br/> 아이묭 - 사랑을 전하고 싶다던가 <br/> 요루시카 - 그저 네게 맑아라 <br/> 요루시카 - 개다 <br/> back number - 수평선<br/>ASIAN KUNG-FU GENERATION - 구르는 바위, 너에게 아침이 내린다 <br/> 결속밴드 - 별자리가 된다면 <br/>등등..."}
                  
                >
                  <ProfileImage src={playImg} />
                </div>
                <Tooltip id="playList" place="bottom" effect="solid" />
                <ProfileInfo>연주 가능한 곡 목록</ProfileInfo>
              </ImageSection>
            </td>
          </tr>
          <Trdesign>여행 사진</Trdesign>
          <tr>
            <td>
              <ImageSection>
                <div
                  data-tooltip-id="plane"
                  data-tooltip-content={"2021.09.23 제주공항"}
                >
                  <ProfileImage src={planeImg} />
                </div>
                <Tooltip id="plane" place="right" />
              
              </ImageSection>
            </td>

            <td>
              <ImageSection>
                <div
                  data-tooltip-id="sky"
                  data-tooltip-content={"2023.07.12 강릉"}
                >
                  <ProfileImage src={skyImg} />
                </div>
                <Tooltip id="sky" place="right" />
                
              </ImageSection>
            </td>

            <td>
              <ImageSection>
                <div
                  data-tooltip-id="guitar"
                  data-tooltip-content={"2024.01.25 일본 이시바시 악기 오차노미즈 본점  "}
                >
                  <ProfileImage src={guitarImg} />
                </div>
                <Tooltip id="guitar" place="right" />
                
              </ImageSection>
            </td>
          </tr>

          <tr>
            <td>
              <ImageSection>
                <div
                  data-tooltip-id="train"
                  data-tooltip-html={"2024.09.23 오차노미즈역 <br/>  (스즈메의 문단속 배경)"}
                >
                  <ProfileImage src={trainImg} />
                </div>
                <Tooltip id="train" place="right" />
              
              </ImageSection>
            </td>

            <td>
              <ImageSection>
                <div
                  data-tooltip-id="val"
                  data-tooltip-html={"2024.08.25 인천 인스파이어 아레나 <br/> (2024 발로란트 챔피언스 서울 결승전)"}
                >
                  <ProfileImage src={valImg} />
                </div>
                <Tooltip id="val" place="right" />
                
              </ImageSection>
            </td>

            <td>
              <ImageSection>
                <div
                  data-tooltip-id="jpImg"
                  data-tooltip-content={"2024.11.30 일본 오다이바"}
                >
                  <ProfileImage src={jpImg} />
                </div>
                <Tooltip id="jpImg" place="right" />
              </ImageSection>
            </td>
          </tr>
        </TableDesign>
      </InfoSection>
    </Body>
  );
}
