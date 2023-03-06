import { useContext } from 'react'
import { CurrencyDollar, MapPin, Timer } from 'phosphor-react'
import { CoffeeContext } from '../../../../context/CoffeeContext'
import { defaultTheme } from '../../../../styles/themes/default'
import {
  Descriptions,
  Icon,
  OrderInfoContainer,
  OrderItemContainer,
} from './style'

export function OrderInfo() {
  const { infoDelivery, paymentType } = useContext(CoffeeContext)

  return (
    <OrderInfoContainer>
      <OrderItemContainer>
        <Icon iconBackgroundColor="purple">
          <MapPin
            weight="fill"
            width={16}
            height={16}
            color={defaultTheme.white}
          />
        </Icon>
        <Descriptions>
          <p>
            Entrega em{' '}
            <strong>
              {infoDelivery.address}, {infoDelivery.number}
            </strong>
          </p>
          <p>
            {infoDelivery.neighborhood} - {infoDelivery.city}, {infoDelivery.uf}
          </p>
        </Descriptions>
      </OrderItemContainer>

      <OrderItemContainer>
        <Icon iconBackgroundColor="yellow">
          <Timer
            weight="fill"
            width={16}
            height={16}
            color={defaultTheme.white}
          />
        </Icon>
        <Descriptions>
          <p>Previsão de entrega</p>
          <strong>20 min - 30 min</strong>
        </Descriptions>
      </OrderItemContainer>

      <OrderItemContainer>
        <Icon iconBackgroundColor="yellow-dark">
          <CurrencyDollar
            weight="fill"
            width={16}
            height={16}
            color={defaultTheme.white}
          />
        </Icon>
        <Descriptions>
          <p>Pagamento na entrega</p>
          <strong>{paymentType}</strong>
        </Descriptions>
      </OrderItemContainer>
    </OrderInfoContainer>
  )
}
