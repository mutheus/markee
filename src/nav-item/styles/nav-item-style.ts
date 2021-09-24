import { ReactComponent as SavingIcon } from 'shared/assets/saving-icon.svg'
import styled, { css, keyframes } from 'styled-components'

type ListItemProps = {
  active: boolean
}

export const ListItem = styled.li<ListItemProps>`${({ active, theme }) => css`
  list-style-type: none;
  display: grid;
  grid-template-columns: max-content 1fr max-content;
  gap: 12px;
  place-items: center;
  height: 37px;
  padding: 0 .7em;
  border-radius: 6px;

  background-color: ${active && theme.colors.lightBlack};

  a {
    color: ${active ? theme.colors.white : 'rgba(255, 255, 255, .65)'};
  }

  svg path {
    stroke: ${active ? theme.colors.primary : theme.colors.white};
    stroke-opacity: ${active && 'unset'};
  }

  @media (min-width: 768px) {
    &:hover {
      background-color: ${theme.colors.lightBlack};

      ${RemoveButton} {
        visibility: initial;
      }
    }
  }

  *:last-child {
    margin-left: auto;
  }
`}`

export const ListLink = styled.a`
  text-decoration: none;
  justify-self: start;
  font-weight: 400;
  width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.colors.white}
  }
`

export const RemoveButton = styled.button`
  background-color: transparent;

  @media (min-width: 768px) {
    visibility: hidden;
  }

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
