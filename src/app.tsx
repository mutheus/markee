import { useState, useRef } from 'react'
import styled from 'styled-components/macro'
import { Sidebar } from 'sidebar'
import { Content } from 'content'
import { FileType } from 'files'

export function App () {
  const [files, setFiles] = useState<FileType[]>([
    {
      id: 'default',
      name: 'default.md',
      content: '',
      active: true,
      status: 'saved',
    },
  ])
  const inputRef = useRef<HTMLInputElement>(null)

  return (
    <Wrapper>
      <Sidebar
        files={files}
        setFiles={setFiles}
        inputRef={inputRef}
      />

      <Content
        file={files.find(file => file.active === true)!}
        setFiles={setFiles}
        inputRef={inputRef}
      />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20.750em 1fr;
`
