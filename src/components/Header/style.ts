import styled from 'styled-components'

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 32px 160px;
`

export const HeaderActions = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const Location = styled.div`
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 6px;
  gap: 0.25rem;
  height: 2.37rem;
  font-size: 0.875rem;
  line-height: 1.13rem;
  font-weight: 400;
  color: ${(props) => props.theme.purple};
  background-color: ${(props) => props.theme['purple-light']};

  p {
    color: ${(props) => props.theme['purple-dark']};
  }
`

export const Cart = styled.button`
  display: flex;
  border: 0;
  cursor: pointer;
  padding: 8px;
  border-radius: 6px;
  color: ${(props) => props.theme['yellow-dark']};
  background-color: ${(props) => props.theme['yellow-light']};

  &:disabled {
    cursor: not-allowed;
  }
`

export const Counter = styled.div`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.theme['yellow-dark']};
  border-radius: 9999px;
  width: 1.25rem;
  height: 1.25rem;
  margin-top: -1rem;
  margin-left: 1.2rem;
  color: ${(props) => props.theme.white};
  font-weight: 700;
  font-size: 0.75rem;
`
