import { ReactComponent as PlusIcon } from './assets/plus-icon.svg'
import { ReactComponent as Logo } from 'shared/assets/logo.svg'
import { ReactComponent as FileIcon } from 'shared/assets/file-icon.svg'
import { ReactComponent as RemoveIcon } from './assets/remove-icon.svg'
import { ReactComponent as ToSaveIcon } from './assets/to-save-icon.svg'
import { ReactComponent as SavedIcon } from './assets/saved-icon.svg'
import { FilesProps } from 'app-types'

import * as S from './styles/sidebar-style'

export function Sidebar ({ files }: FilesProps) {
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

      <S.Button>
        <PlusIcon /> Adicionar arquivo
      </S.Button>

      <nav>
        <S.List>
          {files.map((file) => (
            <S.ListItem key={file.id} active={file.active}>
              <FileIcon />

              <S.ListLink href='/'>{file.name}</S.ListLink>

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
