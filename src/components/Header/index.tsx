import { Cart, HeaderActions, HeaderContainer, Location } from "./style";

import logoCoffeeDelivery from '../../assets/Logo.png'
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header() {

  return (
    <HeaderContainer>
      <img src={logoCoffeeDelivery} alt=""/>

      <HeaderActions>
        <Location>
          <MapPin width={22} height={22} weight="fill" />

          <p>Barbacena - MG</p>
        </Location>

        <Cart>
          <ShoppingCart width={22} height={22} weight="fill" />
        </Cart>
      </HeaderActions>
    </HeaderContainer>
  )
}