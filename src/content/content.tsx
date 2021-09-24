import { ChangeEvent, RefObject } from 'react'
import { ReactComponent as HamburgerIcon } from './assets/hamburger-icon.svg'
import { ReactComponent as PlusIcon } from 'shared/assets/plus-icon.svg'
import { ReactComponent as PreViewIcon } from './assets/preview-icon.svg'
import { ReactComponent as EditIcon } from './assets/edit-icon.svg'
import { ReactComponent as ToSaveIcon } from 'shared/assets/to-save-icon.svg'
import { ReactComponent as SavedIcon } from 'shared/assets/saved-icon.svg'
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
          <div>
            <S.FileIconPrimary />
          </div>

          <S.InputText
            value={file.name}
            onChange={onNameChange}
            ref={inputRef}
          />

          {isEditing && (
            <S.StatusWrapper>
              {file.active && file.status === 'editing'
                ? (
                  <ToSaveIcon />
                  )
                : file.active && file.status === 'saving'
                  ? (
                    <S.SavingSpinner />
                    )
                  : file.active && file.status === 'saved'
                    ? (
                      <SavedIcon />
                      )
                    : (
                        ''
                      )}
            </S.StatusWrapper>
          )}
        </S.FileWrapper>

        <S.EditPreviewBtn
          onClick={showOutput}
        >
          {isEditing ? <PreViewIcon /> : <EditIcon />}
          {isEditing ? 'Preview' : 'Edit'}
        </S.EditPreviewBtn>
      </S.Header>
      <S.Container>
        <S.TextArea isEditing={isEditing} value={file.content} onChange={onContentChange} placeholder='Your markdown goes here...' />

        <S.Output isEditing={isEditing} dangerouslySetInnerHTML={createContent()} />

        <S.AddButton onClick={onAddFile}>
          <PlusIcon />
        </S.AddButton>
      </S.Container>
    </S.ContentWrapper>
  )
}
