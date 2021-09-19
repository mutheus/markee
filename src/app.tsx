import { useState } from 'react'
import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'

export function App () {
  const [files, setFiles] = useState([
    {
      id: 1,
      name: 'README.md',
      content: '',
      active: false,
      status: 'saved',
    },
    {
      id: 2,
      name: 'Links.md',
      content: '',
      active: true,
      status: 'saved',
    },
    {
      id: 3,
      name: 'CONTRIBUTING',
      content: '',
      active: false,
      status: 'saved',
    },
  ])

  return (
    <Wrapper>
      <Sidebar files={files} setFiles={setFiles} />

      <Content files={files} setFiles={setFiles} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20.750em 1fr;
`
