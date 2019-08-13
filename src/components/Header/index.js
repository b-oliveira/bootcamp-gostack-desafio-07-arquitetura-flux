import React from 'react';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Container, Logo, LogoImage, CartButton, ItemCount } from './styles';

function Header({ cartSize }) {
  return (
    <Container>
      <Logo>
        <LogoImage />
      </Logo>
      <CartButton>
        <Icon name="shopping-cart" size={28} color="#fff" />
        <ItemCount>{cartSize}</ItemCount>
      </CartButton>
    </Container>
  );
}

export default connect(state => ({
  cartSize: state.cart.length,
}))(Header);
