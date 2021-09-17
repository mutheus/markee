import { ReactComponent as PlusIcon } from './assets/plus-icon.svg'
import { ReactComponent as Logo } from './assets/logo.svg'
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
              <a href='/readme'>README.md</a>
            </li>
            <li>
              <a href='/contributing'>CONTRIBUTING.md</a>

              <button>x</button>
            </li>
            <li>
              <a href='/license'>LICENSE.md</a>

              <button>x</button>
            </li>
          </ul>
        </S.Nav>
      </S.AsideContainer>
    </S.Wrapper>
  )
}
