import styled from 'styled-components/macro'

export function App () {
  return (
    <Wrapper>
      <AsideContainer>
        <Logo>
          <a href='/'>
            <img src='/logo.svg' alt='Markee logo' />
          </a>
        </Logo>

        <TitleWrapper>
          <hr />
          <Title>Arquivos</Title>
          <hr />
        </TitleWrapper>

        <Button>Adicionar arquivo</Button>

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
      <main />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 20.750em 1fr;
`

const AsideContainer = styled.aside`
  background-color: ${({ theme }) => theme.colors.black};
  height: 100vh;
  padding: 2em;
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.white};
`

const Logo = styled.h1`
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

const Button = styled.button`
  height: 38.88px;
`
