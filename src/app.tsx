import { useState } from 'react'
import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { FileType } from 'files'

export function App () {
  const [files, setFiles] = useState<FileType[]>([])

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
