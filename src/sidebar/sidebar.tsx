import { ReactComponent as PlusIcon } from './assets/plus-icon.svg'
import { ReactComponent as Logo } from 'shared/assets/logo.svg'
import { ReactComponent as FileIcon } from 'shared/assets/file-icon.svg'
import { ReactComponent as RemoveIcon } from './assets/remove-icon.svg'
import { ReactComponent as ToSaveIcon } from './assets/to-save-icon.svg'
import * as S from './styles/sidebar-style'

export function Sidebar () {
  return (
    <S.AsideContainer>
      <S.LogoWrapper>
        <S.ListLink href='/'>
          <Logo />
        </S.ListLink>
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
          <S.ListItem>
            <FileIcon />
            <S.ListLink href='/readme'>README.md</S.ListLink>
            <span />
          </S.ListItem>
          <S.ListItem>
            <FileIcon />
            <S.ListLink href='/contributing'>CONTRIBUTING.md</S.ListLink>

            <S.RemoveButton>
              <RemoveIcon />
            </S.RemoveButton>
          </S.ListItem>
          <S.ListItem>
            <FileIcon />
            <S.ListLink href='/license'>LICENSE.md</S.ListLink>

            <ToSaveIcon />
          </S.ListItem>
        </S.List>
      </nav>
    </S.AsideContainer>
  )
}
