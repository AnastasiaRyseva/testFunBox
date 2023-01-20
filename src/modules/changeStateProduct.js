import { changeStateOnClickBuy } from './changeStateOnClickBuy'
export const changeStateProduct = function(e) {
    let productCard = e.target.closest('.products__item');
    let parent = e.target.closest('.products__item_wrapper');
    let btn;
    if(e.target.closest('.disabled')) {
        return
    }
    for(let i = 0; i < parent.childNodes.length; i++) {
        if(parent.childNodes[i].className == 'products__item-offer') {
            btn = parent.childNodes[i];
            break;
        }
    }
    let text = parent.querySelector('.products__item-offer');
    changeElement(productCard, text);
}

/**
 * 
 * @param {*} productCard карточка
 * @param {*} parentNode элемент ниже карточки
 */
export const changeElement = (productCard, parentNode) => {
    productCard.classList.toggle('active');
    if (productCard.classList.contains('active')) {
        if(productCard.classList.contains('fish')) {
            parentNode.textContent = 'Головы щучьи с чесноком да свежайшая сёмгушка.';
        }
        if(productCard.classList.contains('liver')) {
            parentNode.textContent = 'Печень утки разварная с артишоками.';
        }
        if(productCard.classList.contains('chiken')) {
            parentNode.textContent = 'Филе из цыплят с трюфелями в бульоне.';
        }
        productCard.addEventListener('mouseleave', mouseLeaveEvent);

    } else {
        let cardName = productCard.querySelector('.products__item-name');
        cardName.innerText = 'Сказочное заморское яство';
        cardName.classList.remove('colorCardName');
        productCard.removeEventListener('mouseleave', mouseLeaveEvent);
        parentNode.innerHTML = 'Чего сидишь? Порадуй котэ, <strong class="buy">купи.</strong>'
        parentNode.querySelector('.buy').addEventListener('click', changeStateOnClickBuy);
    }

}

 export const mouseLeaveEvent = (leaveEvent) => {
    let card = leaveEvent.target;
    let cardNameForChange = card.querySelector('.products__item-name');
    cardNameForChange.innerText = 'Котэ не одобряет?';
    cardNameForChange.classList.add('colorCardName');
}
