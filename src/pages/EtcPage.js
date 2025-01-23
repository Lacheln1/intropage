import React from "react";
import rd250Img from "../images/rd250.jpg";
import pac612Img from "../images/pac612.jpg";
import styled from "styled-components";
import { Tooltip } from "react-tooltip";
export default function EtcPage() {
  const Body = styled.body`
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
    justify-content: space-between;
    width: 60%;
    margin: 10%;
  `;

  const ImageSection = styled.div`
    border: 1px solid #fff;
  `;
  const ProfileImage = styled.img`
    width: 300px;
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

            <td></td>
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
          </tr>
          <Trdesign>여행 사진</Trdesign>
          <tr>
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
                  data-tooltip-id="rd250"
                  data-tooltip-content={"Spear RD-250"}
                >
                  <ProfileImage src={rd250Img} />
                </div>
                <Tooltip id="rd250" place="right" />
                <ProfileInfo>서브 기타</ProfileInfo>
              </ImageSection>
            </td>
          </tr>
        </TableDesign>
      </InfoSection>
    </Body>
  );
}
