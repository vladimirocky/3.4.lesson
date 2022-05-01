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
    numVal: 0
}

console.log("Start working..");
console.log(data);
 

/**
 * Тут попытка через setTimeout имитировать
 * 1. Получить данные
 * 2. Изменить данные
 */
console.log("Start processing data..");

setTimeout(() => {
    /**
     * Ваш код тут
     * 1. изменить name
     * 2. переключить флаг modifyStatus в true
     * 3. вывести data
     */
    data.name = 'Aleksey';

    /**
     * ---------------------------------------------------------------------!
     * ---------------------------------------------------------------------!
     * во-первых свойство надо переключить на true
     * во-вторых modifyStatus это не декриптор свойства, это просто свойство
     * ---------------------------------------------------------------------!
     * ---------------------------------------------------------------------!
     */
    Object.defineProperty(data,"modifyStatus"),{
        modifyStatus:false}
    console.log(data);
    console.log("End processing data!")
}, 2000);

console.log("Continue work main program..");

/**
 *
 * Запрос и получение данных
 * Модификация данных
 *
 */
const promise = new Promise(function (resolve,reject) {
    console.log('Request data...');
    setTimeout(() => {
        resolve(data)
        /**
         * Ващ код тут
         * 1. передать data в функцию resolve
         */
    },8000)
})

promise.then(respData => {
        console.log('Response ...'),
        console.log(respData)
        return respData
    /**
     * Ваш код тут
     * 1. вывести данные из промис
     * 2. передать данные дальше по цепочке
     */
    }
    ).then( newData => {
    console.log('Start modify data...');
    setTimeout( () => {
        
        data.name = ' oleg';
        data.modifyStatus = true;
    
        /**
         * Ваш код тут
         * 1. переключить modifyStatus в true объекта
         * 2. Изменить еще како-нибудь свойство объекта
         * 3. Вывести объект
         */
     
        console.log(newData);
        console.log('Stop modify data');
    },4000)
}).catch(err => console.log("Error",err))
    .finally( () => console.log("Finally!"))

/**
 * Чтобы продемонстрировать генератор
 * Создать генератор который выдает последовательность из случайных четных чисел
 *
 */

function* random(limit) {
    let randomOddNumber = () =>{
     const result = Math.floor(Math.random() * limit);
        if(result % 2 === 0){
            return result 
        }else{
            return randomOddNumber()
        }
    }

    /**
     * ---------------------------------------------------------------------!
     * ---------------------------------------------------------------------!
     * Зачем три строки? они ничего не ломают, но зачем :D
     * Цикла же достаточно
     * ---------------------------------------------------------------------!
     * ---------------------------------------------------------------------!
     */
    yield randomOddNumber()
    yield randomOddNumber()
    yield randomOddNumber()
    while(true){
        yield randomOddNumber
    }
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


/**
 * Работа async/ await
 * Создать асинхронную функцию которая возвращает массив случайных чисел
 * и получить эти данные в другой не асинхронной функции
 * дождавшись выполнения асинхронной
 *
 */
async function generateArray() {
    const arr = [53,342,3,235,63,56,546,457]
    await new Promise((resolve,reject )=>{
   setTimeout(()=> resolve(arr),1000 )
   
});
 return arr
}
    /**
     * Ваш код тут
     * 1. await new Promise ...
     * передать в промис функцию, принимающую resolve и вызывающую resolve спустя секунду
     
    return arr //  результат не вернется пока не выполнится промис
}
*/
   function f() {
    /**
     * Ваш код тут
     * 1. вызвать асинхронную функцию, и отобразить ее результат
 
 */

    generateArray().then((resol)=>{console.log(resol)})
}
 f();

