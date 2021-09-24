import styled, { css } from 'styled-components/macro'

type OverlayProps = {
  isMenuOpen: boolean
}

export const Overlay = styled.div<OverlayProps>`${({ isMenuOpen }) => css`
  min-height: 100vh;
  width: 100%;
  background-color: rgba(0, 0, 0, .1);
  position: absolute;
  display: ${isMenuOpen ? 'flex' : 'none'};
`}`

export const AsideContainer = styled.aside`${({ theme }) => css`
  background-color: ${theme.colors.black};
  min-height: 100vh;
  padding: 2em;

  display: flex;
  flex-direction: column;
  color: ${theme.colors.white};
  width: 80%;
`}`

export const LogoWrapper = styled.h1`
  display: flex;
  justify-content: center;
  margin: .4em 0 .4em;

  @media (min-width: 600px) {
    margin: .4em 0 1.4em;
  }

  a {
    line-height: 0;

    @media (max-width: 600px) {
      svg {
        width: 4em;
      }
    }
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

export const AddButton = styled.button`${({ theme }) => css`
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
  display: none;
  align-items: center;
  justify-content: center;
  gap: .750em;

  @media (min-width: 600px) {
    display: flex;
  }

  &:hover {
    opacity: .9;
  }
`}`

export const List = styled.ul`
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  font-size: .96rem;
  gap: 8px;
`
