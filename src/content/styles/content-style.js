import { ReactComponent as FileIcon } from 'shared/assets/file-icon.svg'
import styled from 'styled-components/macro'

export const ContentWrapper = styled.main`
  padding: 1.5em 1.875em;
`

export const Header = styled.div`
  display: flex;
  place-items: center;
  gap: .9em;
`

export const InputText = styled.input`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.black};
  border: none;
  padding: 0;
  font-weight: 500;
  letter-spacing: -.02em;
  outline: none;
`
export const FileIconPrimary = styled(FileIcon)`
  path {
    stroke: ${({ theme }) => theme.colors.primary};
    stroke-opacity: unset;
    stroke-width: 1.5px;
  }
`

export const Container = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 2.5em 0 1em 0;
  height: 99%;
`

export const TextArea = styled.textarea`
  font-size: 1.125rem;
  min-height: 100%;
  font-family: 'Inconsolata', sans-serif;
  color: rgba(30, 41, 59, .86);
  border: none;
  padding: 0;
  font-weight: 500;
  line-height: 19px;
  resize: none;
  outline: none;
`

export const Output = styled.output`
  padding: 0 2em 0;
  color: ${({ theme }) => theme.colors.black};
  border-left: 2px solid rgba(30, 41, 59, .12);

  h2 {
    font-size: 2rem;
    margin: 0;
    font-weight: 700;
  }

  p {
    color: rgba(30, 41, 59, .7);
    margin: .5rem 0;
  }

  *:first-child {
    margin-top: 0;
  }
`
