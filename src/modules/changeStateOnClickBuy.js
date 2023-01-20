import { changeElement } from "./changeStateProduct";

export const changeStateOnClickBuy = function(e) {
    if(e.target.closest('.disabled')) {
        return
    }
    if(e.target.className == 'buy') {
        console.log(e.target.closest('.products__item_wrapper'));
        let productCard = e.target.closest('.products__item_wrapper').childNodes[1];
        changeElement(productCard, e.target.parentNode);
    }
}
