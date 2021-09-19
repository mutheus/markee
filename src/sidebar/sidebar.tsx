import { MouseEvent } from 'react'
import { ReactComponent as PlusIcon } from './assets/plus-icon.svg'
import { ReactComponent as Logo } from 'shared/assets/logo.svg'
import { ReactComponent as FileIcon } from 'shared/assets/file-icon.svg'
import { ReactComponent as RemoveIcon } from './assets/remove-icon.svg'
import { ReactComponent as ToSaveIcon } from './assets/to-save-icon.svg'
import { ReactComponent as SavedIcon } from './assets/saved-icon.svg'
import { ComponentType } from 'files'
import { v4 as uuidv4 } from 'uuid'

import * as S from './styles/sidebar-style'

export function Sidebar ({ files, setFiles, inputRef }: ComponentType) {
  const handleAddClick = () => {
    setFiles(files => files
      .map(file => ({
        ...file,
        active: false,
      }))
      .concat({
        id: uuidv4(),
        name: 'Sem título',
        content: '',
        active: true,
        status: 'saved',
      }))
  }

  const handleItemClick = (e: MouseEvent<HTMLLIElement>, id: string) => {
    e.preventDefault()
    inputRef.current?.focus()

    setFiles(files => files
      .map(file => {
        if (file.id === id) {
          return {
            ...file,
            active: true,
          }
        }

        return {
          ...file,
          active: false,
        }
      }))
  }

  return (
    <S.AsideContainer>
      <S.LogoWrapper>
        <a href='/'>
          <Logo />
        </a>
      </S.LogoWrapper>

      <S.TitleWrapper>
        <S.HorizontalLine />

        <S.Title>Arquivos</S.Title>

        <S.HorizontalLine />
      </S.TitleWrapper>

      <S.Button onClick={handleAddClick}>
        <PlusIcon /> Adicionar arquivo
      </S.Button>

      <nav>
        <S.List>
          {files.map((file) => (
            <S.ListItem key={file.id} active={file.active} onClick={(e) => handleItemClick(e, file.id)}>
              <FileIcon />

              <S.ListLink href={file.id}>{file.name}</S.ListLink>

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
                      <S.RemoveButton>
                        <RemoveIcon />
                      </S.RemoveButton>
                      )}
            </S.ListItem>
          ))}
        </S.List>
      </nav>
    </S.AsideContainer>
  )
}
