import styled from 'styled-components'

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  background-color: ${(props) => props.theme['base-card']};
  width: 28rem;
  padding: 40px;
  border-radius: 6px 44px;
  gap: 1.5rem;
`

export const CoffeeSelected = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  img {
    width: 4rem;
    height: 4rem;
  }
`

export const Descriptions = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
  width: 10.68rem;
  gap: 0.5rem;
`

export const Title = styled.p`
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.3rem;
`

export const IncrementOrRemoveCoffeeContainer = styled.div`
  display: flex;
  width: 10.68rem;
  height: 2rem;
  gap: 0.5rem;

  .trash {
    outline: 0 !important;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 0;
    border-radius: 6px;
    padding: 0 8px;
    gap: 0.75rem;
    font-size: 0.75rem;
    font-weight: 400;
    color: ${(props) => props.theme['base-text']};
    background-color: ${(props) => props.theme['base-button']};

    button:hover {
      color: ${(props) => props.theme['base-subtitle']};
      background-color: ${(props) => props.theme['base-hover']};
    }

    button:focus {
      box-shadow: 0 0 0 1px ${(props) => props.theme.purple};
    }
  }
`

export const Qtd = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.theme['base-button']};
  border-radius: 6px;
  padding: 0.5rem;
  width: 4.5rem;
  height: 2rem;

  button {
    border: 0;
    cursor: pointer;
    background-color: transparent;
    color: ${(props) => props.theme.purple};

    :hover {
      color: ${(props) => props.theme['purple-dark']};
    }
  }

  p {
    font-weight: 400;
    font-size: 1rem;
    line-height: 1.3rem;
    color: ${(props) => props.theme['base-title']};
  }
`
export const TotalValue = styled.p`
  font-size: 0.97rem;
  font-weight: 700;
  line-height: 1.3rem;
  margin-left: 3.125rem;
  color: ${(props) => props.theme['base-text']};
`
export const Divider = styled.div`
  width: 100%;
  border: 1px solid ${(props) => props.theme['base-button']};
  /* margin: 1.5rem 0; */
`

export const TotalItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 0.75rem;
`

export const TotalItems = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-weight: 400;

  p:first-child {
    font-size: 0.875rem;
  }
`

export const Delivery = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  color: ${(props) => props.theme['base-text']};
  font-size: 1rem;
  font-weight: 400;

  p:first-child {
    font-size: 0.875rem;
  }
`

export const Total = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  font-size: 1rem;
  font-weight: 700;
  font-size: 1.25rem;
  color: ${(props) => props.theme['base-subtitle']};
`

export const ConfirmOrder = styled.button`
  width: 23rem;
  height: 2.875rem;
  padding: 12px, 8px, 12px, 8px;
  border-radius: 6px;
  gap: 0.25rem;
  background-color: ${(props) => props.theme.yellow};
  border: 0;
  font-size: 0.875rem;
  font-weight: 700;
  color: ${(props) => props.theme.white};
  cursor: pointer;

  &:not(:disabled):hover {
    background-color: ${(props) => props.theme['yellow-dark']};
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`
