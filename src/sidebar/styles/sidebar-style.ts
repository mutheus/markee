import { ReactComponent as SavingIcon } from '../assets/saving-icon.svg'
import styled, { css, keyframes } from 'styled-components/macro'

export const AsideContainer = styled.aside`${({ theme }) => css`
  background-color: ${theme.colors.black};
  min-height: 100vh;
  padding: 2em;
  display: flex;
  flex-direction: column;
  color: ${theme.colors.white};
`}`

export const LogoWrapper = styled.h1`
  display: flex;
  justify-content: center;
  margin: .4em 0 1.4em;

  a {
    line-height: 0;
  }
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 6px;
  grid-template-columns: .783em auto 1fr;
  align-items: center;
`
export const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
`

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 400;
`

export const Button = styled.button`${({ theme }) => css`
  height: 2.5em;
  background-color: ${theme.colors.primary};
  border: none;
  color: ${theme.colors.lightBlack};
  border-radius: .212em;
  letter-spacing: -.02em;
  font-size: 0.847em;
  margin: 1em 0 2.125em;
  cursor: pointer;
  padding: 0 2em;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: .750em;
`}`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-size: .96rem;
  gap: 8px;
`

type ListItemProps = {
  active: boolean
}

export const ListItem = styled.li<ListItemProps>`${({ active, theme }) => css`
  list-style-type: none;
  display: flex;
  gap: 12px;
  place-items: center;
  height: 37px;
  padding: 0 .7em;
  border-radius: 6px;

  background-color: ${active ? 'rgba(255, 255, 255, .05)' : ''};

  a {
    color: ${active ? theme.colors.white : 'rgba(255, 255, 255, .65)'};
  }

  svg path {
    stroke: ${active ? theme.colors.primary : theme.colors.white};
    stroke-opacity: ${active && 'unset'};
  }

  &:hover {
    background-color: rgba(255, 255, 255, .05);
  }

  *:last-child {
    margin-left: auto;
  }
`}`

export const ListLink = styled.a`
  text-decoration: none;
  font-weight: 400;

  &:hover {
    color: ${({ theme }) => theme.colors.white}
  }
`

export const RemoveButton = styled.button`
  background-color: transparent;
  visibility: hidden;
  border: none;
  cursor: pointer;
  padding: 0;
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
