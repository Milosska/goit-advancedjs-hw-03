import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import errorIcon from '../img/error.svg';

export const generateErrorToastMessage = message => {
  iziToast.show({
    class: 'error-toast',
    backgroundColor: '#ef4040',
    messageColor: '#fff',
    iconUrl: errorIcon,
    position: 'topRight',
    message,
  });
};
