import styled from 'styled-components'

export const PaymentContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 40px;
  gap: 2rem;
  border-radius: 6px;
  margin-top: 0.75rem;
  margin-bottom: 15rem;
  background-color: ${(props) => props.theme['base-card']};

  @media (max-width: 1200px) {
    margin-bottom: 0rem;
  }
`

export const Header = styled.div`
  display: flex;
  gap: 0.5rem;
`

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.125rem;
`

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const SubTitle = styled.p`
  font-size: 0.875rem;
  font-weight: 400;
  line-height: 1.375rem;
  color: ${(props) => props.theme['base-text']};
`

export const PaymentType = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  button {
    outline: 0 !important;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3.18rem;
    border: 0;
    border-radius: 6px;
    padding: 16px;
    gap: 0.75rem;
    font-size: 0.75rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-button']};
  }

  button:hover {
    color: ${(props) => props.theme['base-subtitle']};
    background-color: ${(props) => props.theme['base-hover']};
  }

  button:focus {
    box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
  }
`
