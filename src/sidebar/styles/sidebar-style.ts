import styled, { css } from 'styled-components/macro'

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
  margin: .813em 0 1.6em;

  a {
    line-height: 0;
  }
`

export const TitleWrapper = styled.div`
  width: 100%;
  display: grid;
  gap: 6px;
  grid-template-columns: 13.5px auto 1fr;
  align-items: center;
`
export const HorizontalLine = styled.hr`
  width: 100%;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 2px;
`

export const Title = styled.h2`
  font-size: 1rem;
  font-weight: 500;
`

export const Button = styled.button`${({ theme }) => css`
  height: 38.88px;
  background-color: ${theme.colors.primary};
  border: none;
  color: ${theme.colors.lightBlack};
  border-radius: .212em;
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
  gap: 7px;
`

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  gap: 12px;
  place-items: center;
  height: 37px;
  padding: 0 1em;
  border-radius: 6px;

  &:hover {
    background-color: rgba(255, 255, 255, .05);
  }

  &:nth-child(3) {
    background-color: rgba(255, 255, 255, .05);
  }

  *:last-child {
    margin-left: auto;
  }
`

export const ListLink = styled.a`
  color: rgba(255, 255, 255, .65);
  text-decoration: none;
  text-transform: uppercase;
`

export const RemoveButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
`
