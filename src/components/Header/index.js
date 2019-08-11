import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, LogoImage, CartButton, ItemCount } from './styles';

export default function Header() {
  return (
    <Container>
      <Logo>
        <LogoImage />
      </Logo>
      <CartButton>
        <Icon name="shopping-cart" size={28} color="#fff" />
        <ItemCount />
      </CartButton>
    </Container>
  );
}
