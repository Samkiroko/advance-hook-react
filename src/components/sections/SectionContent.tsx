import React from "react"
import styled from "styled-components"
import { renderHtmlAst } from "../../functions/renderHtmlAst"

const SectionContent = props => {
  const { htmlAst } = props
  return <Wrapper>{renderHtmlAst(htmlAst)}</Wrapper>
}

export default SectionContent

const Wrapper = styled.div``
