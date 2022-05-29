// генераторы могут не только возвращать его но и получать
function* gen() {
    // Передаем вопрос во внешний код и ждем ответа
    let result = yield "красная или синяя?";

    console.log(result);
}

let generator = gen();

let question = generator.next().value;
console.log(question);
// "красная или синяя?" - получили вопрос из генератора

// с запозданием дали ответ
setTimeout(() => generator.next("желтая"), 5000);
// генератор все это время ждал
