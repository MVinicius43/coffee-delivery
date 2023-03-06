import { Address } from './components/Address'
import { Payment } from './components/Payment'
import { SelectedCoffees } from './components/SelectedCoffees'
import {
  AddressAndPaymentContainer,
  CheckoutContainer,
  SelectedCoffeesContainer,
} from './style'

export function Checkout() {
  return (
    <CheckoutContainer>
      <AddressAndPaymentContainer>
        <small>Complete seu pedido</small>
        <Address />
        <Payment />
      </AddressAndPaymentContainer>

      <SelectedCoffeesContainer>
        <small>Cafés Selecionados</small>
        <SelectedCoffees />
      </SelectedCoffeesContainer>
    </CheckoutContainer>
  )
}
