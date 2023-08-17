import React from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";

function S_Cards({ header, l1, w1, l2, w2, l3, w3, l4, w4 }) {
  const { ref: myRef, inView } = useInView();

  if (inView === true) {
    var bar = document.querySelector(".s-card");
    bar.style.setProperty("--animateSpan", "showText 0.5s 1s linear forwards");
    bar.style.setProperty("--animatePline", "animate 1s cubic-bezier(1, 0, 0.5, 1) forwards");
    bar.style.setProperty("--animatePlineSpan", "animate 1s 1s cubic-bezier(1, 0, 0.5, 1) forwards");
    bar.style.setProperty("--animatePlineSpanBA", "showText2 0.5s 1.5s linear forwards");
  }

  return (
    <SCards>
      <SBars ref={myRef}>
        <CardHead>{header}</CardHead>
        <Bar>
          <Info>
            <BarSpan>{l1}</BarSpan>
          </Info>
          <ProgressLine>
            <ProgressSpan style={{ width: w1 }}>
              <SpanSection>{w1}</SpanSection>
            </ProgressSpan>
          </ProgressLine>
        </Bar>
        <Bar>
          <Info>
            <BarSpan>{l2}</BarSpan>
          </Info>
          <ProgressLine>
            <ProgressSpan style={{ width: w2 }}>
              <SpanSection>{w2}</SpanSection>
            </ProgressSpan>
          </ProgressLine>
        </Bar>
        <Bar>
          <Info>
            <BarSpan>{l3}</BarSpan>
          </Info>
          <ProgressLine>
            <ProgressSpan style={{ width: w3 }}>
              <SpanSection>{w3}</SpanSection>
            </ProgressSpan>
          </ProgressLine>
        </Bar>
        <Bar>
          <Info>
            <BarSpan>{l4}</BarSpan>
          </Info>
          <ProgressLine>
            <ProgressSpan style={{ width: w4 }}>
              <SpanSection>{w4}</SpanSection>
            </ProgressSpan>
          </ProgressLine>
        </Bar>
      </SBars>
    </SCards>
  );
}

const SCards = styled.div`
  border-radius: 10px;
  background: linear-gradient(50deg, rgb(19 23 32), rgb(16 21 32));
  overflow: hidden;
  height: 318px;
  width: 332px;
  display: grid;
  place-items: center;
  cursor: default;

  /* &:before {
    content: "";
    position: absolute;
    width: 465px;
    height: 35px;
    top: -40px;
    right: 100px;
    background: linear-gradient(50deg, var(--dorange), var(--orange));
    transition: 1.9s;
    transform: rotate(-45deg);
  }

  &:hover::before {
    top: 335px;
    right: -260px;
  } */

  @media (max-width: 481px) {
    position: relative;
    &:before {
      top: -60px;
      right: 130px;
      width: 550px;
    }
  }
`;

const SBars = styled.div`
  height: 310px;
  width: 324px;
  border-radius: 10px;
  background: var(--dgray);
  z-index: 1;

  @media (max-width: 481px) {
    width: 98%;
  }

  @keyframes animate {
    100% {
      transform: scaleX(1);
    }
  }

  @keyframes showText {
    100% {
      opacity: 1;
    }
  }

  @keyframes showText2 {
    100% {
      opacity: 1;
    }
  }
`;

const CardHead = styled.p`
  text-align: center;
  font-size: 1.4rem;
  padding: 22px 0 12px;
`;

const Bar = styled.div`
  padding: 10px 25px;
`;

const Info = styled.div`
  padding-bottom: 5px;
`;

const BarSpan = styled.span`
  font-weight: 500;
  font-size: 17px;
  opacity: 0;
  animation: var(--animateSpan);
`;

const ProgressLine = styled.div`
  height: 10px;
  background: #f0f0f0;
  transform: scaleX(0);
  transform-origin: left;
  border-radius: 10px;
  animation: var(--animatePline);
`;

const ProgressSpan = styled.div`
  height: 100%;
  position: absolute;
  border-radius: 10px;
  transform: scaleX(0);
  transform-origin: left;
  background: #f5c32c;
  animation: var(--animatePlineSpan);
`;

const SpanSection = styled.section`
  position: absolute;
  top: -30px;
  right: 0;
  background: #000;
  padding: 2px 5px;
  font-size: 12px;
  border-radius: 4px;
  opacity: 0;
  animation: var(--animatePlineSpanBA);
  &:before {
    position: absolute;
    content: "";
    top: 20px;
    right: 0;
    border: 7px solid transparent;
    border-right-width: 0px;
    border-top-color: #000;
  }
`;

export default S_Cards;
