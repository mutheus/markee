import { ReactComponent as FileIcon } from 'shared/assets/file-icon.svg'
import { ReactComponent as SavingIcon } from 'shared/assets/saving-icon.svg'
import styled, { keyframes, css } from 'styled-components/macro'

type ContentProps = {
  isEditing: boolean
}

export const ContentWrapper = styled.main`
  position: relative;
  grid-column: 1 / 4;
  display: grid;
  grid-template-rows: max-content 1fr;
  min-height: 100vh;

  @media (min-width: 768px) {
    grid-column: 2 / 4;
  }

  padding: 1.5em 1.875em;
`

export const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;

  @media (min-width: 768px) {
    grid-template-columns: 1fr;
  }

  gap: 1em;
`

export const HamburgerBtn = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  display: flex;
  place-items: center;

  @media (min-width: 768px) {
    display: none;
  }
`

export const FileWrapper = styled.div`
  display: flex;
  place-items: center;
  gap: .9em;
`

export const StatusWrapper = styled.div`${({ theme }) => css`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1px;

  @media (min-width: 768px) {
    display: none;
  }

  path {
    stroke: ${theme.colors.black};
  }

  circle {
    stroke: ${theme.colors.black};
    fill: ${theme.colors.black};
  }
`}`

export const EditPreviewBtn = styled.button`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.black};
  border-radius: 4px;
  padding: .3em .5em;
  cursor: pointer;
  display: flex;
  place-items: center;
  gap: 8px;

  @media (min-width: 768px) {
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

const spinning = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

export const SavingSpinner = styled(SavingIcon)`
  animation: 2000ms ${spinning} infinite linear;
`

export const Container = styled.div`
  display: grid;

  @media (min-width: 700px) {
    grid-template-columns: 1fr 1fr;
  }

  margin-top: 2em;
`

export const TextArea = styled.textarea<ContentProps>`
  font-size: 1.125rem;
  display: flex;
  height: 100%;
  font-family: 'Inconsolata', sans-serif;
  color: rgba(30, 41, 59, .86);
  border: none;
  padding: 0;
  font-weight: 500;
  line-height: 19px;
  resize: none;
  outline: none;
  display: ${({ isEditing }) => isEditing ? 'initial' : 'none'};

  @media (min-width: 768px) {
    display: initial;
    margin-right: 1em;
  }
`

export const AddButton = styled.button`
  position: absolute;
  background-color: ${({ theme }) => theme.colors.primary};
  height: 55px;
  border-radius: 50%;
  cursor: pointer;
  right: 2rem;
  bottom: 2rem;
  aspect-ratio: 1/1;
  position: fixed;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    width: 22px;
    height: 22px;
  }

  @media(min-width: 768px) {
    display: none
  }

`

export const Output = styled.output<ContentProps>`
  color: ${({ theme }) => theme.colors.black};
  display: ${({ isEditing }) => isEditing ? 'none' : 'initial'};

  @media (min-width: 768px) {
    border-left: 2px solid rgba(30, 41, 59, .12);
    padding-left: 1em;
    display: initial;
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

  * {
    word-wrap: anywhere;
  }

  pre {
    white-space: pre-wrap;
  }

  *:first-child {
    margin-top: 0;
  }
`
