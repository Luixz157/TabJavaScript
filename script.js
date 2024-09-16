// Tab Menu

const navTabs = document.querySelectorAll('.js-nav-tabs li a');
const tabPane = document.querySelectorAll('.js-tab-pane')

// 

navTabs.forEach((nav, index) => {
    nav.addEventListener('click', (event) => {
        event.preventDefault(); //Previnir evento de carregar pagina

        navTabs.forEach(itemNav => {
            itemNav.classList.remove('active'); // 1 - Remove a anterior e adiciona na nova (Por ordem)
        })

        tabPane.forEach(tab => {
            tab.classList.remove('active');
        })

        nav.classList.add('active') //2 - Ativa o Elemento de Ativo

        tabPane[index].classList.add('active')
    })
})

//------------------------------------------------------------------------------------------------

// Input

const InputNumber1 = document.querySelector('.js-input1');
const InputNumber2 = document.querySelector('.js-input2');
const Result = document.querySelector('.js-result');
const btnSend = document.querySelector('.js-submit');

 btnSend.addEventListener('click', () => {
    const inputValue1 = Number(InputNumber1.value); // Obtém o valor do primeiro input e o converte para número
    const inputValue2 = Number(InputNumber2.value); // Obtem o valor do segundo input e o conver para numero
    const doubleValue = inputValue1 + inputValue2; // Dobra ov alor
    Result.textContent = doubleValue // Exibe o resultado na tag <p>
 })


console.log(Result)