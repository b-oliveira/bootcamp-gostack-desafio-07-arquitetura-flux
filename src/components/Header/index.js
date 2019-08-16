import React from 'react';
import { useSelector } from 'react-redux';

import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, LogoImage, CartButton, ItemCount } from './styles';

function Header({ navigation }) {
  const cartSize = useSelector(state => state.cart.length);

  return (
    <Container>
      <Logo>
        <LogoImage />
      </Logo>
      <CartButton onPress={() => navigation.navigate('Cart')}>
        <Icon name="shopping-cart" size={28} color="#fff" />
        <ItemCount>{cartSize}</ItemCount>
      </CartButton>
    </Container>
  );
}

export default Header;
