# imageSlider
The simple image slider JQuery plagin



Задачка по javascript(jQuery или pure Js)

Описание

Необходимо сделать слайд-шоу из изображений. Реализация в качестве jquery плагина. Внутри плагина можно использовать чистый javascript или синтаксис jquery. Анимаций и украшений не нужно. Картинка может быть фоном или отдельным тегом - на ваше усмотрение.

Поведение

При клике на блок div.slides текущее изображение заменяется на следующее из массива аргументов. Когда изображения в массиве заканчиваются нужно показать снова 1 по счету.

Запуск

$(‘div.slides’).imageSlider(
[‘https://leader.pubs.asha.org/data/Journals/ASHANL/934378/NIB1_web.png’, ‘https://www.prescriber.co.uk/wp-content/uploads/sites/23/2018/05/Chaplin-cover.jpg’, ‘https://leader.pubs.asha.org/data/Journals/ASHANL/934378/NIB1_web.png’])
