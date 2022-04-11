let promise = new Promise((resolve, reject) => { // создание промиса
    // Какая-то логика которая выполняется в промисе
    const prompt = window.prompt('введите число от 1 до 3')

    if(prompt == 2){
        resolve('Правильно') // колбек при успешном выполнении
    } else{
        reject('Неправильно') // колбек при ошибке
    }
});

// promise chain
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
        // ошибка в новом промисе не отлавливается в catch выше
        let newPromise = new Promise((resolve, reject)=> { reject('Ошибка в новом промисе')})
        newPromise.catch((err)=> console.log(err))
        console.log('then в котором новый промис отработал с ошибкой');
    })
    .finally(()=> { // finally - выполняется после всех then и catch
        console.log('Наконец-то это закончилось!');
    })

