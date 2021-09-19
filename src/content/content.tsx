import { useState, useEffect, ChangeEvent } from 'react'
import marked from 'marked'
import { ComponentType } from 'files'

import 'highlight.js/styles/atom-one-dark.css'
import * as S from './styles/content-style'

import('highlight.js').then(hljs => {
  const highlight = hljs.default

  marked.setOptions({
    highlight: (code, language) => {
      if (language && highlight.getLanguage(language)) {
        return highlight.highlight(code, { language }).value
      }

      return highlight.highlightAuto(code).value
    },
  })
})

export function Content ({ files }: ComponentType) {
  const [name, setName] = useState('')
  const [content, setContent] = useState('')

  useEffect(() => {
    files.forEach((file) => {
      if (file.active) {
        setName(file.name)
        setContent(file.content)
      }
    })
  }, [files])

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const createContent = () => {
    return { __html: marked(content) }
  }

  const handleNameChange = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }

  return (
    <S.ContentWrapper>
      <S.Header>
        <S.FileIconPrimary />

        <S.InputText value={name} onChange={handleNameChange} />
      </S.Header>
      <S.Container>
        <S.TextArea value={content} onChange={handleContentChange} placeholder='Your markdown goes here...' />

        <S.Output dangerouslySetInnerHTML={createContent()} />
      </S.Container>
    </S.ContentWrapper>
  )
}
