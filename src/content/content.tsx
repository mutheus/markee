import { useState, ChangeEvent } from 'react'
import marked from 'marked'
import * as S from './styles/content-style'

export function Content () {
  const [output, setOutput] = useState('')

  const handleTextChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setOutput(e.target.value)
  }

  const createOutput = () => {
    return { __html: marked(output) }
  }

  return (
    <S.ContentWrapper>
      <S.Header>
        <S.FileIconPrimary />

        <S.InputText defaultValue='Contribut' />
      </S.Header>
      <S.Container>
        <S.TextArea value={output} onChange={handleTextChange} placeholder='Your markdown goes here...' />

        <S.Output dangerouslySetInnerHTML={createOutput()} />
      </S.Container>
    </S.ContentWrapper>
  )
}
