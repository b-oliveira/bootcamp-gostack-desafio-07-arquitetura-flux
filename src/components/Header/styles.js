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
  align-self: flex-end;
  width: 16px;
  height: 16px;
  border-radius: 8px;
  font-size: 10px;
  color: #fff;
  background: #7159c1;
`;
