import { useContext, useEffect, useState } from 'react'
import {
  Cart,
  Counter,
  HeaderActions,
  HeaderContainer,
  Location,
} from './style'

import logoCoffeeDelivery from '../../assets/Logo.png'
import { MapPin, ShoppingCart } from 'phosphor-react'
import { CoffeeContext } from '../../context/CoffeeContext'
import { NavLink } from 'react-router-dom'

export function Header() {
  const { shoppingCartItems } = useContext(CoffeeContext)

  const [totalOfCoffees, setTotalOfCoffees] = useState(0)

  useEffect(() => {
    const qtdCoffee = shoppingCartItems.map((coffee) => {
      return coffee.qtd
    })

    const totalCoffees = qtdCoffee.reduce((accumulator, value) => {
      return accumulator + value
    }, 0)

    setTotalOfCoffees(totalCoffees)
  }, [shoppingCartItems])

  return (
    <HeaderContainer>
      <NavLink to={'/'}>
        <img src={logoCoffeeDelivery} alt="" />
      </NavLink>

      <HeaderActions>
        <Location>
          <MapPin width={22} height={22} weight="fill" />

          <p>Barbacena - MG</p>
        </Location>

        <NavLink to={'/checkout'}>
          <Cart disabled={shoppingCartItems.length === 0}>
            <ShoppingCart width={22} height={22} weight="fill" />
            {shoppingCartItems.length > 0 && (
              <Counter>{totalOfCoffees}</Counter>
            )}
          </Cart>
        </NavLink>
      </HeaderActions>
    </HeaderContainer>
  )
}
