import { ReactComponent as FileIcon } from 'shared/assets/file-icon.svg'
import styled from 'styled-components/macro'

export const ContentWrapper = styled.main`
  position: relative;
  grid-column: 1 / 4;

  @media (min-width: 600px) {
    grid-column: 2 / 4;
  }

  padding: 1.5em 1.875em;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 1em;
`

export const HamburgerBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  place-items: center;

  @media (min-width: 600px) {
    display: none;
  }
`

export const FileWrapper = styled.div`
  display: flex;
  place-items: center;
  gap: .9em;
`

export const Preview = styled.button`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  padding: .3em .5em;
  cursor: pointer;

  @media (min-width: 600px) {
    display: none;
  }
`

export const InputText = styled.input`
  font-size: 1.125rem;
  color: ${({ theme }) => theme.colors.black};
  border: none;
  padding: 0;
  font-weight: 500;
  letter-spacing: -.02em;
  outline: none;
  width: 100%;
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

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

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

export const AddButton = styled.button`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 47px;
  font-size: 2.4rem;
  border-radius: 50%;
  cursor: pointer;
  right: 2rem;
  bottom: 2rem;
  aspect-ratio: 1/1;
  border: none;
`

export const Output = styled.output`
  color: ${({ theme }) => theme.colors.black};

  @media (min-width: 600px) {
    border-left: 2px solid rgba(30, 41, 59, .12);
    padding: 0 2em 0;
  }

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
