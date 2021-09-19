import { useState } from 'react'
import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

export function App () {
  const [files] = useState([
    {
      id: 1,
      name: 'Sem título',
      content: '',
      active: true,
      status: 'saved',
    },
  ])

  return (
    <Wrapper>
      <Sidebar files={files} />

      <Content files={files} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20.750em 1fr;
`
