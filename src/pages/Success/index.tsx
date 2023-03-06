import successDelivery from '../../assets/successDelivery.png'
import { OrderInfo } from './components/OrderInfo'
import { ConfirmedOrder, SuccessContainer } from './style'

export function Success() {
  return (
    <SuccessContainer>
      <ConfirmedOrder>
        <p className="title">Uhu! Pedido Confirmado</p>
        <h4>Agora é só aguardar que logo o café chegará até você</h4>
        <OrderInfo />
      </ConfirmedOrder>

      <img src={successDelivery} alt="Sucesso Delivery" />
    </SuccessContainer>
  )
}
