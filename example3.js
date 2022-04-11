let delay = 2000 // 2000 мс или 2сек
// выполнение функции может занимать больше времени
// чем задержка в интервале
function displayDataWithDelay(){
    setTimeout(()=>{
        console.log('долгое выполнение')
    }, 6000)
}
// вариант для простых функций в колбеке
setTimeout(()=>{
    console.log('Колбек описан прямо в теле setTimeout');
}, delay)
// запускается спустя 2сек(timeout = 2000)
// и повторяется каждые 2 сек,
// но сама функция выполняется 3сек
// (т.е интервал запустит функцию
// не дожидаясь окончания предыдущей)
let testInterval = setInterval(()=>{
    console.log('сработал interval');
    displayDataWithDelay()
}, delay)

// остановка таймаута и интервала
//clearInterval(testInterval)
