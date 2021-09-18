import { ReactComponent as PlusIcon } from './assets/plus-icon.svg'
import { ReactComponent as Logo } from 'shared/assets/logo.svg'
import { ReactComponent as FileIcon } from 'shared/assets/file-icon.svg'
import { ReactComponent as RemoveIcon } from './assets/remove-icon.svg'
import { ReactComponent as ToSaveIcon } from './assets/to-save-icon.svg'
import { ReactComponent as SavedIcon } from './assets/saved-icon.svg'
import { ReactComponent as SavingIcon } from './assets/saving-icon.svg'
import * as S from './styles/sidebar-style'

const data = [
  {
    id: 1,
    name: 'README.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: 2,
    name: 'CONTRIBUTING.md',
    content: '',
    active: false,
    status: 'saved',
  },
  {
    id: 3,
    name: 'LICENSE.md',
    content: '',
    active: false,
    status: 'saving',
  },
  {
    id: 4,
    name: 'Links.md',
    content: '',
    active: true,
    status: 'saved',
  },
  {
    id: 5,
    name: 'roadmap.md',
    content: '',
    active: false,
    status: 'editing',
  },
]

export function Sidebar () {
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
          {data.map((file) => (
            <S.ListItem key={file.id} active={file.active}>
              <FileIcon />
              <S.ListLink href='/'>{file.name}</S.ListLink>

              {file.active && file.status === 'editing'
                ? (
                  <ToSaveIcon />
                  )
                : file.active && file.status === 'saving'
                  ? (
                    <SavingIcon />
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
