export const checkDisabled = function() {
    let buyBtns = document.querySelectorAll('.buy');
    let foodName = 'рыбой';
    buyBtns.forEach(btn => {
        if(btn.closest('.disabled')) {
            btn.closest('.disabled').childNodes.forEach((child) => {
                child.className == 'products__item chiken disabled' ? foodName = 'курицей' : false;
                child.className == 'products__item fish disabled' ? foodName = 'рыбой' : false;
                child.className == 'products__item liver disabled' ? foodName = 'уткой' : false;
            })
            
            btn.parentNode.textContent = `Печалька, с ${foodName} закончился.`;
        }
    })
}
