import { ReactComponent as FileIcon } from 'shared/assets/file-icon.svg'
import styled from 'styled-components/macro'

export function Content () {
  return (
    <ContentWrapper>
      <Header>
        <FileIconPrimary />
        <input />
      </Header>
      <Container>
        <TextArea />
        <Output>
          <h2>Bootcamp Brainn Co.</h2>
          <p>Lorem ipsum dolor sit amet simet</p>
        </Output>
      </Container>
    </ContentWrapper>
  )
}

const ContentWrapper = styled.main`
  padding: 1.5em 1.875em;
`

const Header = styled.div`
  display: flex;
  place-items: center;
  gap: .9em;

  input {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.colors.black};
    border: none;
    padding: 0;
    text-transform: uppercase;
    font-weight: 500;
    letter-spacing: -.02em;
    outline: none;
  }
`
const FileIconPrimary = styled(FileIcon)`
  path {
    stroke: ${({ theme }) => theme.colors.primary};
    stroke-opacity: unset;
    stroke-width: 1.5px;  
  }
`

const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2.5em 0 1em 0;
  height: 99%;
`

const TextArea = styled.textarea`
  font-size: 1.125rem;
  min-height: 100%;
  font-family: 'Inconsolata', sans-serif;
  color: rgba(30, 41, 59, 0.86);
  border: none;
  padding: 0;
  font-weight: 500;
  line-height: 19px;
  resize: none;
  outline: none;
`

const Output = styled.output`
  padding: 0 2em 0;
  color: ${({ theme }) => theme.colors.black};
  border-left: 2px solid rgba(30, 41, 59, 0.12);

  h2 {
    font-size: 2rem;
    margin: 0;
    font-weight: 700;
  }

  p {
    color: rgba(30, 41, 59, 0.7);
    margin: .5rem 0;
  }

  *:first-child {
    margin-top: 0;
  }
`
