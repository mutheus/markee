import { useState, useEffect, ChangeEvent } from 'react'
import marked from 'marked'
import { FileType, StaticType } from 'files'

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

type ContentProps = {
  file: FileType
}

export function Content ({ file, setFiles, inputRef }: ContentProps & StaticType) {
  const [name, setName] = useState(file.name)
  const [content, setContent] = useState(file.content)

  useEffect(() => {
    setName(file.name)
    setContent(file.content)
  }, [file])

  useEffect(() => {
    setFiles(files => files
      .map(file => {
        if (file.active) {
          return {
            ...file,
            name,
            content,
            status: 'editing',
          }
        }

        return file
      }))

    const savingId = setInterval(() => {
      setFiles(files => files.map(file => (file.active ? { ...file, status: 'saved' } : file)))
    }, 300)

    return () => clearInterval(savingId)
  }, [name, content, setFiles])

  useEffect(() => {
    const savedId = setTimeout(() => {
      setFiles(files => files.map(file => (file.active ? { ...file, status: 'saving' } : file)))
    }, 300)

    return () => clearTimeout(savedId)
  }, [name, content, setFiles])

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

        <S.InputText value={name} onChange={handleNameChange} ref={inputRef} />
      </S.Header>
      <S.Container>
        <S.TextArea value={content} onChange={handleContentChange} placeholder='Your markdown goes here...' />

        <S.Output dangerouslySetInnerHTML={createContent()} />
      </S.Container>
    </S.ContentWrapper>
  )
}
