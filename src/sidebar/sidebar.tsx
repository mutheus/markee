import { ReactComponent as PlusIcon } from './assets/plus-icon.svg'
import { ReactComponent as Logo } from './assets/logo.svg'
import { ReactComponent as FileIcon } from './assets/file-icon.svg'
import { ReactComponent as RemoveIcon } from './assets/remove-icon.svg'
import { ReactComponent as ToSaveIcon } from './assets/to-save-icon.svg'
import * as S from './styles/sidebar-style'

export function Sidebar () {
  return (
    <S.Wrapper>
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

        <S.Nav>
          <ul>
            <li>
              <FileIcon />
              <a href='/readme'>README.md</a>
              <span></span>
            </li>
            <li>
              <FileIcon />
              <a href='/contributing'>CONTRIBUTING.md</a>

              <button>
                <RemoveIcon />
              </button>
            </li>
            <li>
              <FileIcon />
              <a href='/license'>LICENSE.md</a>
              
              <ToSaveIcon />
            </li>
          </ul>
        </S.Nav>
      </S.AsideContainer>
    </S.Wrapper>
  )
}
