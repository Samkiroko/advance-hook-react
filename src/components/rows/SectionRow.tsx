import { timeStamp } from "console"
import React from "react"
import styled from "styled-components"

const SectionRow = () => {
  return (
    <Wrapper>
      <Index>1</Index>
      <TextWrapper>
        <Title>Introduction to visual Design</Title>
        <ProgressBar />
        <Description>
          Learn the foundation of UI design and start design an app with me
        </Description>
      </TextWrapper>
      <Timestamp>12min</Timestamp>
    </Wrapper>
  )
}

export default SectionRow

const Wrapper = styled.div`
  position: relative;
  display: grid;
  max-width: 370px;
  padding: 10px;
  grid-template-columns: 36px auto;
  gap: 10px;
  background-blend-mode: overlay;
  mix-blend-mode: normal;
  border-radius: 10px;

  &,
  * {
    transition: 0.8s cubic-bezier(0.075, 0.82, 0.165, 1);
  }

  :hover {
    background: rgba(68, 66, 178, 0.1);
    box-shadow: inset 0px 0px 0px 0.5px rgba(68, 66, 178, 0.2);
  }
`
const Index = styled.div`
  display: grid;
  width: 36px;
  height: 36px;
  background: rgba(68, 66, 179, 0.1);
  background-blend-mode: overlay;
  border-radius: 50%;
  place-items: center;

  font-style: normal;
  font-size: 20px;
  line-height: 24px;
  color: #000000;
`
const TextWrapper = styled.div`
  display: grid;
  gap: 8px;
  text-align: left;
`
const Title = styled.p`
  max-width: 180px;
  font-style: normal;
  font-weight: 500;
  font-size: 15px;
  line-height: 18px;
  color: #3913b8;
`
const ProgressBar = styled.p`
  width: 170px;
  height: 5px;
  background: rgba(68, 66, 179, 0.1);
  background-blend-mode: overlay;
  border-radius: 8px;
`
const Description = styled.p`
  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #192150;
`
const Timestamp = styled.div`
  position: absolute;
  display: grid;
  top: 10px;
  right: 10px;
  height: 20px;
  padding: 2px 6px;
  background-blend-mode: overlay;
  background: rgba(68, 66, 179, 0.1);
  border-radius: 5px;
  place-items: center;

  font-style: normal;
  font-weight: normal;
  font-size: 13px;
  line-height: 16px;
  color: #000000;
`