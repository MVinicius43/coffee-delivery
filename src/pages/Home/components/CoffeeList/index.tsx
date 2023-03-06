import { useState, useContext } from 'react'
import { Minus, Plus, ShoppingCartSimple } from 'phosphor-react'
import {
  CoffeeCard,
  CoffeeDescription,
  CoffeeListContainer,
  CoffeeTitle,
  CoffeeValues,
  CoffeeVarieties,
  IconButton,
  Price,
  Qtd,
  QtdIconContainer,
} from './style'
import expresso from '../../../../assets/Expresso.png'
import coffeeListData from '../../../../../CoffeeList.json'
import { CoffeeContext } from '../../../../context/CoffeeContext'
import { toast, ToastContainer } from 'react-toastify'

export function CoffeeList() {
  const [coffeeList, setcoffeeList] = useState([...coffeeListData])

  const { setShoppingCart } = useContext(CoffeeContext)

  const handleWithcoffeeList = (title: string, type: string) => {
    const alterCoffeeList = [...coffeeListData]
    alterCoffeeList.map((alterCoffee) => {
      if (alterCoffee.title === title && type === 'plus') {
        alterCoffee.qtd = alterCoffee.qtd + 1
      } else if (alterCoffee.title === title && type === 'minus') {
        alterCoffee.qtd = alterCoffee.qtd - 1

        if (alterCoffee.qtd < 0) {
          return (alterCoffee.qtd = 0)
        }
      }
      return alterCoffee
    })
    setcoffeeList(alterCoffeeList)
  }

  const handleWithAddItemOnShoppingCart = () => {
    coffeeList.map((coffee) => {
      if (coffee.qtd > 0) {
        setShoppingCart(coffee)
      }
      return null
    })
    toast.success(`Item adicionado ao seu carrinho!`)
  }

  return (
    <CoffeeListContainer>
      <p>Nossos Cafés</p>

      {coffeeList.map((coffee) => {
        return (
          <CoffeeCard key={coffee.title}>
            <img src={expresso} alt="" />

            <CoffeeVarieties>{coffee.varieties}</CoffeeVarieties>

            <CoffeeTitle>{coffee.title}</CoffeeTitle>

            <CoffeeDescription>{coffee.description}</CoffeeDescription>

            <CoffeeValues>
              <Price>
                <small>R$</small>
                <p>{coffee.price}</p>
              </Price>
              <QtdIconContainer>
                <Qtd>
                  <button
                    onClick={() => handleWithcoffeeList(coffee.title, 'minus')}
                  >
                    <Minus width={14} height={14} weight="bold" />
                  </button>
                  <p>{coffee.qtd}</p>
                  <button
                    onClick={() => handleWithcoffeeList(coffee.title, 'plus')}
                  >
                    <Plus width={14} height={14} weight="bold" />
                  </button>
                </Qtd>
                <IconButton
                  onClick={() => handleWithAddItemOnShoppingCart()}
                  disabled={coffee.qtd === 0}
                >
                  <ShoppingCartSimple width={22} height={22} weight="fill" />
                </IconButton>
              </QtdIconContainer>
            </CoffeeValues>
          </CoffeeCard>
        )
      })}
    </CoffeeListContainer>
  )
}
