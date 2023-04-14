const ArrayDirector = [
    {
      name: 'Стивен Спилберг',
      career: 'Продюсер, Режиссёр, Актёр, Сценарист, Монтажёр',
      films: 'https://ru.wikipedia.org/wiki/%D0%A4%D0%B8%D0%BB%D1%8C%D0%BC%D0%BE%D0%B3%D1%80%D0%B0%D1%84%D0%B8%D1%8F_%D0%A1%D1%82%D0%B8%D0%B2%D0%B5%D0%BD%D0%B0_%D0%A1%D0%BF%D0%B8%D0%BB%D0%B1%D0%B5%D1%80%D0%B3%D0%B0',
      top_rated_film: 'Список Шиндлера'
    },
    {
      name: 'Кристофер Нолан',
      career: 'Сценарист, Продюсер, Режиссёр, Оператор, Монтажёр, Актёр, Композитор',
      films: 'https://www.film.ru/compilation/vse-filmy-kristofera-nolana-ot-luchshego-k-horoshemu',
      top_rated_film: 'Начало'
    },
    {
      name: 'Мартин МакДона',
      career: 'Сценарист, Режиссёр, Продюсер',
      films: 'https://www.film.ru/person/martin-makdonah',
      top_rated_film: 'Три билборда на границе Эббинга, Миссури'
    },
    {
      name: 'Алексей Балабанов',
      career: 'Режиссёр, Сценарист, Актёр, Продюсер',
      films: 'https://www.film.ru/person/aleksey-balabanov',
      top_rated_film: 'Брат'
    },
    {
      name: 'Питер Фаррелли',
      career: 'Продюсер, Режиссёр, Сценарист, Актёр',
      films: 'https://www.film.ru/person/piter-farrelli',
      top_rated_film: 'Зелёная книга'
    },
    {
      name: 'Юрий Быков',
      career: 'Актёр, Режиссёр, Сценарист, Композитор, Монтажёр, Продюсер',
      films: 'https://www.film.ru/person/yuriy-bykov',
      top_rated_film: 'Дурак'
    },
    {
      name: 'Жан-Марк Валле',
      career: 'Режиссер, Продюсер, Монтажёр, Актёр, Сценарист',
      films: 'https://www.film.ru/person/zhan-mark-valle',
      top_rated_film: 'Далласский клуб покупателей'
    },
  ];


  ArrayDirector.forEach((item)=>{

    const app = document.querySelector(".app");
    const newElem = document.createElement("div");
    const newElOne = document.createElement("div");
    const newEl = document.createElement("a");



    newElem.textContent = item.name;
    newElOne.textContent = item.career;
    newEl.textContent = item.films;
    newEl.setAttribute('href', item.films);
    newEl.innerText = 'Фильмы';



     app.appendChild(newElem);
     app.appendChild(newElOne);
     app.appendChild(newEl);
    

    });
  

    
      const secondArr = ArrayDirector.map((el) => { 
        
        const film = document.querySelector(".film");
        const newElFilm = document.createElement("div");
        newElFilm.textContent= el.top_rated_film;

         film.appendChild(newElFilm);
     
    }); 











  // const secondArr = ArrayDirector.filter((el) => {
    //     const app = document.querySelector(".app");
    //     const newElFilm = document.createElement("div");
    //     newElFilm.innerHTML= el.top_rated_film;

    //     app.appendChild(newElFilm);
    //   })
      // взяли жлементы из самива существующего









// ArrayDirector.forEach((item)=>{

// const name = document.querySelector('.dir-list__name');
// const career =document.querySelector(".dir-list__career");
// const films = document.querySelector(".dir-list__films");


// name.textContent=item.name;
// career.textContent=item.career;
// films.href=item.films;

// });