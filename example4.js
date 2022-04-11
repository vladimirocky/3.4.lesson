let promise = new Promise((resolve, reject) => { // создание промиса
    // Какая-то логика которая выполняется в промисе
    const prompt = window.prompt('введите число от 1 до 3')

    if(prompt == 2){
        resolve('Правильно') // колбек при успешном выполнении
    } else{
        reject('Неправильно') // колбек при ошибке
    }
});

promise
    .then((result)=>{ // then - выполнится после успешного выполения промиса(когда выполнится resolve('Правильно') )
        console.log('логика в промисе выполнилась без ошибок 1', result);
        return 'Результат из первого вычисления или обработки данных'
    })
    .then((result)=>{ // цепочка then-ов может быть очень длинной
        console.log('логика в промисе выполнилась без ошибок 2', result);
        return 'Результат из второго вычисления или обработки данных'
    })
    .then((result)=>{ // цепочка then-ов может быть очень длинной
        console.log('логика в промисе выполнилась без ошибок 3', result);
    })
    .catch((error)=>{ // catch - выполнится после ошибки(когда выполнится reject('Неправильно') )
        console.log('в логике была ошибка ', error);
    })
    .then(()=>{
        let newPromise = new Promise((resolve, reject)=> { reject('Ошибка в новом промисе')}) // ошибка в новом промисе не отлавливается в catch выше
        newPromise.catch((err)=> console.log(err))
        console.log('then в котором новый промис отработал с ошибкой');
    })
    .finally(()=> { // finally - выполняется после всех then и catch
        console.log('Наконец-то это закончилось!');
    })


// еще пример, допустим у нас есть функция долгого сложения (ждет секунду и потом складывает числа)
//
function sum(a,b) {
    return new Promise(
        resolve => setTimeout(resolve, 1000, a + b)
    )
}

// а вот как с помощью async/await
async function fun() {
    let result1 = await sum(1, 2);
    let result2 = await sum(result1, 3);
    console.log(await sum(result2, 4));
}
fun();
// 10

