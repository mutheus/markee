import { ChangeEvent, RefObject } from 'react'
import { ReactComponent as HamburgerIcon } from './assets/hamburger-icon.svg'
import { ReactComponent as PlusIcon } from './assets/plus-icon.svg'
import marked from 'marked'
import { FileType } from 'files'

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
  file?: FileType
  inputRef: RefObject<HTMLInputElement>
  onNameChange: (e: ChangeEvent<HTMLInputElement>) => void
  onContentChange: (e: ChangeEvent<HTMLTextAreaElement>) => void
  toggleMenu: () => void
  showOutput: () => void
  onAddFile: () => void
  isEditing: boolean
}

export function Content ({
  file,
  inputRef,
  onNameChange,
  onContentChange,
  toggleMenu,
  showOutput,
  isEditing,
  onAddFile,
}: ContentProps) {
  if (!file) return null

  const createContent = () => {
    return { __html: marked(file.content) }
  }

  return (
    <S.ContentWrapper>
      <S.Header>
        <S.HamburgerBtn
          onClick={toggleMenu}
        >
          <HamburgerIcon />
        </S.HamburgerBtn>

        <S.FileWrapper>
          <S.FileIconPrimary />

          <S.InputText
            value={file.name}
            onChange={onNameChange}
            ref={inputRef}
          />
        </S.FileWrapper>

        <S.Preview
          onClick={showOutput}
        >
          {isEditing ? 'Preview' : 'Edit'}
        </S.Preview>
      </S.Header>
      <S.Container>
        {isEditing
          ? (
            <>
              <S.TextArea value={file.content} onChange={onContentChange} placeholder='Your markdown goes here...' />
            </>
            )
          : (
            <>
              <S.Output dangerouslySetInnerHTML={createContent()} />
              <S.AddButton onClick={onAddFile}>
                <PlusIcon />
              </S.AddButton>
            </>
            )}
      </S.Container>
    </S.ContentWrapper>
  )
}
