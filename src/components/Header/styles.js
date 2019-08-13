import styled from 'styled-components/native';
import logo from '../../assets/images/logo.png';

export const Container = styled.View.attrs({
  elevation: 2,
})`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  background-color: #191920;
  height: 60px;
`;

export const Logo = styled.TouchableWithoutFeedback`
  /* width: 220px; */
`;

export const LogoImage = styled.Image.attrs({
  source: logo,
  resizeMode: 'contain',
})`
  width: 220px;
  height: 30px;
`;

export const CartButton = styled.TouchableOpacity`
  position: relative;
`;

export const ItemCount = styled.Text`
  position: absolute;
  text-align: center;
  top: -9px;
  right: -9px;
  min-width: 18px;
  min-height: 18px;
  background: #7159c1;
  color: #fff;
  font-size: 11px;
  padding: 2px;
  border-radius: 9px;
`;
