import React from "react"
import styled from "styled-components"

const Circles = () => {
  return <Wrapper></Wrapper>
}

export default Circles

const Wrapper = styled.div`
  width: 420px;
  height: 420px;
`
const Circle = styled.div`
  position: absolute;
  width: 420px;
  height: 420px;
  background: linear-gradient(
    180deg,
    #9fe1ff 0%,
    rgba(195, 236, 255, 0.0853208) 50.94%,
    rgba(255, 255, 255, 0) 100%
  );
  border-radius: 210px;
`
