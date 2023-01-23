# Теорестические вопросы
### <b>Q1 Расскажите, чем, на ваш взгляд, отличается хорошая верстка от плохой с точки зрения:
* пользователя; 
* менеджера проекта; 
* дизайнера; 
* верстальщика; 
* клиентского программиста; 
* серверного программиста. </b>
<hr>

Верстальщик, чтобы отдать вёрстку хорошего качества, должен следовать некоторым критериям при написании кода:
важно выстроить иерархию файлов проекта таким образом, чтобы человек не сильно разбирающийся в вёрстке смог понять за что отвечает тот или иной кусок кода, для этого также важно давать понятные имена классам, атрибутам, папкам, файлам,  использовать только общепринятые сокращения, писать по английски, не просто транслитирацией. Если название состоит из нескольких слов, то слова разделяются нижним подчеркиванием, дефисом, CamelCase. 

Для того, чтобы код визуально легко читался стоит соблюдать одинаковые отступы, каждый элемент размещать на отдельной строке, так будет удобнее вносить правки. Хорошо добавлять комментарии в код, там, где это будет полезно, при этом комментарий не должен ухудшать читаемость кода, быть кратким.
Описаное выше будет отличать хорошую версту от плохой не только для самого верстальщика, но и для менеджера проектов или контент менеджера, программистов.
Для серверного программиста важно, чтобы вёрстка не нагружала сервер, была компактной, лучше когда верстка сжата. 
На корректную работу кода и на правильное отображение влияют следующие критерии:
Кроссбраузерность(вёрстка должна выглядеть одинаково в любом современном браузере), адаптивность(вёрстка хорошо выглядит на экране любого размера), семантичность(должны использоваться семантические теги, например: header, main, footer. Семантическая вёрстка нужна, чтобы сделать структуру проекта понятнее на всех этапах использования и для правильной индексации поисковыми машинами).

Доступность вёрстки - это важная практика, которая позволяет использовать сайт как можно большему числу людей(людям с ограниченными возможностями, пользователям, которые используют только клавиатуру, людям с медленным интернетом). Например, вместо того, чтобы создать кнопку с использованием тега `<div>` , нужно использовать`<button>`, он имееет встроенную доступность с клавиатуры: между кнопками можно передвигаться с помощью кнопки Tab и активировать, используя Enter. 
С точки зрения дизайнера важно, чтобы при добавлении в вёрстку картинок верстальщик использовал нужные расширения, для корректного отображения, должны быть верно подключены, все элементы должны соответствоать стайлгайду предусмотренному в макете. 
  
Менеджеру проектов важно, чтобы были соблюдены все требования к вёрстке от заказчика.

### <b>Q2 Опишите основные особенности верстки крупных многостраничных сайтов, дизайн которых может меняться в процессе реализации и поддержки. Расскажите о своем опыте верстки подобных сайтов: какие методологии, инструменты и технологии вы применяли на практике.</b>
<hr>
Многостраничные сайты, как правило, не оформляются на чистом CSS, вместо этого используются и препроцессоры, а также CSS-фреймворки(Bootstrap) для ускорения разработки. С препроцессорами код становится более структурированным и читаемым, благодаря возможности структурировать код по вложениям, также открывается доступ к миксинам, переменным, функциям, что позволяет избежать повторения кода и существенно его сокращает. 
И в крупных и в небольших проектах для того, чтобы было легко повторно использовать существующий код удобно применять методологию БЭМ. Проект собирают с помощью gulp/webpack или др.
На практике я использовала saas/scss, сборщик webpack, parcel, методологию БЭМ.


### <b>Q3 Опишите основные особенности верстки сайтов, которые должны одинаково хорошо отображаться как на любом современном компьютере, так и на смартфонах и планшетах под управлением iOS и Android. Расскажите о своем опыте верстки подобных сайтов: какие инструменты и технологии вы применяли, как проверяли результат на различных устройствах, какие именно устройства требовалось поддерживать.</b>
<hr>

Работа с картинками — одна из самых главных проблем при работе версткой под любые экраны, есть различные способы для работы с ними. Для корректного отображения всей верстки на различных экранах можно использовать медиазапросы,сетки бутстрап, если медиазапросы не поддерживает браузер, то можно использовать js(jquery)
Я верстала используя подход как mobile, так и desktop first(медиа-запросы). MobileFirst больше подходит проектам, которые в первую очередь рассчитаны именно на мобильные устройства. Готовому сайту добавить мобильности проще не переверстывая, использовать desktop first. Тестировала свою верстку в браузере с помощью инстурментов разработчика, а также на собственных гаджетах. 
### <b>Q4 Расскажите, какие инструменты помогают вам экономить время в процессе 
написания, проверки и отладки кода.</b>
<hr>
Панель разработчика в Google Chrome для проверки и отладки, время написания кода сокращает плагин emmet в vs code.

### <b>Q5 Вам нужно понять, почему страница отображается некорректно в Safari на iOS и в IE на Windows. Код писали не вы, доступа к исходникам у вас нет. Ваши действия? Сталкивались ли вы с подобными проблемами на практике?</b>
<hr>
Так как я верстала только под современные браузеры, то не сталкивалась с проблемой, но решить это можно воспользовавшись консолью проблемного браузера, чтобы смотреть какой браузер поддерживает те или иные правила можно использоватьи что то вроде https://caniuse.com, могут понадобиться вендорные префиксы.

### <b>Q6 Дизайнер отдал вам макет, в котором не показано, как должны выглядеть интерактивные элементы при наведении мыши. Ваши действия?</b>
<hr>
Если такая возможность есть, то задам уточняющие вопросы дизайнеру, в ином случае сделаю на своё усмотрение и предложу идеи команде. 

### <b>Q7 Какие ресурсы вы используете для развития в профессиональной сфере? Приведите несколько конкретных примеров (сайты, блоги и так далее). Какое направление развития вам более близко: JS-программирование, HTML/CSS верстка или что-то ещё?Какие ещё области знаний, кроме тех, что непосредственно относятся к работе, вам интересны?</b>
<hr>
Я решаю задачки на https://www.codewars.com/users/AnastasiaRyseva и https://leetcode.com/AnastasiaRyseva/ (js)
Читаю образоватльные блоги и каналы в тг, например https://htmlacademy.ru/blog и https://t.me/mavenjs, смотрю обучающие видео и интервью разработчиков на ютуб. Недавно начала учить React, читаю официальную документацию и практикуюсь на лёгких примерах кода. Планирую развиваться в сторону программирования на React.

### Q8 <b>Расскажите нам о себе и предоставьте несколько ссылок на последние работы, выполненные вами.</b>
<hr>
Меня зовут Анастасия. Получила высшее образование в области социальной работы. Долгое время проработав в поддержке пользователей, поняла, что хочу попробовать реализоваться в сфере с большей вариативностью в развитии. Выбрала разработку из-за возможности неограниченного роста и развития как своего, так и технологий.
Самостоятельно и с помощью курсов по HTML/CSS с которыми работала на предыдущем месте работы, начала изучение фронтенд разработки. Прошла проф. переподготовку в университете ИТМО по направлению "Веб-разработчик". Верстала проекты с использованием BEM, Saas, Flex, Grid, освоила систему контроля версий git.

Настроена на дальнейшее развитие скиллов и хочу быть максимально полезной компании, в которой буду работать.

Портфолио, которое я ещё буду развивать - https://anastasiaryseva.github.io/portfolio/
