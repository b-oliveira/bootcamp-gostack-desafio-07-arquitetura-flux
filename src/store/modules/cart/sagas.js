import { call, put, all, select, takeLatest } from 'redux-saga/effects';
import { showMessage } from 'react-native-flash-message';
import NavigationService from '../../../services/navigation';

import api from '../../../services/api';
import { formatPrice } from '../../../util/format';

import { addToCartSuccess, updateAmountSuccess } from './actions';

function* addToCart({ id }) {
  const productExists = yield select(state =>
    state.cart.find(product => product.id === id)
  );

  const stock = yield call(api.get, `/stock/${id}`);

  const stockAmount = stock.data.amount;
  const currentAmount = productExists ? productExists.amount : 0;
  const amount = currentAmount + 1;

  if (amount > stockAmount) {
    showMessage({
      message: 'Não há mais quantidade disponível!',
      type: 'danger',
    });
    return;
  }

  if (productExists) {
    yield put(updateAmountSuccess(id, amount));
  } else {
    const response = yield call(api.get, `/products/${id}`);

    const data = {
      ...response.data,
      amount: 1,
      priceFormatted: formatPrice(response.data.price),
    };

    yield put(addToCartSuccess(data));

    NavigationService.navigate('Cart');
  }
}

function* updateAmount({ id, amount }) {
  if (amount <= 0) return;

  const stock = yield call(api.get, `/stock/${id}`);
  const stockAmount = stock.data.amount;

  if (amount > stockAmount) {
    showMessage({
      message: 'Não há mais quantidade disponível!',
      type: 'danger',
    });
    return;
  }

  yield put(updateAmountSuccess(id, amount));
}

export default all([
  takeLatest('@cart/ADD_REQUEST', addToCart),
  takeLatest('@cart/UPDATE_AMOUNT_REQUEST', updateAmount),
]);
