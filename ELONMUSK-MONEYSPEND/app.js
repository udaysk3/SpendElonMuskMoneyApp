//SELECTORS
const sell = document.querySelectorAll('.sell')
const buy = document.querySelectorAll('.buy')
const trade = document.querySelector('.trade')
const moneystr = document.querySelector('.money')

//NORMAL JS

money = moneystr.innerHTML
money = money.replace(/\s+/g, '');
money = money.replace('$', '')
money = parseInt(money)



//EVENT LISTENERS

for (item of sell) { item.addEventListener('click', sellThis) }

for (item of buy) { item.addEventListener('click', buyThis) }


//FUNCTIONS


function increaseMyMoney() {
    money = moneystr.innerHTML
    money = money.replace(/\s+/g, '');
    money = money.replace('$', '')
    money = parseInt(money)
    money += 7.8125
    moneystr.innerHTML = '$ ' + money

}



function buyThis(e) {
    e.preventDefault();
    const select = e.target
    const trade = select.parentElement
    const item = trade.parentElement
    spanValue = item.children[1].children[1].children[0].innerHTML
    const child = trade.children
    for (i of child) {
        if (i.classList.contains('btn')) {
            if (i.classList.contains('micro')) {
                if (parseInt(i.value) < 50) {
                    if (money - spanValue > 0) {

                        select.style.opacity = 1
                        i.value = parseInt(i.value) + 1;
                        money -= spanValue
                        console.log(money)
                        moneystr.innerHTML = '$ ' + money
                    } else {
                        money = 0
                        select.style.opacity = 0.5
                        moneystr.innerHTML = '$ ' + money
                        window.setInterval(increaseMyMoney, 1)
                    }
                }
            } else if (i.classList.contains('medium')) {
                if (parseInt(i.value) < 35) {
                    if (money - spanValue > 0) {
                        select.style.opacity = 1
                        i.value = parseInt(i.value) + 1;
                        money -= spanValue
                        console.log(money)
                        moneystr.innerHTML = '$ ' + money
                    } else {

                        money = 0
                        select.style.opacity = 0.5
                        moneystr.innerHTML = '$ ' + money
                        window.setInterval(increaseMyMoney, 10)
                    }
                }
            } else if (i.classList.contains('macro')) {
                if (parseInt(i.value) < 20) {
                    if (money - spanValue > 0) {
                        select.style.opacity = 1
                        i.value = parseInt(i.value) + 1;
                        money -= spanValue
                        console.log(money)
                        moneystr.innerHTML = '$ ' + money
                    } else {
                        money = 0
                        select.style.opacity = 0.5
                        moneystr.innerHTML = '$ ' + money
                        window.setInterval(increaseMyMoney, 1)
                    }
                }
            } else if (i.classList.contains('ultimate')) {
                if (parseInt(i.value) < 1) {
                    if (money - spanValue > 0) {
                        select.style.opacity = 1
                        i.value = parseInt(i.value) + 1;
                        money -= spanValue
                        console.log(money)
                        moneystr.innerHTML = '$ ' + money
                    } else {
                        money = 0
                        select.style.opacity = 0.5
                        moneystr.innerHTML = '$ ' + money
                        window.setInterval(increaseMyMoney, 1)
                    }
                }

            }


        }
    }

}

function sellThis(e) {
    e.preventDefault();
    const select = e.target
    const trade = select.parentElement
    const item = trade.parentElement
    spanValue = item.children[1].children[1].children[0].innerHTML
    const child = trade.children
    for (i of child) {
        if (i.classList.contains('btn')) {
            if (parseInt(i.value) > 0) {

                i.value = parseInt(i.value) - 1;
                money += parseInt(spanValue)
                console.log(money)
                moneystr.innerHTML = '$ ' + money
            }
        }
    }

}