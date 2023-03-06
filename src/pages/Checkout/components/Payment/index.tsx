import { CurrencyDollar, CreditCard, Bank, Money } from 'phosphor-react'
import { useContext } from 'react'
import { CoffeeContext } from '../../../../context/CoffeeContext'
import { defaultTheme } from '../../../../styles/themes/default'
import {
  Header,
  PaymentContainer,
  PaymentType,
  SubTitle,
  Title,
  TitleContainer,
} from './style'

export function Payment() {
  const { setPayment } = useContext(CoffeeContext)

  return (
    <PaymentContainer>
      <Header>
        <CurrencyDollar width={22} height={22} color={defaultTheme.purple} />
        <TitleContainer>
          <Title>Pagamento</Title>
          <SubTitle>
            O pagamento é feito na entrega. Escolha a forma que deseja pagar
          </SubTitle>
        </TitleContainer>
      </Header>

      <PaymentType>
        <button
          onClick={() => {
            setPayment('Cartão de Crédito')
          }}
        >
          <CreditCard width={16} height={16} color={defaultTheme.purple} />
          CARTÃO DE CRÉDITO
        </button>
        <button
          onClick={() => {
            setPayment('Cartão de Débito')
          }}
        >
          <Bank width={16} height={16} color={defaultTheme.purple} />
          CARTÃO DE DÉBITO
        </button>
        <button
          onClick={() => {
            setPayment('Dinheiro')
          }}
        >
          <Money width={16} height={16} color={defaultTheme.purple} />
          DINHEIRO
        </button>
      </PaymentType>
    </PaymentContainer>
  )
}
