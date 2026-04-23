import React from "react";
import styled from "styled-components";

const StyledCard01 = styled.div`
    width: 360px;
    height: 480px;
    left: 0px;
    top: 0px;
    position: absolute;
    background: #E5F6F7;
    border-radius: 16px;
`;

const StyledPlaceholder01 = styled.iframe`
    width: 312px;
    height: 180px;
    left: 24px;
    top: 29px;
    position: absolute;
    background: #394445;
    border-radius: 12px;
    border: none;
`;

const StyledFacecard01span = styled.span`
    color: #8CA5A6;
    font-size: 24px;
    font-family: Inter;
    font-weight: 700;
    word-wrap: break-word;
    text-transform: uppercase;
`;

const StyledFACECARD01 = styled.p`
    left: 50%;
    top: 260px;
    position: absolute;
    transform: translateX(-50%);
    margin: 0;
    text-align: center;
    width: 100%;
`;

const StyledWorksby01span = styled.span`
    color: #8CA5A6;
    font-size: 24px;
    font-family: Inter;
    font-weight: 400;
    word-wrap: break-word;
`;

const StyledWORKSBY01 = styled.p`
    left: 116px;
    top: 302px;
    position: absolute;
`;

const StyledRectangle301 = styled.div`
    width: 120px;
    height: 45px;
    left: 0px;
    top: 0px;
    position: absolute;
    background: #B4D5D6;
    border-radius: 22.5px;
`;

const StyledStart01span = styled.span`
    color: #0E1313;
    font-size: 24px;
    font-family: Inter;
    font-weight: 400;
    word-wrap: break-word;
`;

const StyledSTART01 = styled.p`
    left: 50%;
    top: 7.16px;
    position: absolute;
    transform: translateX(-50%);
`;

const StyledBUTTONHover01 = styled.button`
    width: 120px;
    height: 45px;
    left: 50%;
    top: 395px;
    position: absolute;
    transform: translateX(-50%);
    background: transparent;
    border: none;
    cursor: pointer;
`;

const StyledComponent101 = styled.div`
    width: 360px;
    height: 480px;
    position: relative;
`;

export const Component1 = () => {
    return (
        <StyledComponent101>
            <StyledCard01 />
            <StyledPlaceholder01
                src="https://my.spline.design/untitled-MQHUT4KvpfZ4qDVn0iyXOeFE/"
                frameBorder="0"
            />
            <StyledFACECARD01><StyledFacecard01span>FIND YOUR GALAXY!</StyledFacecard01span></StyledFACECARD01>
            <StyledBUTTONHover01>
                <StyledRectangle301 />
                <StyledSTART01><StyledStart01span>START</StyledStart01span></StyledSTART01>
            </StyledBUTTONHover01>
        </StyledComponent101>
    );
};
