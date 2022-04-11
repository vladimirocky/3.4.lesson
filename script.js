/**
 * ДОМАШНЕЕ ЗАДАНИЕ
 * Будем использовать setTimeout для имитации долгих вычислений
 *
 * В исходном коде некоторый "костяк" который нужно дописать ученику чтобы примеры заработали
 *
 * Предлагается взять какой-нибудь объект с которым надо будет работать
 * А потом имитировать шаги:
 * 1. Начало работы программы
 * 2. Получение данных (занимает како-то время)
 * 3. Обработка данны (занимет некоторе время)
 * 4. Отправка данных обратно (занимет некоторе время)
 */

// какой-то объект который будем получать и менять асинхронно
const data = {
    name: "Some name",
    modifyStatus: false,
    numVal: 0
}

console.log("Start working..");
console.log(data);

/**
 * Тут попытка через setTimeout симитировать
 * 1. Получить данные
 * 2. Изменить данные
 */
 console.log("Start processing data..");

 setTimeout(() => {
    data.name = "New name";
    data.modifyStatus = true;
    console.log(data);
    console.log("End processing data!")
}, 2000);

 console.log("Continue work main program..");

/**
 *
 * Запрос и получение данных
 * Обработка
 * Отправка
 *
 */
 const promise = new Promise(function (resolve,reject) {
    console.log('Request data...');
    setTimeout(() => {
        resolve(data);
    },8000)
})

 promise.then(respData => {
    console.log('Response ...');
    console.log(respData);
    return respData;
    }
 ).then( newData => {
    console.log('Start modify data...');
    setTimeout( () => {
        newData.modifyStatus = true;
        newData.name = 'New name';
        console.log('Stop modify data');
        console.log(newData);
    },8000)
}).catch(err => console.log("Error",err))
 .finally( () => console.log("Finally!"))

/**
 * Чтобы продемонстрировать генератор
 * Создать генератор который выдает последовательность из случайных четных чисел
 *
 */
