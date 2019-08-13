import styled from 'styled-components/native';
import { darken } from 'polished';

export const Container = styled.View`
  background: #191920;
  margin: 8px;
`;

export const Product = styled.View`
  background: #fff;
  padding: 8px;
  margin: 8px;
  border-radius: 4px;
  flex-direction: column;
  width: 208px;
`;

export const ProductImage = styled.Image`
  height: 200px;
  width: 200px;
`;

export const ProductTitle = styled.Text`
  font-size: 16px;
`;

export const ProductPrice = styled.Text`
  margin-top: auto;
  font-size: 20px;
  font-weight: bold;
`;

export const AddButton = styled.TouchableOpacity`
  background: #7159c1;
  flex-direction: row;
  align-items: center;
  border-radius: 4px;
  margin-top: 8px;
`;

export const ProductAmount = styled.View`
  background: ${darken(0.03, '#7159c1')};
  flex-direction: row;
  align-items: center;
  padding: 8px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
`;

export const ProductAmountText = styled.Text`
  color: #fff;
  margin-left: 8px;
`;

export const AddButtonText = styled.Text`
  flex: 1;
  text-align: center;
  font-weight: bold;
  color: #fff;
`;
