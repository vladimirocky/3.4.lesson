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
 */

// какой-то объект который будем получать и менять асинхронно
const data = {
    name: "Some name",
    modifyStatus: false,
    numVal: 0,
}

console.log("Start working..");
console.log(data);
setTimeout(()=> {
    console.log("Downloading data...")
}, 1000);
setTimeout(()=>{
    console.log("Processing data...")
},3000);
/**
 * Тут попытка через setTimeout имитировать
 * 1. Получить данные
 * 2. Изменить данные
 */
console.log("Start processing data..");

const data = { 
    name: "Some name",
    modifyStatus: false,
    numVal: 0,
}
setTimeout(() => {
    data.name = "New name";
    data.modifyStatus = "true";
    console.log(data)
    
    /**
     * Ваш код тут
     * 1. изменить name
     * 2. переключить флаг modifyStatus в true
     * 3. вывести data
     */
    console.log("End processing data!")
}, 2000);

console.log("Continue work main program..");

/**
 *
 * Запрос и получение данных
 * Модификация данных
 *
 */
const data = { 
    /**
    /приходится каждый раз описывать переменную.Это правильно?
    глобальную через "window." если задать, как ее сделать const?
    */
    name: "Some name",
    modifyStatus: false,
    numVal: 0,
}
const promise = new Promise(function (resolve,reject) {
    console.log('Request data...');
    setTimeout(() => {
        if (data != ""){
            resolve (data)
        } else {
            reject ('No data')
        }
        /**
         * Ващ код тут
         * 1. передать data в функцию resolve
         */
    },2000)
})

promise.then(respData => {
        console.log('Response ...', respData);
        })
        then(respData => {
        console.log('Pesponse1...', respData);
        
    /**
     * Ваш код тут
     * 1. вывести данные из промис
     * 2. передать данные дальше по цепочке
     */
    }
).then( newData => {
    console.log('Start modify data...', newData);
    setTimeout( () => {
        data.modifyStatus = true;
        data.name = "New name";
        console.log(data);
        /**
         * Ваш код тут
         * 1. переключить modifyStatus в true объекта
         * 2. Изменить еще како-нибудь свойство объекта
         * 3. Вывести объект
         */
        console.log('Stop modify data');
    },8000)
}).catch(err => console.log("Error",err))
    .finally( () => console.log("Finally!"))


/**
 * Чтобы продемонстрировать генератор
 * Создать генератор который выдает последовательность из случайных четных чисел
 *
 */

function* random(limit) {
    let randomOddNumber = () => {
    const result = Math.floor(Math.random() * limit);
    for (let result of limit) {
        if (result % 2 === 0){
            yield result
        }        
    }
}
} 
for (let result of random(limit)){
    console.log(result)
}


    /**
     * Ваш код тут
     *
     * let randomOddNumber = () => {
     *      const result = Math.floor(Math.random() * limit);
     * 1.     return -
     *      result если он делится на 2 без остатка
     *      иначе результат вызова randomOddNumber
     * }
     * 2. В бесконечном цикле возвращать результат вызова randomOddNumber()
     * через yield
     */


const randomizer = random(100)
console.log(randomizer.next().value)
console.log(randomizer.next().value)
console.log(randomizer.next().value)

async function Rand () {
    Array.from({length: 10}, () => Math.floor(Math.random() * 10));
    
    function rand() {
        for (let num of Array) {
            let result = await Rand(Array);
            result += 0;
            console.log(result);
        }
    }
}


/**
 * Работа async/ await
 * Создать асинхронную функцию которая возвращает массив случайных чисел
 * и получить эти данные в другой не асинхронной функции
 * дождавшись выполнения асинхронной
 *
 */
async function generateArray() {
    const arr = [53,342,3,235,63,56,546,457]
    await new Promise(
        resolve => setTimeout (resolve, 1000)
    )
    /**
     * Ваш код тут
     * 1. await new Promise ...
     * передать в промис функцию, принимающую resolve и вызывающую resolve спустя секунду
     */
    return arr //  результат не вернется пока не выполнится промис
}

function f() {
    async function f1(){
        let result = a + b;
        console.log(result);
    }

    /**
     * Ваш код тут
     * 1. вызвать асинхронную функцию, и отобразить ее результат
     */
}

f();
