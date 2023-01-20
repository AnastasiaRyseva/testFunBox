import './index.html';
import './index.scss';
import { checkDisabled } from './modules/checkDisabled'
import { changeStateProduct } from './modules/changeStateProduct';
import { changeStateOnClickBuy } from './modules/changeStateOnClickBuy';


checkDisabled();

const productCards = document.querySelectorAll('.products__item');
productCards.forEach((card) => card.addEventListener('click', changeStateProduct))


const productsWrapper = document.querySelectorAll('.buy');
productsWrapper.forEach((item) => item.addEventListener('click', changeStateOnClickBuy))