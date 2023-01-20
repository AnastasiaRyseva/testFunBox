import { changeElement } from "./changeStateProduct";

export const changeStateOnClickBuy = function(e) {
    if(e.target.closest('.disabled')) {
        return
    }
    if(e.target.className == 'buy') {
        let productCard = e.target.closest('.products__item_wrapper').querySelector('.products__item');
        changeElement(productCard, e.target.parentNode);
    }
}
