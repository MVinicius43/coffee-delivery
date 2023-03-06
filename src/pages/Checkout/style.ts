import styled from 'styled-components'

export const CheckoutContainer = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 2rem;
  padding: 0 10rem;

  @media (max-width: 1200px) {
    flex-direction: column;
  }
`

export const AddressAndPaymentContainer = styled.div`
  display: flex;
  flex-direction: column;

  small {
    margin-bottom: 0.93rem;
    margin-top: 2.5rem;
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Baloo 2';
  }
`

export const SelectedCoffeesContainer = styled.div`
  display: flex;
  flex-direction: column;

  small {
    margin-bottom: 0.93rem;
    margin-top: 2.5rem;
    font-size: 1.125rem;
    font-weight: 700;
    font-family: 'Baloo 2';
  }

  @media (max-width: 1200px) {
    margin-bottom: 15rem;
    small {
      margin-top: 0rem;
    }
  }
`
