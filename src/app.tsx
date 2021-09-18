import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

export function App () {
  return (
    <Wrapper>
      <Sidebar />
      <Content />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20.750em 1fr;
`
