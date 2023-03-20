class ExampleItem{
    constructor(name, phone, email, product){
        this.name = name
        this.phone = phone
        this.email = email
        this.product = product
        
    }
}

const testData = [
    new ExampleItem('Иван Петров', parseInt('+7900222000'), 'petrov@mail.ru', 'course-js'),
    new ExampleItem('Сергей Белов', parseInt('+7900222000'), 'sbelov@mail.ru', 'course-js'),
    new ExampleItem('Павел Воля', parseInt('+7900222000'), 'volya@mail.ru', 'course-vue'),
    new ExampleItem('Гарик Харламов', parseInt('+7900222000'), 'harla@gmail.com', 'course-wordpress'),
    new ExampleItem('Вадим Семенов', parseInt('+7900222000'), 'semenov@mail.ru', 'course-php'),
    new ExampleItem('Мария Кравец', parseInt('+7900222000'), 'mariakravets@mail.ru', 'course-vue'),
    new ExampleItem('Татьяна Крылова', parseInt('+7900222000'), 'krilovatanya@mail.ru', 'course-html'),
    new ExampleItem('Роман Ли', parseInt('+7900222000'), 'romanli@gmail.ru', 'course-php'),
]

function getRandomIndex(max){
    return Math.floor(Math.random() * max)
}

export default function getRandomData(){
    const index = getRandomIndex(testData.length)
    return testData[index]
}