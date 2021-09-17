import styled, { css } from 'styled-components/macro'
import { ReactComponent as PlusIcon } from './assets/plus-icon.svg'
import { ReactComponent as Logo } from './assets/logo.svg'

export function Sidebar () {
  return (
    <Wrapper>
      <AsideContainer>
        <LogoWrapper>
          <a href='/'>
            <Logo />
          </a>
        </LogoWrapper>

        <TitleWrapper>
          <hr />
          <Title>Arquivos</Title>
          <hr />
        </TitleWrapper>

        <Button>
          <PlusIcon /> Adicionar arquivo
        </Button>

        <nav>
          <ul>
            <li>
              <a href='/readme'>README.md</a>

              <button>x</button>
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
        </nav>
      </AsideContainer>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20.750em 1fr;
`

const AsideContainer = styled.aside`${({ theme }) => css`
  background-color: ${theme.colors.black};
  min-height: 100vh;
  padding: 2em;
  display: flex;
  flex-direction: column;
  color: ${theme.colors.white};
`}`

const LogoWrapper = styled.h1`
  display: flex;
  justify-content: center;
  margin: .813em 0 1.368em;

  a {
    line-height: 0;
  }
`

const TitleWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 6px;
  grid-template-columns: 13.5px auto 1fr;
  align-items: center;

  hr:first-child {
    width: 100%;
    border: 1px solid #1FC8E1;
    border-radius: 2px;
  }

  hr:last-child {
    width: 100%;
    border: 1px solid #1FC8E1;
    border-radius: 2px;
  }
`

const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
`

const Button = styled.button`${({ theme }) => css`
  height: 38.88px;
  background-color: ${theme.colors.primary};
  border: none;
  color: ${theme.colors.lightBlack};
  border-radius: .212em;
  font-size: 0.847em;
  margin: 1.357em 0;
  cursor: pointer;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .750em;
`}`
