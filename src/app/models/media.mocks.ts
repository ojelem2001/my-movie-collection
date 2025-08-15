import { Media } from './media.model';
import { MediaType } from './media.enum';

export const MEDIAS_MOCKS: Media[] = 
[
  {
    "id": 1,
    "title": "Аполлон 13",
    "originalTitle": "Apollo 13",
    "year": 1995,
    "genres": ["Драма", "Исторический"],
    "description": "Реальная история астронавтов, которые боролись за выживание после аварии в космосе.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjEzYjJmNzgtNDkwNy00MTQ4LTlmMWMtNzA4YjE2NjI0ZDg4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_FMjpg_UX1000_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/4/0/8/5408-apollo-13-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0112384",
        "rating": 7.7,
        "genres": ["Drama", "History"]
      },
      "kinopoisk": {
        "id": "326",
        "rating": 7.9,
        "genres": ["драма", "история"],
        "description": "История космического корабля «Аполлон-13», который должен был доставить людей на Луну, но из-за аварии превратился в хрупкую скорлупку, плывущую в безвоздушном пространстве."
      },
      "letterboxd": {
        "id": "apollo-13",
        "rating": 3.9
      }
  },
  {
    "id": 2,
    "title": "Эйс Вентура: Розыск домашних животных",
    "originalTitle": "Ace Ventura: Pet Detective",
    "year": 1994,
    "genres": ["Комедия", "Детектив"],
    "description": "Эксцентричный детектив по розыску животных ищет пропавшего дельфина — талисмана футбольной команды.",
    "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/427c3d1d-7a4a-491f-8b8d-5c50d84e361b/orig",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/8/2/5182-ace-ventura-pet-detective-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0109040",
        "rating": 6.9,
        "genres": ["Comedy", "Crime"]
      },
      "kinopoisk": {
        "id": "42664",
        "rating": 7.3,
        "genres": ["комедия", "криминал"],
        "description": "Эксцентричный детектив Эйс Вентура специализируется на розыске пропавших животных. Когда исчезает дельфин — талисман футбольной команды «Майами Долфинс», — к нему обращается владелица команды."
      },
      "letterboxd": {
        "id": "ace-ventura-pet-detective",
        "rating": 3.1
      }
  },
  {
    "id": 3,
    "title": "Общество мертвых поэтов",
    "originalTitle": "Dead Poets Society",
    "year": 1989,
    "genres": ["Драма"],
    "description": "Учитель литературы вдохновляет студентов на свободу мысли и самовыражения.",
    "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1900788/90be882f-10a0-4d28-baab-ad8e326817a7/orig",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/1/0/5110-dead-poets-society-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0097165",
        "rating": 8.1,
        "genres": ["Comedy", "Drama"]
      },
      "kinopoisk": {
        "id": "448",
        "rating": 8.3,
        "genres": ["драма"],
        "description": "Джон Китинг — новый преподаватель английской словесности в консервативном американском колледже. От чопорной массы учителей его выгодно отличают легкость общения, эксцентричное поведение и пренебрежение к программе обучения."
      },
      "letterboxd": {
        "id": "dead-poets-society",
        "rating": 4.1
      }
  },
  {
    "id": 4,
    "title": "Тринадцатый этаж",
    "originalTitle": "The Thirteenth Floor",
    "year": 1999,
    "genres": ["Фантастика", "Триллер"],
    "description": "Программист обнаруживает, что его мир — симуляция, а сам он — часть чужой реальности.",
    "posterUrl": "https://cs9.pikabu.ru/post_img/big/2017/09/14/5/1505370029143945481.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/3/5/4/5354-the-13th-floor-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0139809",
        "rating": 7.0,
        "genres": ["Mystery", "Sci-Fi", "Thriller"]
      },
      "kinopoisk": {
        "id": "19044",
        "rating": 7.2,
        "genres": ["фантастика", "триллер"],
        "description": "Программист Дуглас Холл обнаруживает, что его мир — лишь компьютерная симуляция, созданная ученым Ханноном Фуллером."
      },
      "letterboxd": {
        "id": "the-13th-floor",
        "rating": 3.4
      }
  },
  {
    "id": 5,
    "title": "Лучший из лучших",
    "originalTitle": "Best of the Best",
    "year": 1989,
    "genres": ["Боевик", "Спорт"],
    "description": "Соревнования между командами США и Кореи по тхэквондо.",
    "posterUrl": "https://www.kino-teatr.ru/movie/posters/big/4/8/33584.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/7/9/5179-best-of-the-best-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0096928",
        "rating": 6.6,
        "genres": ["Action", "Drama", "Sport"]
      },
      "kinopoisk": {
        "id": "46424",
        "rating": 6.8,
        "genres": ["боевик", "спорт"],
        "description": "Сборная США по тхэквондо готовится к ответственным соревнованиям с командой Кореи. Тренер отбирает лучших из лучших, но сможет ли он сплотить их в настоящую команду?"
      },
      "letterboxd": {
        "id": "best-of-the-best",
        "rating": 2.9
      }
  },
  {
    "id": 6,
    "title": "Копланд",
    "originalTitle": "Cop Land",
    "year": 1997,
    "genres": ["Криминал", "Драма", "Триллер"],
    "description": "Шериф маленького городка вступает в конфликт с коррумпированными копами.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/ru/c/cd/Cop_Land_1997.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/3/0/3/5303-cop-land-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0118887",
        "rating": 6.8,
        "genres": ["Crime", "Drama", "Thriller"]
      },
      "kinopoisk": {
        "id": "40876",
        "rating": 7.1,
        "genres": ["криминал", "драма"],
        "description": "Фредди Хефлин — шериф тихого городка, населенного нью-йоркскими полицейскими. Когда он начинает расследовать подозрительное ДТП, то сталкивается с коррупцией и заговорами."
      },
      "letterboxd": {
        "id": "cop-land",
        "rating": 3.3
      }
  },
  {
    "id": 7,
    "title": "История Бронкса",
    "originalTitle": "A Bronx Tale",
    "year": 1993,
    "genres": ["Криминал", "Драма"],
    "description": "Взросление мальчика между двумя отцами - родным и мафиози.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/ru/3/3e/A_Bronx_Tale.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/2/6/5126-a-bronx-tale-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0106489",
        "rating": 7.8,
        "genres": ["Crime", "Drama"]
      },
      "kinopoisk": {
        "id": "40877",
        "rating": 8.0,
        "genres": ["криминал", "драма"],
        "description": "Маленький Кало живет в Бронксе 1960-х. Его отец — честный рабочий, но мальчик восхищается местным гангстером Сонни, который становится ему вторым отцом."
      },
      "letterboxd": {
        "id": "a-bronx-tale",
        "rating": 3.8
      }
  },
  {
    "id": 8,
    "title": "Воздушная Америка",
    "originalTitle": "Air America",
    "year": 1990,
    "genres": ["Комедия", "Боевик"],
    "description": "Приключения пилотов секретной авиакомпании во время Вьетнамской войны.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/en/1/11/Air_America_%28film%29.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/7/8/5178-air-america-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0099005",
        "rating": 5.8,
        "genres": ["Action", "Comedy"]
      },
      "kinopoisk": {
        "id": "40878",
        "rating": 6.5,
        "genres": ["комедия", "боевик"],
        "description": "Два пилота работают на секретную авиакомпанию ЦРУ во время Вьетнамской войны, занимаясь контрабандой оружия и наркотиков."
      },
      "letterboxd": {
        "id": "air-america",
        "rating": 2.7
      }
  },
  {
    "id": 9,
    "title": "Аэроплан!",
    "originalTitle": "Airplane!",
    "year": 1980,
    "genres": ["Комедия"],
    "description": "Культовая пародия на фильмы-катастрофы.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/en/2/21/Airplane%21_%281980_film%29.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/1/1/5111-airplane-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0080339",
        "rating": 7.7,
        "genres": ["Comedy"]
      },
      "kinopoisk": {
        "id": "40879",
        "rating": 7.9,
        "genres": ["комедия"],
        "description": "Бывший военный летчик Тед Страйкер должен посадить пассажирский самолет после того, как весь экипаж отравился едой. Пародия на фильмы-катастрофы."
      },
      "letterboxd": {
        "id": "airplane",
        "rating": 3.9
      }
  },
  {
    "id": 10,
    "title": "Бивис и Баттхед уделывают Америку",
    "originalTitle": "Beavis and Butt-Head Do America",
    "year": 1996,
    "genres": ["Мультфильм", "Комедия"],
    "description": "Приключения двух туповатых подростков по всей Америке.",
    "posterUrl": "https://static.okko.tv/images/v4/4462885f-9e51-48f7-83a4-9fe0e2c0d01b?scale=1&quality=80",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/3/0/4/5304-beavis-and-butt-head-do-america-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0115641",
        "rating": 6.7,
        "genres": ["Animation", "Adventure", "Comedy"]
      },
      "kinopoisk": {
        "id": "40880",
        "rating": 7.2,
        "genres": ["мультфильм", "комедия"],
        "description": "Бивис и Баттхед отправляются в путешествие по Америке, чтобы найти свой украденный телевизор, но случайно становятся мишенями для спецслужб."
      },
      "letterboxd": {
        "id": "beavis-and-butt-head-do-america",
        "rating": 3.3
      }
  },
  {
    "id": 11,
    "title": "Ребята по соседству",
    "originalTitle": "Boyz n the Hood",
    "year": 1991,
    "genres": ["Драма"],
    "description": "Жизнь подростков в криминальных районах Лос-Анджелеса.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/en/c/c3/Boyz_n_the_hood_poster.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/2/5/5125-boyz-n-the-hood-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0101507",
        "rating": 7.8,
        "genres": ["Crime", "Drama"]
      },
      "kinopoisk": {
        "id": "40881",
        "rating": 7.9,
        "genres": ["драма"],
        "description": "Три молодых афроамериканца пытаются выжить в криминальном районе Лос-Анджелеса, где банды, наркотики и насилие — часть повседневной жизни."
      },
      "letterboxd": {
        "id": "boyz-n-the-hood",
        "rating": 3.9
      }
  },
  {
    "id": 12,
    "title": "Что гложет Гилберта Грейпа",
    "originalTitle": "What's Eating Gilbert Grape",
    "year": 1993,
    "genres": ["Драма"],
    "description": "Молодой человек заботится о младшем брате-аутисте и тучной матери.",
    "posterUrl": "https://m.media-amazon.com/images/I/71KyURgsw8L.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/2/7/5127-what-s-eating-gilbert-grape-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0108550",
        "rating": 7.8,
        "genres": ["Drama"]
      },
      "kinopoisk": {
        "id": "40882",
        "rating": 8.1,
        "genres": ["драма"],
        "description": "Гилберт Грейп живет в маленьком городке, где он заботится о своем младшем брате Арни, страдающем аутизмом, и тучной матери, которая не выходит из дома."
      },
      "letterboxd": {
        "id": "what-s-eating-gilbert-grape",
        "rating": 3.9
      }
  },
  {
    "id": 13,
    "title": "Насмерть",
    "originalTitle": "Dead Bang",
    "year": 1989,
    "genres": ["Боевик", "Триллер"],
    "description": "Детектив расследует убийство полицейского.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrcLWjzjXZ6KL-pQZosNsw-KcSwLWDoWAm-Q&s",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/8/0/5180-dead-bang-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0097157",
        "rating": 6.3,
        "genres": ["Action", "Crime", "Thriller"]
      },
      "kinopoisk": {
        "id": "40883",
        "rating": 6.5,
        "genres": ["боевик", "триллер"],
        "description": "Детектив Джерри Бек расследует убийство полицейского, которое приводит его к неонацистской группировке."
      },
      "letterboxd": {
        "id": "dead-bang",
        "rating": 2.9
      }
  },
  {
    "id": 14,
    "title": "Джонни-мнемоник",
    "originalTitle": "Johnny Mnemonic",
    "year": 1995,
    "genres": ["Фантастика", "Киберпанк"],
    "description": "Курьер с имплантом в голове становится мишенью якудзы.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRm_WDiNZ6ByNKwKGmYiPRDqxtpfbzAuPO0og&s",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/3/0/2/5302-johnny-mnemonic-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0113481",
        "rating": 5.6,
        "genres": ["Action", "Sci-Fi", "Thriller"]
      },
      "kinopoisk": {
        "id": "40884",
        "rating": 6.1,
        "genres": ["фантастика", "киберпанк"],
        "description": "Джонни — курьер, который перевозит данные в импланте в своей голове. Когда он получает информацию, за которой охотится якудза, его жизнь превращается в бегство."
      },
      "letterboxd": {
        "id": "johnny-mnemonic",
        "rating": 2.8
      }
  },
  {
    "id": 15,
    "title": "Империя Рекордс",
    "originalTitle": "Empire Records",
    "year": 1995,
    "genres": ["Комедия", "Драма", "Музыка"],
    "description": "Один день из жизни сотрудников музыкального магазина.",
    "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1629390/0670b28e-9eec-4312-8172-0babe2fc7fe5/600x900",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/3/0/1/5301-empire-records-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0112966",
        "rating": 6.7,
        "genres": ["Comedy", "Drama", "Music"]
      },
      "kinopoisk": {
        "id": "40885",
        "rating": 7.0,
        "genres": ["комедия", "драма"],
        "description": "Один день из жизни сотрудников независимого музыкального магазина, которые пытаются спасти его от поглощения крупной сетью."
      },
      "letterboxd": {
        "id": "empire-records",
        "rating": 3.4
      }
  },
  {
    "id": 16,
    "title": "С широко закрытыми глазами",
    "originalTitle": "Eyes Wide Shut",
    "year": 1999,
    "genres": ["Драма", "Триллер"],
    "description": "Последний фильм Кубрика о сексуальных приключениях врача.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTuBWVuPg6LX65JAPVf8nQb_H0Y6OtE5L6XIw&s",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/3/5/3/5353-eyes-wide-shut-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0120663",
        "rating": 7.5,
        "genres": ["Drama", "Mystery", "Thriller"]
      },
      "kinopoisk": {
        "id": "40886",
        "rating": 7.7,
        "genres": ["драма", "триллер"],
        "description": "После того как жена признается в своих эротических фантазиях, доктор Билл Харфорд отправляется в ночное путешествие по сексуальному подполью Нью-Йорка."
      },
      "letterboxd": {
        "id": "eyes-wide-shut",
        "rating": 3.8
      }
  },
  {
    "id": 17,
    "title": "Голый пистолет",
    "originalTitle": "The Naked Gun",
    "year": 1988,
    "genres": ["Комедия"],
    "description": "Неуклюжий полицейский расследует покушение на королеву Англии.",
    "posterUrl": "https://images.squarespace-cdn.com/content/v1/5b18735a3917ee20d18a2117/361f5dfd-164e-4bd0-a8fd-51cca3cf52bc/p11300_p_v8_ak.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/1/2/5112-the-naked-gun-from-the-files-of-police-squad-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0095705",
        "rating": 7.6,
        "genres": ["Comedy", "Crime"]
      },
      "kinopoisk": {
        "id": "40887",
        "rating": 7.8,
        "genres": ["комедия"],
        "description": "Неуклюжий лейтенант Фрэнк Дребин расследует покушение на королеву Елизавету II во время визита в США."
      },
      "letterboxd": {
        "id": "the-naked-gun-from-the-files-of-police-squad",
        "rating": 3.7
      }
  },
  {
    "id": 18,
    "title": "В отрыв!",
    "originalTitle": "Human Traffic",
    "year": 1999,
    "genres": ["Комедия", "Драма"],
    "description": "Уикенд пяти друзей, увлекающихся клубной культурой.",
    "posterUrl": "https://blog.12edit.ru/content/images/2022/07/human-traffic.webp",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/3/5/2/5352-human-traffic-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0188674",
        "rating": 7.1,
        "genres": ["Comedy", "Drama", "Music"]
      },
      "kinopoisk": {
        "id": "40888",
        "rating": 7.3,
        "genres": ["комедия", "драма"],
        "description": "Пять друзей проводят выходные в кардиффской клубной сцене, погружаясь в мир музыки, наркотиков и ночной жизни."
      },
      "letterboxd": {
        "id": "human-traffic",
        "rating": 3.5
      }
  },
  {
    "id": 19,
    "title": "Крупная рыба",
    "originalTitle": "Big Fish",
    "year": 2003,
    "genres": ["Фэнтези", "Драма"],
    "description": "Сын пытается понять правду за невероятными историями отца.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Big_Fish_movie_poster.png/250px-Big_Fish_movie_poster.png",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/4/0/9/5409-big-fish-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0319061",
        "rating": 8.0,
        "genres": ["Adventure", "Drama", "Fantasy"]
      },
      "kinopoisk": {
        "id": "40889",
        "rating": 8.2,
        "genres": ["фэнтези", "драма"],
        "description": "Умирающий отец рассказывает сыну невероятные истории своей жизни. Сын пытается отделить правду от вымысла и понять своего отца перед его смертью."
      },
      "letterboxd": {
        "id": "big-fish",
        "rating": 4.0
      }
  },
  {
    "id": 20,
    "title": "Последний киногерой",
    "originalTitle": "Last Action Hero",
    "year": 1993,
    "genres": ["Фантастика", "Боевик", "Комедия"],
    "description": "Мальчик попадает в мир боевиков своего кумира.",
    "posterUrl": "https://m.media-amazon.com/images/I/919ii8V-U2L._UF1000,1000_QL80_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/2/8/5128-last-action-hero-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
      "imdb": {
        "id": "tt0107362",
        "rating": 6.4,
        "genres": ["Action", "Adventure", "Comedy"]
      },
      "kinopoisk": {
        "id": "40890",
        "rating": 6.7,
        "genres": ["фантастика", "боевик"],
        "description": "Мальчик Дэнни попадает в мир боевиков своего кумира Джека Слэйтера с помощью волшебного билета в кино."
      },
      "letterboxd": {
        "id": "last-action-hero",
        "rating": 3.2
      }
  },
  {
    "id": 21,
    "title": "Лоуренс Аравийский",
    "originalTitle": "Lawrence of Arabia",
    "year": 1962,
    "genres": ["Исторический", "Драма"],
    "description": "Эпическая биография Т.Э. Лоуренса.",
    "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/10592371/c947d9d5-7cb2-45e0-9a4a-20be4ef2efbb/220x330",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/1/3/5113-lawrence-of-arabia-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    
      "imdb": {
        "id": "tt0056172",
        "rating": 8.3,
        "genres": ["Adventure", "Biography", "Drama"]
      },
      "kinopoisk": {
        "id": "40891",
        "rating": 8.5,
        "genres": ["исторический", "драма"],
        "description": "Эпическая биография Т.Э. Лоуренса, британского офицера, который возглавил арабское восстание против Османской империи во время Первой мировой войны."
      },
      "letterboxd": {
        "id": "lawrence-of-arabia",
        "rating": 4.3
      }
  },
  {
    "id": 22,
    "title": "Бездельники",
    "originalTitle": "Mallrats",
    "year": 1995,
    "genres": ["Комедия"],
    "description": "Два друга проводят день в торговом центре после расставаний.",
    "posterUrl": "https://static.thcdn.com/images/large/original//productimg/1600/1600/13462874-2805163343336227.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/3/0/0/5300-mallrats-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    
      "imdb": {
        "id": "tt0113749",
        "rating": 6.8,
        "genres": ["Comedy"]
      },
      "kinopoisk": {
        "id": "40892",
        "rating": 7.0,
        "genres": ["комедия"],
        "description": "Два друга проводят день в торговом центре после того, как их девушки бросают их, и попадают в череду абсурдных ситуаций."
      },
      "letterboxd": {
        "id": "mallrats",
        "rating": 3.3
      }
  },
  {
    "id": 23,
    "title": "Сквозь горизонт",
    "originalTitle": "Event Horizon",
    "year": 1997,
    "genres": ["Ужасы", "Фантастика"],
    "description": "Космический корабль возвращается из другого измерения.",
    "posterUrl": "https://m.media-amazon.com/images/I/61x9odTJjPL._UF1000,1000_QL80_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/3/0/5/5305-event-horizon-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0119081",
      "rating": 6.6,
      "genres": ["Horror", "Sci-Fi", "Thriller"]
    },
    "kinopoisk": {
      "id": "40893",
      "rating": 6.8,
      "genres": ["ужасы", "фантастика"],
      "description": "В 2047 году спасательная команда отправляется на поиски пропавшего корабля 'Event Horizon', который неожиданно появился на орбите Нептуна после семи лет отсутствия. На борту они обнаруживают следы ужасных событий."
    },
    "letterboxd": {
      "id": "event-horizon",
      "rating": 3.3
    }
  },
  {
    "id": 24,
    "title": "Специалист",
    "originalTitle": "The Specialist",
    "year": 1994,
    "genres": ["Боевик", "Триллер"],
    "description": "Профессиональный киллер и его бывшая коллега мстят мафии.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/ru/6/69/The_Specialist_Poster.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/8/1/5181-the-specialist-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0111255",
      "rating": 5.6,
      "genres": ["Action", "Thriller"]
    },
    "kinopoisk": {
      "id": "40894",
      "rating": 6.0,
      "genres": ["боевик", "триллер"],
      "description": "Экс-агент ЦРУ Рэй Куик специализируется на взрывах. Когда к нему обращается женщина с просьбой помочь отомстить мафии за убийство родителей, он соглашается, не подозревая, что это ловушка."
    },
    "letterboxd": {
      "id": "the-specialist",
      "rating": 2.7
    }
  },
  {
    "id": 25,
    "title": "Адвокат дьявола",
    "originalTitle": "The Devil's Advocate",
    "year": 1997,
    "genres": ["Фэнтези", "Триллер", "Драма"],
    "description": "Молодой адвокат узнаёт, что его босс - сам дьявол.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/en/3/3f/Devilsadvocate.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/3/0/6/5306-the-devils-advocate-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0118971",
      "rating": 7.5,
      "genres": ["Drama", "Horror", "Thriller"]
    },
    "kinopoisk": {
      "id": "40895",
      "rating": 7.8,
      "genres": ["фэнтези", "триллер", "драма"],
      "description": "Молодой адвокат Кевин Ломакс получает предложение работы в престижной нью-йоркской фирме. Вскоре он понимает, что его босс Джон Милтон - не кто иной, как сам дьявол."
    },
    "letterboxd": {
      "id": "the-devils-advocate",
      "rating": 3.6
    },
    "vlcProtocolLink": "vlc://L:/Movies/1990th/The.Devil's.Advocate.1997.UNRATED.720p.Bluray.10xRus.Ukr.Eng.HDCLUB.mkv",
    "filePath": "L:\\Movies\\1990th\\The.Devil's.Advocate.1997.UNRATED.720p.Bluray.10xRus.Ukr.Eng.HDCLUB.mkv"
  },
  {
    "id": 26,
    "title": "Переговорщик",
    "originalTitle": "The Negotiator",
    "year": 1998,
    "genres": ["Триллер", "Криминал"],
    "description": "Лучший переговорщик Чикаго берет заложников, чтобы доказать свою невиновность.",
    "posterUrl": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p21443_p_v13_aj.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/3/0/7/5307-the-negotiator-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0120768",
      "rating": 7.3,
      "genres": ["Action", "Crime", "Drama"]
    },
    "kinopoisk": {
      "id": "40896",
      "rating": 7.6,
      "genres": ["триллер", "криминал"],
      "description": "Лучший переговорщик полиции Чикаго Дэнни Роман, обвиненный в убийстве напарника и коррупции, берет в заложники сотрудников внутреннего расследования, чтобы доказать свою невиновность."
    },
    "letterboxd": {
      "id": "the-negotiator",
      "rating": 3.4
    }
  },
  {
    "id": 27,
    "title": "Невиновный",
    "originalTitle": "Wrongfully Accused",
    "year": 1998,
    "genres": ["Комедия"],
    "description": "Пародия на триллеры с Лесли Нильсеном.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzA1YzFlOTEtOTkzZC00MzE3LWFlYmEtYThmMzVmYjQ5ZjgxXkEyXkFqcGc@._V1_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/3/0/8/5308-wrongfully-accused-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0120483",
      "rating": 5.7,
      "genres": ["Comedy"]
    },
    "kinopoisk": {
      "id": "40897",
      "rating": 6.0,
      "genres": ["комедия"],
      "description": "Пародия на триллеры в исполнении Лесли Нильсена. Герой оказывается в центре заговора и вынужден скрываться, доказывая свою невиновность."
    },
    "letterboxd": {
      "id": "wrongfully-accused",
      "rating": 2.8
    }
  },
  {
    "id": 28,
    "title": "Гудзонский ястреб",
    "originalTitle": "Hudson Hawk",
    "year": 1991,
    "genres": ["Комедия", "Боевик"],
    "description": "Вор-джентльмен втянут в авантюру с похищением произведений искусства.",
    "posterUrl": "https://ir.ozone.ru/s3/multimedia-n/c1000/6682654571.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/8/3/5183-hudson-hawk-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0102070",
      "rating": 5.7,
      "genres": ["Action", "Adventure", "Comedy"]
    },
    "kinopoisk": {
      "id": "40898",
      "rating": 6.2,
      "genres": ["комедия", "боевик"],
      "description": "Вор-джентльмен Эдди 'Ястреб' Хадсон выходит из тюрьмы и сразу же втягивается в авантюру по похищению произведений искусства Леонардо да Винчи для таинственных заказчиков."
    },
    "letterboxd": {
      "id": "hudson-hawk",
      "rating": 2.9
    }
  },
  {
    "id": 29,
    "title": "Джерри Магуайер",
    "originalTitle": "Jerry Maguire",
    "year": 1996,
    "genres": ["Драма", "Комедия", "Спорт"],
    "description": "Спортивный агент начинает бизнес с одним клиентом.",
    "posterUrl": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p18815_p_v10_aa.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/3/0/9/5309-jerry-maguire-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0116695",
      "rating": 7.3,
      "genres": ["Comedy", "Drama", "Romance"]
    },
    "kinopoisk": {
      "id": "40899",
      "rating": 7.6,
      "genres": ["драма", "комедия", "спорт"],
      "description": "Спортивный агент Джерри Магуайер теряет работу после того, как публикует манифест о честности в спортивном бизнесе. Единственный, кто остается с ним - футболист Род Тидвелл и влюбленная в него секретарша."
    },
    "letterboxd": {
      "id": "jerry-maguire",
      "rating": 3.5
    }
  },
  {
    "id": 30,
    "title": "История о нас",
    "originalTitle": "The Story of Us",
    "year": 1999,
    "genres": ["Драма", "Мелодрама"],
    "description": "Супруги анализируют 15 лет брака перед возможным разводом.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/ru/thumb/3/36/The_Story_of_Us.jpg/250px-The_Story_of_Us.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/3/1/0/5310-the-story-of-us-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0160916",
      "rating": 6.3,
      "genres": ["Comedy", "Drama", "Romance"]
    },
    "kinopoisk": {
      "id": "40900",
      "rating": 6.5,
      "genres": ["драма", "мелодрама"],
      "description": "Бен и Кэти Джордан проводят лето отдельно друг от друга, размышляя о 15 годах брака и решая, стоит ли им продолжать отношения или подать на развод."
    },
    "letterboxd": {
      "id": "the-story-of-us",
      "rating": 3.0
    }
  },
  {
    "id": 31,
    "title": "Казино",
    "originalTitle": "Casino",
    "year": 1995,
    "genres": ["Криминал", "Драма"],
    "description": "Скорсезе показывает подпольную жизнь Лас-Вегаса 1970-х.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMDRlZWZjZjYtYzY2NS00ZWVjLTkwYzAtZTA2ZDAzMGRiYmYwXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/3/1/1/5311-casino-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0112641",
      "rating": 8.2,
      "genres": ["Crime", "Drama"]
    },
    "kinopoisk": {
      "id": "40901",
      "rating": 8.4,
      "genres": ["криминал", "драма"],
      "description": "Лас-Вегас, 1970-е. Сэм 'Ас' Ротштейн управляет казино 'Танжерс' для мафии. Его друг Ники Санторо обеспечивает безопасность, но их отношения осложняются, когда Сэм женится на бывшей проститутке Джинджер."
    },
    "letterboxd": {
      "id": "casino",
      "rating": 4.1
    }
  },
  {
    "id": 32,
    "title": "Кикбоксер",
    "originalTitle": "Kickboxer",
    "year": 1989,
    "genres": ["Боевик"],
    "description": "Американец едет в Таиланд, чтобы отомстить за брата.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/en/b/b6/Kickboxer_poster.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/8/4/5184-kickboxer-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0097659",
      "rating": 6.8,
      "genres": ["Action"]
    },
    "kinopoisk": {
      "id": "40902",
      "rating": 7.1,
      "genres": ["боевик"],
      "description": "Курт Слоан едет в Таиланд, чтобы отомстить за жестокое избиение своего брата Эрика, чемпиона по кикбоксингу, которое организовал местный боец Тонг По."
    },
    "letterboxd": {
      "id": "kickboxer",
      "rating": 3.2
    }
  },
  {
    "id": 33,
    "title": "Мэверик",
    "originalTitle": "Maverick",
    "year": 1994,
    "genres": ["Комедия", "Вестерн"],
    "description": "Ловкий игрок в покер стремится попасть на крупный турнир.",
    "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4303601/7bbe88eb-2f2d-41bd-be84-a6f98cd781e3/220x330",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/8/5/5185-maverick-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0110478",
      "rating": 7.0,
      "genres": ["Action", "Adventure", "Comedy"]
    },
    "kinopoisk": {
      "id": "40903",
      "rating": 7.3,
      "genres": ["комедия", "вестерн"],
      "description": "Бретт Мэверик - ловкий игрок в покер, который стремится собрать деньги для участия в крупном турнире. В пути он встречает красивую мошенницу Аннабелль и загадочного маршала."
    },
    "letterboxd": {
      "id": "maverick",
      "rating": 3.3
    }
  },
  {
    "id": 34,
    "title": "Последний бойскаут",
    "originalTitle": "The Last Boy Scout",
    "year": 1991,
    "genres": ["Боевик"],
    "description": "Частный детектив и бывший футболист расследуют убийство.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/en/0/0d/Last_boy_scout.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/8/6/5186-the-last-boy-scout-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0102266",
      "rating": 7.0,
      "genres": ["Action", "Comedy", "Crime"]
    },
    "kinopoisk": {
      "id": "40904",
      "rating": 7.3,
      "genres": ["боевик"],
      "description": "Частный детектив Джо Халленбек и бывший футболист Джимми Дикс вынуждены объединиться, чтобы расследовать убийство подруги Джимми и раскрыть коррупционный заговор в профессиональном футболе."
    },
    "letterboxd": {
      "id": "the-last-boy-scout",
      "rating": 3.4
    }
  },
     {
    "id": 35,
    "title": "Правдивая ложь",
    "originalTitle": "True Lies",
    "year": 1994,
    "genres": ["Боевик", "Комедия"],
    "description": "Секретный агент скрывает работу от жены.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/en/8/81/True_Lies_poster.png",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/3/1/0/5310-true-lies-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0111503",
      "rating": 7.2,
      "genres": ["Action", "Comedy"]
    },
    "kinopoisk": {
      "id": "462",
      "rating": 7.9,
      "genres": ["Боевик", "Комедия"],
      "description": "Гарри — супершпион, работающий на американскую разведку. Он скрывает свою истинную профессию от жены Хелен, которая считает его скучным продавцом компьютеров. Когда Гарри узнаёт, что Хелен флиртует с подозрительным мужчиной, он использует все свои навыки, чтобы разоблачить его."
    },
    "letterboxd": {
      "id": "true-lies",
      "rating": 3.5
    }
  },
  {
    "id": 36,
    "title": "Рождённый четвёртого июля",
    "originalTitle": "Born on the Fourth of July",
    "year": 1989,
    "genres": ["Военный", "Драма"],
    "description": "История ветерана Вьетнама, ставшего антивоенным активистом.",
    "posterUrl": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p12039_p_v8_ag.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/8/3/9/3839-born-on-the-fourth-of-july-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0096969",
      "rating": 7.2,
      "genres": ["Biography", "Drama", "War"]
    },
    "kinopoisk": {
      "id": "460",
      "rating": 7.7,
      "genres": ["Военный", "Драма"],
      "description": "Рон Ковик — патриотично настроенный молодой человек, который отправляется во Вьетнам, полный желания служить своей стране. Однако война меняет его взгляды на жизнь, и он становится активным участником антивоенного движения."
    },
    "letterboxd": {
      "id": "born-on-the-fourth-of-july",
      "rating": 3.7
    }
  },
  {
    "id": 37,
    "title": "Совершенно секретно!",
    "originalTitle": "Top Secret!",
    "year": 1984,
    "genres": ["Комедия"],
    "description": "Пародия на шпионские фильмы и мюзиклы.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/ru/a/a4/Topsecretposter.PNG",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/6/1/4/3614-top-secret-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0088286",
      "rating": 7.2,
      "genres": ["Comedy"]
    },
    "kinopoisk": {
      "id": "461",
      "rating": 7.5,
      "genres": ["Комедия"],
      "description": "Американский рок-певец Ник Риверс приезжает с гастролями в Восточную Германию, где случайно оказывается вовлечён в деятельность подпольного сопротивления. Фильм пародирует шпионские боевики и мюзиклы эпохи холодной войны."
    },
    "letterboxd": {
      "id": "top-secret",
      "rating": 3.6
    }
  },
  {
    "id": 38,
    "title": "Шакал",
    "originalTitle": "The Jackal",
    "year": 1997,
    "genres": ["Боевик", "Триллер"],
    "description": "Наёмник планирует убийство, а ФБР пытается его остановить.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR167-BTRET9mlVW_wPP96zmWRXSZXrklfLGQ&s",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/9/5/6/3956-the-jackal-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0119395",
      "rating": 6.4,
      "genres": ["Action", "Thriller"]
    },
    "kinopoisk": {
      "id": "463",
      "rating": 7.1,
      "genres": ["Боевик", "Триллер"],
      "description": "Таинственный наёмник по прозвищу Шакал получает задание убить высокопоставленного американского чиновника. ФБР и российская мафия объединяются, чтобы остановить его, используя бывшего заключённого в качестве приманки."
    },
    "letterboxd": {
      "id": "the-jackal",
      "rating": 2.9
    }
  },
  {
    "id": 39,
    "title": "Матрица",
    "originalTitle": "The Matrix",
    "year": 1999,
    "genres": ["Фантастика", "Боевик"],
    "description": "Хакер Нео узнает, что его мир — виртуальная реальность, созданная машинами.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/2/8/1/0/2810-the-matrix-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0133093",
      "rating": 8.7,
      "genres": ["Action", "Sci-Fi"]
    },
    "kinopoisk": {
      "id": "464",
      "rating": 8.5,
      "genres": ["Фантастика", "Боевик"],
      "description": "Хакер по кличке Нео узнаёт страшную правду: мир, в котором он живёт, — это иллюзия, созданная разумными машинами, поработившими человечество. Нео присоединяется к группе повстанцев, которые борются против системы."
    },
    "letterboxd": {
      "id": "the-matrix",
      "rating": 4.2
    }
  },
  {
    "id": 40,
    "title": "Матрица: Перезагрузка",
    "originalTitle": "The Matrix Reloaded",
    "year": 2003,
    "genres": ["Фантастика", "Боевик"],
    "description": "Борцы за свободу Нео, Тринити и Морфеус продолжают руководить восстанием людей против Армии Машин. Для уничтожения системы репрессий и эксплуатации они вынуждены прибегнуть не только к арсеналу превосходного оружия, но и к своим выдающимся навыкам.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToSd1z1GN4cNZfx26_SFNxHNf-uQqsHY6XCw&s",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/2/8/1/1/2811-the-matrix-reloaded-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0234215",
      "rating": 7.2,
      "genres": ["Action", "Sci-Fi"]
    },
    "kinopoisk": {
      "id": "465",
      "rating": 7.8,
      "genres": ["Фантастика", "Боевик"],
      "description": "Нео, Тринити и Морфеус продолжают борьбу против машин. Нео пытается понять природу своих способностей, в то время как армия машин готовится к атаке на последний оплот человечества — город Зион."
    },
    "letterboxd": {
      "id": "the-matrix-reloaded",
      "rating": 3.5
    }
  },
  {
    "id": 41,
    "title": "Матрица: Революция",
    "originalTitle": "The Matrix Revolution",
    "year": 2003,
    "genres": ["Фантастика", "Боевик"],
    "description": "Пока армия Машин пытается уничтожить Зион, его жители из последних сил держат оборону. Но удастся ли им предотвратить полное вторжение в город кишащей орды беспощадных машин до того, как Нео соберет все свои силы и положит конец войне?",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSaaEyG3vUggx6ZfkoMymm0HDQX0Ooz0wfn9g&s",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/2/8/1/2/2812-the-matrix-revolutions-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0242653",
      "rating": 6.8,
      "genres": ["Action", "Sci-Fi"]
    },
    "kinopoisk": {
      "id": "466",
      "rating": 7.5,
      "genres": ["Фантастика", "Боевик"],
      "description": "Заключительная часть трилогии. Нео отправляется в Матрицу, чтобы встретиться с Архитектором, в то время как жители Зиона готовятся к последней битве с армией машин. Судьба человечества висит на волоске."
    },
    "letterboxd": {
      "id": "the-matrix-revolutions",
      "rating": 3.2
    }
  },
  {
    "id": 42,
    "title": "Горбатая гора",
    "originalTitle": "Brokeback Mountain",
    "year": 2005,
    "genres": ["Драма", "Мелодрама"],
    "description": "История сложных отношений двух ковбоев на протяжении 20 лет.",
    "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1773646/2c2deccc-a3f7-43ba-825b-e42aea5dbf2f/600x900",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/9/6/5/3965-brokeback-mountain-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0388795",
      "rating": 7.7,
      "genres": ["Drama", "Romance"]
    },
    "kinopoisk": {
      "id": "467",
      "rating": 7.9,
      "genres": ["Драма", "Мелодрама"],
      "description": "Двое молодых ковбоев, Эннис и Джек, встречаются на работе летом 1963 года и обнаруживают, что их связывает не только дружба. Их отношения продолжаются на протяжении многих лет, несмотря на социальные нормы и личные обязательства."
    },
    "letterboxd": {
      "id": "brokeback-mountain",
      "rating": 4.0
    }
  },
  {
    "id": 43,
    "title": "Где моя тачка, чувак?",
    "originalTitle": "Dude, Where's My Car?",
    "year": 2000,
    "genres": ["Комедия"],
    "description": "Два приятеля пытаются вспомнить, где оставили машину после вечеринки.",
    "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/ee0fdc7f-f81c-4106-8464-96b9efbaf9c7/600x900",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/9/6/6/3966-dude-where-s-my-car-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0242423",
      "rating": 5.5,
      "genres": ["Comedy"]
    },
    "kinopoisk": {
      "id": "468",
      "rating": 6.3,
      "genres": ["Комедия"],
      "description": "Джесси и Честер просыпаются после бурной вечеринки и не могут вспомнить, где оставили свою машину. Их поиски превращаются в череду абсурдных приключений с участием инопланетян, стриптизёрш и культистов."
    },
    "letterboxd": {
      "id": "dude-wheres-my-car",
      "rating": 2.7
    }
  },
  {
    "id": 44,
    "title": "Фанатик",
    "originalTitle": "The Believer",
    "year": 2001,
    "genres": ["Триллер", "Драма"],
    "description": "История одержимого фаната, преследующего свою жертву.",
    "posterUrl": "https://www.kino-teatr.ru/movie/posters/big/4/0/27404.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/9/6/7/3967-the-believer-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0247199",
      "rating": 7.1,
      "genres": ["Drama", "Thriller"]
    },
    "kinopoisk": {
      "id": "469",
      "rating": 7.3,
      "genres": ["Триллер", "Драма"],
      "description": "Дэнни Бэлнт — молодой еврей, который становится неонацистом. Его внутренний конфликт и ненависть к самому себе приводят к трагическим последствиям. Фильм основан на реальной истории."
    },
    "letterboxd": {
      "id": "the-believer",
      "rating": 3.6
    }
  },
  {
    "id": 45,
    "title": "Призрачный мир",
    "originalTitle": "Ghost World",
    "year": 2001,
    "genres": ["Драма", "Комедия"],
    "description": "Две подруги-подростки пытаются найти свое место в мире после школы.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTI4NzI5NzEwNl5BMl5BanBnXkFtZTcwNjc1NjQyMQ@@._V1_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/9/6/8/3968-ghost-world-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0162346",
      "rating": 7.3,
      "genres": ["Comedy", "Drama"]
    },
    "kinopoisk": {
      "id": "470",
      "rating": 7.5,
      "genres": ["Драма", "Комедия"],
      "description": "Энид и Ребекка — две подруги-подростки, которые только что окончили школу. Они цинично наблюдают за окружающим миром, но постепенно их пути расходятся, когда Энид начинает общаться с одиноким коллекционером пластинок."
    },
    "letterboxd": {
      "id": "ghost-world",
      "rating": 3.8
    }
  },
  {
    "id": 46,
    "title": "Гитлер капут!",
    "originalTitle": "Гитлер капут!",
    "year": 2008,
    "genres": ["Комедия", "Военный"],
    "description": "Сатирическая комедия о Великой Отечественной войне.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaDrW4ycsLcgxCYCONEbdsYkbI6AKFk0zEaw&s",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/9/6/9/3969-hitler-kaput-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt1230165",
      "rating": 5.2,
      "genres": ["Comedy", "War"]
    },
    "kinopoisk": {
      "id": "471",
      "rating": 6.1,
      "genres": ["Комедия", "Военный"],
      "description": "Сатирическая комедия о Великой Отечественной войне, где советские разведчики внедряются в ближайшее окружение Гитлера. Фильм пародирует как советские, так и немецкие военные фильмы."
    },
    "letterboxd": {
      "id": "hitler-kaput",
      "rating": 2.5
    }
  },
  {
    "id": 47,
    "title": "Царство небесное",
    "originalTitle": "Kingdom of Heaven",
    "year": 2005,
    "genres": ["Исторический", "Драма", "Военный"],
    "description": "Эпическая история о крестоносце Балиане во времена Крестовых походов.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyQPImB_GQzfZfxVHlS4mKzRv13hZ5uuGtJw&s",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/9/7/0/3970-kingdom-of-heaven-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0320661",
      "rating": 7.2,
      "genres": ["Adventure", "Drama", "History"]
    },
    "kinopoisk": {
      "id": "472",
      "rating": 7.6,
      "genres": ["Исторический", "Драма", "Военный"],
      "description": "XII век. Балиан, французский кузнец, после смерти жены отправляется в Иерусалим, где становится защитником города во время осады крестоносцами. Ему предстоит сделать трудный выбор между верой и долгом."
    },
    "letterboxd": {
      "id": "kingdom-of-heaven",
      "rating": 3.7
    }
  },
  {
    "id": 48,
    "title": "Дорожное приключение",
    "originalTitle": "Road Trip",
    "year": 2000,
    "genres": ["Комедия"],
    "description": "Группа студентов отправляется в безумное путешествие через всю страну.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/ru/d/d9/%D0%94%D0%BE%D1%80%D0%BE%D0%B6%D0%BD%D1%8B%D0%B5_%D0%BF%D1%80%D0%B8%D0%BA%D0%BB%D1%8E%D1%87%D0%B5%D0%BD%D0%B8%D1%8F_-_%D0%BF%D0%BE%D1%81%D1%82%D0%B5%D1%80.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/9/7/1/3971-road-trip-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0215129",
      "rating": 6.4,
      "genres": ["Comedy"]
    },
    "kinopoisk": {
      "id": "473",
      "rating": 6.7,
      "genres": ["Комедия"],
      "description": "Группа студентов колледжа отправляется в безумное путешествие через всю страну, чтобы вернуть компрометирующую видеокассету, которую случайно отправили девушке одного из них. По пути их ждут невероятные приключения."
    },
    "letterboxd": {
      "id": "road-trip",
      "rating": 2.9
    }
  },
  {
    "id": 49,
    "title": "Самый лучший фильм",
    "originalTitle": "Самый лучший фильм",
    "year": 2007,
    "genres": ["Комедия", "Пародия"],
    "description": "Пародия на российское кино и телевидение 2000-х годов.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/ru/e/e4/%D0%9F%D0%BE%D1%81%D1%82%D0%B5%D1%80_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%D0%B0_%C2%AB%D0%A1%D0%B0%D0%BC%D1%8B%D0%B9_%D0%BB%D1%83%D1%87%D1%88%D0%B8%D0%B9_%D1%84%D0%B8%D0%BB%D1%8C%D0%BC%C2%BB.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/9/7/2/3972-samyj-luchshij-film-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt1230166",
      "rating": 4.5,
      "genres": ["Comedy"]
    },
    "kinopoisk": {
      "id": "474",
      "rating": 5.8,
      "genres": ["Комедия", "Пародия"],
      "description": "Пародийный фильм, высмеивающий клише российского кино и телевидения 2000-х годов. Главный герой — простой парень, который случайно становится звездой, но его слава оказывается мимолётной."
    },
    "letterboxd": {
      "id": "samyj-luchshij-film",
      "rating": 2.1
    }
  },
  {
    "id": 50,
    "title": "Отступники",
    "originalTitle": "The Departed",
    "year": 2006,
    "genres": ["Криминал", "Триллер", "Драма"],
    "description": "Двойной агент в полиции и полицейский под прикрытием в мафии пытаются вычислить друг друга.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTI1MTY2OTIxNV5BMl5BanBnXkFtZTYwNjQ4NjY3._V1_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/9/7/3/3973-the-departed-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0407887",
      "rating": 8.5,
      "genres": ["Crime", "Drama", "Thriller"]
    },
    "kinopoisk": {
      "id": "475",
      "rating": 8.3,
      "genres": ["Криминал", "Триллер", "Драма"],
      "description": "Бостон, 2000-е годы. Полиция внедряет своего агента в ирландскую мафию, в то время как мафия внедряет своего человека в полицию. Оба лагеря пытаются вычислить предателя в своих рядах, что приводит к кровавой развязке."
    },
    "letterboxd": {
      "id": "the-departed",
      "rating": 4.1
    }
  },
  {
    "id": 51,
    "title": "Ванильное небо",
    "originalTitle": "Vanilla Sky",
    "year": 2001,
    "genres": ["Фантастика", "Триллер", "Драма"],
    "description": "Богатый издатель переживает крушение реальности после автомобильной аварии.",
    "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/d2d4a29d-cd66-4ac3-bb6e-57fb51de26ab/600x900",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/9/7/4/3974-vanilla-sky-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0259711",
      "rating": 6.9,
      "genres": ["Fantasy", "Mystery", "Romance"]
    },
    "kinopoisk": {
      "id": "476",
      "rating": 7.4,
      "genres": ["Фантастика", "Триллер", "Драма"],
      "description": "Дэвид Эймс — богатый и успешный издатель, чья жизнь меняется после автомобильной аварии, устроенной его ревнивой любовницей. Он оказывается в странном мире, где реальность смешивается с кошмарами, и пытается понять, что с ним происходит."
    },
    "letterboxd": {
      "id": "vanilla-sky",
      "rating": 3.5
    }
  },
  {
    "id": 52,
    "title": "Вавилон",
    "originalTitle": "Babel",
    "year": 2006,
    "genres": ["Драма"],
    "description": "Переплетенные истории людей из разных стран, связанные одним выстрелом.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwup8wFe6TH4iF1zUBMd94Deka4ayhAuwopQ&s",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/9/7/5/3975-babel-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0449467",
      "rating": 7.4,
      "genres": ["Drama"]
    },
    "kinopoisk": {
      "id": "477",
      "rating": 7.6,
      "genres": ["Драма"],
      "description": "Четыре истории, происходящие в разных уголках мира, связаны между собой случайным выстрелом из винтовки. Фильм исследует тему непонимания между людьми разных культур и языков."
    },
    "letterboxd": {
      "id": "babel",
      "rating": 3.7
    }
  },
  {
    "id": 53,
    "title": "Возвращение",
    "originalTitle": "Cashback",
    "year": 2006,
    "genres": ["Драма", "Мелодрама", "Комедия", "Фэнтези"],
    "description": "Переживая болезненное расставание с любимой, Бен впадает в бессонницу. В освободившиеся 8 часов он начинает работать в ночную смену в местном супермаркете, где главной задачей сотрудников является убивание времени. Неожиданно Бен обнаруживает в себе необычную способность останавливать время, что даёт толчок его художественному таланту.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/ru/7/78/Cashback.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/9/7/6/3976-cashback-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0460740",
      "rating": 7.1,
      "genres": ["Comedy", "Drama", "Fantasy"]
    },
    "kinopoisk": {
      "id": "478",
      "rating": 7.3,
      "genres": ["Драма", "Мелодрама", "Комедия", "Фэнтези"],
      "description": "После болезненного расставания с девушкой Бен страдает от бессонницы. Чтобы занять себя, он устраивается на ночную смену в супермаркет, где обнаруживает удивительную способность останавливать время. Это даёт ему возможность по-новому взглянуть на жизнь и искусство."
    },
    "letterboxd": {
      "id": "cashback",
      "rating": 3.4
    }
  },
  {
    "id": 54,
    "title": "Константин: Повелитель тьмы",
    "originalTitle": "Constantine",
    "year": 2005,
    "genres": ["Фантастика", "Ужасы", "Фэнтези"],
    "description": "Экзорцист Джон Константин сражается с демонами между небом и адом.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZKHcEG-Uo5kgibB7M62hLXu4PhUe-dzaPlQ&s",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/9/7/7/3977-constantine-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0360486",
      "rating": 7.0,
      "genres": ["Action", "Fantasy", "Horror"]
    },
    "kinopoisk": {
      "id": "479",
      "rating": 7.2,
      "genres": ["Фантастика", "Ужасы", "Фэнтези"],
      "description": "Джон Константин — экзорцист, который может видеть ангелов и демонов, скрывающихся среди людей. Когда полицейская Анджела Додсон обращается к нему за помощью в расследовании смерти своей сестры, Константин оказывается втянут в битву между небом и адом."
    },
    "letterboxd": {
      "id": "constantine",
      "rating": 3.3
    }
  },
    {
    "id": 55,
    "title": "Самый лучший фильм 3-ДЭ",
    "originalTitle": "Самый лучший фильм 3-ДЭ",
    "year": 2011,
    "genres": ["Комедия", "Пародия"],
    "description": "Продолжение пародийной комедии о российском кино. Фильм высмеивает клише и штампы современного кинематографа через гротескные ситуации и нелепых персонажей.",
    "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/6ddcc17e-1b7e-4662-9cc3-bd6bdce78020/600x900",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/7/0/8/5708-the-best-movie-3d-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt1937109",
      "rating": 3.2,
      "genres": ["Comedy", "Parody"]
    },
    "kinopoisk": {
      "id": "462682",
      "rating": 4.1,
      "genres": ["Комедия", "Пародия"]
    },
    "letterboxd": {
      "id": "the-best-movie-3d",
      "rating": 2.8,
      "genres": ["Comedy"]
    }
  },
  {
    "id": 56,
    "title": "Шестой день",
    "originalTitle": "The 6th Day",
    "year": 2000,
    "genres": ["Фантастика", "Боевик"],
    "description": "В будущем клонирование людей запрещено, но герой обнаруживает, что его уже клонировали. Фильм исследует этические дилеммы клонирования через призму экшн-сюжета.",
    "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4486454/bf6ee782-f65a-40e7-992a-231ce1a88cbe/600x900",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/8/4/5184-the-6th-day-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0216216",
      "rating": 5.9,
      "genres": ["Action", "Sci-Fi", "Thriller"]
    },
    "kinopoisk": {
      "id": "588",
      "rating": 6.8,
      "genres": ["Фантастика", "Боевик", "Триллер"]
    },
    "letterboxd": {
      "id": "the-6th-day",
      "rating": 5.7,
      "genres": ["Science Fiction", "Action"]
    }
  },
  {
    "id": 57,
    "title": "Бегущий по лезвию 2049",
    "originalTitle": "Blade Runner 2049",
    "year": 2017,
    "genres": ["Фантастика", "Драма", "Детектив"],
    "description": "Продолжение культового фильма о будущем, где люди сосуществуют с репликантами. Визуально потрясающий нео-нуар с философскими вопросами о природе человечности.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_FMjpg_UX1000_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/3/9/3/6/33936-blade-runner-2049-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt1856101",
      "rating": 8.0,
      "genres": ["Action", "Drama", "Mystery"]
    },
    "kinopoisk": {
      "id": "589290",
      "rating": 7.5,
      "genres": ["Фантастика", "Драма", "Детектив"]
    },
    "letterboxd": {
      "id": "blade-runner-2049",
      "rating": 4.1,
      "genres": ["Science Fiction", "Drama"]
    }
  },
  {
    "id": 58,
    "title": "Яркость",
    "originalTitle": "Bright",
    "year": 2017,
    "genres": ["Фэнтези", "Боевик", "Криминал"],
    "description": "В альтернативном Лос-Анджелесе люди, орки и эльфы сосуществуют, а полицейский-человек и его напарник-орк находят магический артефакт. Необычный микс полицейского боевика и фэнтези.",
    "posterUrl": "https://kinopoisk-ru.clstorage.net/d29GX8402/d97dbfeSwH/uZUJqETOMio-oYTfxTY6MG86xPmFHVRK40RBCc3rHuZVUrzHuR6fk3ztRYwNoMEnVlXssEymWJZBaCLfTm8zS_vBS60bhX0lP__Ll5E7Zm0nJc-rkAEcHKdZUlSWtDHWfWCVtZ8ht7NQjAPOQ7eafAAV_rxG7FfbVn5QuAwORAKdmw-MW-hqFhyE8vP8FAkDUlPk_6VdQX36HGYrxfwn-H5Dub-VGYmjfIM43nXKkGEoDs2kXdV_lmZ8Tq5WJWkhup4NolL3eBMukMjvyRE5PFVBwdKDQndu3RNoEcvwI-dJTaSIlhi4lXKDMM132J92HCjrgUfddr5lamaIYyRMLYSNGqJ9-0kjFIPgxMkcKARFctjwtnpiae04TQrt4DT9aVa1uoMik5FpmjrtRPyefAIK3JBA3UWDcFxGjUcaZTaovSyrUux2HSia58DQOQoCb17YyqdRd0TPImka6ewj-FBLtIKFMZOsXaY66VPBh14HH8SVf81utmhYbZ5jO3kPi4UPp3z3RDUUmuXA4QoZG09OxMaDU0dt0Q55A-DIPd9-Ra6ZlBq7mEiWJdZd7YhPAzDAhH_SWbNoeF--fBhXNbaGF7Ng_EgFE5rP5ccvNDJxX_zIiH5aXv0ETBLW1TvPXUeTn6g0lKdXswPPePq9TyAL54l8xlmadVhKiUA3VieYvRuCR89wExuH8vLvFSoSZW7v0KZfXWHuAlIpyckI6G5LvLqDIruXdKgB63nNglI4OOWcdddmhElZWaxLHVkMnIE0s0XKfTQ_t_DWwx8yEXhYxMWwQWJX2QhBFeL-G8Bkb7-EuSSagneVOsx23IBACB_fu0LLfaVDbHyqTQ9BEbeTEL5GzHsvPpTY9vQrCDdmUcHln1BUTdgsUDLkwyzGSVmRqLI-jZJdtAPjcfaUXQI9y4po8HqaUkxcr0oaQQurpT-xR-R5Niurze_gNy0CR3Hr7r10RXnGMEMS88As321VhZK5IZW3To0a03_9mUQnEf-cfdZFnlVse7FpMEYJi5s2hlX2fx01uPjOwAAdB15B49aEWnpK7QtSEub0JvpzS72MgCCIoGGXMslF1ppvLzH0qWjoW69QRlylQQNlCoG9LKVU214FD4rv694gByNdeNvdnH12XOE4fCLa6Bv_X3axhqohurVMsTLRd_GaXCY5-It_zWymS2hWingidheqnDKEXMl3DRCm8_zrAR0RWljD5IF2eGblAUgJ6ugc7n9QmZCUNJSSapQi10HSoV8DL-a0Rc9RkH5AbYZeGUcAiL0cmEznUxYKvujOyxkwBW9D48SWQHpV9iRtEfrQCtBJToOokwCGv3OENfVf3qZfOh_fvWPyd4VQfkurezV1DYWAH5tM6H8zPpT4x8ALChxcfsfYmlVAYdUBRDjo7wv8WEuHqb0ymrVQlAH_eNWFUgMY35loxWyycVlWiksyQBSitQSbU_9JCBa75cvtLxAnX1rr77J7Un79EXMu78cXx31JpJ2IPo6_bps931b-pV4XPsOKR9N5mV1BVoJ_EGUquJYxmGbQTiYYmP33yTU9AGBxwO6XWXlj5z9PLu7KI_hTa7yypyOWhEiSANVR9oVPNwjrgkXyX5FLZkOgbQFqA6qVGIxB_FATP5fO7-opMQNQQOnzuEhZZ9YCZxL57wvGRFWdgJM2uZxzsxvNVtOWfwQJ5KlbzXaEV0hAqm4sVC-_gSewRvJrIAio3dT2Li8EVX7I6qVGd1jWAXAoxuk8_HtsnL6fA5WQb6EY8WTSl0wYLuGwVex_lElGYoJ8NGQfrpszkHPfVBM0hMP-0D4NNGdQwPO7cHdawRpkBenjAOFRVaOBigWRsE2uGddy15RDKTfIpFf-eZlqbEuGQSJBIJafJYdVyk4GDJ760M8cKjxBVf33klt1de4ZWznO1QnKTmKupbw1jrZ_pAz0fNq0bBwWwKBozU-WaXpCtWIfQAWimRekcPpfMT-o2cPMIicwckfA0YddXH7dGmw6xPIewlhjuo2YOZyabI0uzEPwn1cGDumcf8htt2hCZqFHNHofqqcas1DLSCkdlsD2zBk4DV5O5N6QVWpj8wNTKfrRFM9mR7KAqgGko06uPtJS1LlsIi_NvE3Reb5qZGW3fj1gKYutOJ11814lMYTw5M8rFhZdd-HvhVR0edozbhrT_h3jcW64i5gDnLd7iBvueN-QWwoC4blY5WSEc0l3vkEsbgq4th-mUvpoAhm8yfXtCyY7UV_F6bhxRlXlC34Jyc4c2HJxjY-TMoqgWpcs9Uf6l0YrKvq1ZuhZg1BNfqFUMlELqrE5u2HMaBE7isD_0DYNME526eiEdH1C_QtBJtLTLNpsaK2skzqnnF60Gete1YdEAxP6smnxeqd0TV2yQBtoAqOyGYBY62wOFqPE7dI_Jjh_XcXFtFBFR_wGcjn26yTqZmSRq6YGhrZXhwf3cdimcQEKzJhqyXGHSmVJpV80aiqOsxuFXO1LCiC_-MLpGiwwR0zB5r1dUmHNJ1MJ9Ocg_lt4paeEO6igSqAGy03sgnIPPeiYQv1EnkFFaKxjB1IjtZI3u0frTg4yn-7-8D4vI09k-N2Qelph7xFlFsb2OcNlZLGhnSK3pF6QMdVw6LRWHA3HilnsSqBsTF2BfgNoE4eMDKdm-2UVIoDJ58oCCy9PU_jIlFBBRNACcwPG8Qv4a3SEqKoUs5FTrwzpUuOiZC85wpt4yV-vXWF3o3osZBedhAiqTv9wFR6B4_DIMBkveVnk8ZxGRnzbOVIszOUD3ERbo72mG7a6T6kn-3_vgWwlLOWhbup1sWxBe6BaBWspopIeo1Dbaz8tnfLk5jEYE05eyOqCZ0paxA1ZMvnUIOV_T5SPojmwkXKBAOtczL9_JzzWgGHqVLNFRGmVTS9pL6yhFYxSyXkUIojk3vQdLzl9TsjyoV1kf90ZXgzN0h74WGmPjZgYrKZ3kTHTdu-WUgILzZlc0E2UbVw",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/4/1/9/4/8/41948-bright-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt5519340",
      "rating": 6.3,
      "genres": ["Action", "Crime", "Fantasy"]
    },
    "kinopoisk": {
      "id": "1045582",
      "rating": 6.1,
      "genres": ["Фэнтези", "Боевик", "Криминал"]
    },
    "letterboxd": {
      "id": "bright-2017",
      "rating": 2.9,
      "genres": ["Fantasy", "Action"]
    }
  },
  {
    "id": 59,
    "title": "Из Парижа с любовью",
    "originalTitle": "From Paris with Love",
    "year": 2010,
    "genres": ["Боевик", "Криминал", "Триллер"],
    "description": "Молодой сотрудник посольства в Париже оказывается втянут в опасные операции вместе с безбашенным агентом. Динамичный боевик с Джоном Траволтой в главной роли.",
    "posterUrl": "https://kinopoisk-ru.clstorage.net/d29GX8402/d97dbfeSwH/uZUJqETOMio-oYTfxTY6MG86xPmFHVRK40RFFNerXLkMEeTf_0GfxCnyRIkFoMkgXEO55E2oDscRaGuGTzI3UP_HT_8Fjy8kY_2ZlpQgamAnS_XdsHBsYMUgbSnt8xn-Ekq-hL8DkZ1qqVrLQcauNTY96oFA7XmYcX1eoXoOVj6DoyuMcfN_EzWg-MvRFBUzb13b3pNcZmr9Hn0F4sgJyG9Ao6ykMImGU4EX-0PYuG8dEMmmRe9XkW5vW5NuNEoLhpMUi2PWUjUqluvs3hovPWNZxOmdQVFp_C9LC-LAGsp9T7SYghasnFuIP_hV8J5aHDXFmFb4V75iXmupfRxhC4uCLJtQz3AAEoPs3PU_NBtzTt7JhlBjfMYETxD7yjr5WU6-hqAhvZtbuwLtY9CbfiIc3rRmzl6RdWFVlWQbZRKuoCqxfM9KETmWwf7vGyQff1nb8JtRW3rVBHIkx8o-7mRXnIO1ObikS5A39Wf7iFoDAOeXXu1Sv25TfalkGWUjnbMzkWzTRjU7pujgwws9FltH_N6VS0Br_ixGMffVAeBIWI2Hmj2ppFSnMvVHyahFIC7dql31RqNlX02uZDNABbieGq9960g-FrvbzMk-LCBGQez9l3ZGV9ADeS7S8xjFX22NpKEapKdApxvoZ9yfeQ8vz4Rm-XeEVmdbpnkOVy2CgDq7TPhQEDe85N_PIBc_WnLLzptZY3zGLEkNyfE8xGhSkLySGLGuUZgF1GbPunIlIOSAWtZGhlNqfIJJDHMBiJg5pnrTRQYpg9LoxTMrFG1h48S_Wl1GwA1cDvTKG8t5UIKMtSKWmU2DJN5T6rx0Nzj5q0jyS4VVbGeDaiRTNryiH7hz1mUpOLXI6eEiDBJQVuXpiXRxTdoaTCTV8zTMU0Sfhpc2p7N2hBvPc8q5cyI447d-3USEfW5-llUxSiKghyqZU_xuCxyk_Pf9MSwFU1b8zYVgS0bFAmk37OoEwlhJhqO7ArGmULsfyFPtp1AIP-GXQNRzlm9oVYhGBGsCl7cvgGP0VjIym8_cxiAsEGdc2dObWFV_xB9-GPbCHvhzSq2rmwmEs26lLs15yrN4OxzinWbOUJdCSU2ydBNOHLetC4NazF0qFZfZ0PUOHCx7Ydz_plRfVcUtazXQwgbKVEqeopMFpqRLkifWV8CcQRoP_7ZH0HGfUGBFrVgPWSmWtzmEetRkNx6Z49TMOjcce2bN34B8SWvQA0wT9dIA_HdxnYeFG5meSa8R43_7kGchPuiUZv5tj35EXrdAFGsJjpotsWH0RCAom9DH6R8vDENw8-meZnFs5BFhCuXFIuJ7dp2-tSKQuHSJBM1B3b1CDQzlmVv9bo9xaHuDagRiApygNIJc0FgsPaHk5Mw2Bh58cd_4m2JwQtYNayn18SjFcFWQh7IitLNDkjPsZsCccgo5_L5u5m6QZl5Aq0UZbi-4ug-BePxvBBOz-8zcARAZVG3k3ZlBRHfaGWEX-s0I61t1nJOUPqecVYcYwH7AlEYoHMKkTdNtpUlZbqVmAVILopcovlPXbiExmObW8j0QGFlZ2_O7WWtYxwFaMfPwAuxTVY2zohavnnShENZZ1bZUORPrtk76eYJlR1uCaTJKKL6bK45i_nMOILji588VLA98ceXkhXhZbNIuQgrS6xrrdka9gKMZhIBLiAXKd9a8VxQtx6NaxUWFa3xotVYhcTS5hSyLXN9qEy6W3efMAhYwekbf27x5Z2DnAk4WwOgm2XdHjpyEHJ2OaoEV1Hn0lEUMHfeyQNFlsEZDW4l6P1sSqaccuXLXcw0Ylt_w1xY7H3B6wvGFRlh14QZuNM_pAM9yRIGtnTWJjHiHGPdT3ZB4GjjIikTHcpZTWU6xYAZ1DYuAFJ936nckM5Tw39QpBzhGc-nuskt8Q9EZaAbF_CPBf2SumLw9jbNLsRf0RdSjWyc57b5C9VGzY0h5glYlZg61jRisZddRMTW9--zXHgQyYWTh-LNfVGfdC0QV7N4b_lVPlYKkFLGkTpM29X3wt34MA_e2fPhGk1JfYaBoPFMOjpIlgGzzXiY9i-bCziEXDEJu7MaXV1lV5TN9N8_OBe9xaa6mhTCRlleHP_db86FHBRnBl3baaLZqSW2MegxBDby8PoNV9m8zPJX86_4cJCVtZ8DRvl1SZ-cLaQLp6znFekCZjqgclINjmgXuduGoeBQX4qRt_VORY39KpEI1UC-cjBOPfdJpDhmn0NTGDDc_XWb70qFoVmzWHX4j9twi-l9HhK-AB5i9bqcCzXLot20KKOO2attOolV_WYZ0PFoSoacYkFT-aDIcnMfMxjMYJEBW-cy4SHVs3jBCJ9XpPONwV4aHuQefsneEJulyy6R5IxHqv2n7dZtye0arXThIEKiMEKF_0kUCOKTCzcsABwB4XsnGtHRyWeIRaC7m9yDMfXazhaAxtbFPjwbXWt-zZgwTwpJo-XCfdFxCnUEEZyuNhhiZbtZmCzWz5PzqITcCdFrd-6hAfnvfP34zwfYc8ElSsIuXFbWZe7of3Hr-ulo_K8upSdVOhHJZRo9hElsyqYULkUbvXSYSu-Te3BcoMGVD4MW0VHhixiB6J_HBAs1NZJSYpzqngmq0IfFzy5dHOxH7m1fuUqVicl2ffjVCCJWhB5Fx70giOKDB4c8BPTBicdvLpGFxVfAkTyrO_D7vRnKmq5M_tqNPoS7AXuG1QxQd_4Ff6l-NZmddo38fVQqnswene_NxKi6n-er0IBI6dnn_5ItGZFn_IWQ2yNcswkpRrqGGGIy1bIsw8X7ttmM9EsG-SfxWk0J8d5BjDkEkprI7kHzfajQPq9_1wCsMD0daxt-fcVZd3SdPC-DwPOFpb72jliutumyqMth7_4N0FxDHsHr3eZFQblyfdhh7NoqFEaNs33IXNYX67NQsMjtBZNv4uWpUZ_w7eA7wwQTLSkaQhqEwtIdWsxXwY96FezsdxopD5U2ybHs",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/7/5/3/0/37530-from-paris-with-love-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt1179034",
      "rating": 6.5,
      "genres": ["Action", "Crime", "Thriller"]
    },
    "kinopoisk": {
      "id": "408878",
      "rating": 6.7,
      "genres": ["Боевик", "Криминал", "Триллер"]
    },
    "letterboxd": {
      "id": "from-paris-with-love",
      "rating": 3.0,
      "genres": ["Action", "Thriller"]
    }
  },
  {
    "id": 60,
    "title": "Ла-Ла Ленд",
    "originalTitle": "La La Land",
    "year": 2016,
    "genres": ["Мюзикл", "Драма", "Мелодрама"],
    "description": "История любви джазового музыканта и начинающей актрисы в современном Лос-Анджелесе. Визуально роскошный мюзикл-оммаж классике Голливуда.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/4/0/0/1/6/40016-la-la-land-0-600-0-900-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt3783958",
      "rating": 8.0,
      "genres": ["Comedy", "Drama", "Music"]
    },
    "kinopoisk": {
      "id": "841081",
      "rating": 7.8,
      "genres": ["Мюзикл", "Драма", "Мелодрама"]
    },
    "letterboxd": {
      "id": "la-la-land",
      "rating": 4.1,
      "genres": ["Musical", "Romance"]
    }
  },
    {
    "id": 61,
    "title": "Выстрел в пустоту",
    "originalTitle": "Shot Caller",
    "year": 2017,
    "genres": ["Криминал", "Драма", "Триллер"],
    "description": "Успешный бизнесмен попадает в тюрьму и вынужден стать криминальным авторитетом, чтобы выжить.",
    "posterUrl": "https://a.ltrbxd.com/resized/film-poster/2/6/9/1/8/9/269189-shot-caller-0-1000-0-1500-crop.jpg?v=bd5ee04662",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/2/6/9/1/8/9/269189-shot-caller-0-1000-0-1500-crop.jpg?v=bd5ee04662",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt4633690",
      "rating": 7.3,
      "genres": ["Crime", "Drama", "Thriller"]
    },
    "kinopoisk": {
      "id": "1045589",
      "rating": 7.4,
      "genres": ["Криминал", "Драма", "Триллер"],
      "description": "Успешный бизнесмен Джейкоб Харлон оказывается в тюрьме после случайного убийства. Чтобы выжить в жестоком мире за решеткой, он вынужден стать криминальным авторитетом. Фильм основан на реальных событиях."
    },
    "letterboxd": {
      "id": "shot-caller-2017",
      "rating": 3.5,
      "genres": ["Crime", "Drama", "Thriller"]
    },
  },
  {
    "id": 62,
    "title": "Остров проклятых",
    "originalTitle": "Shutter Island",
    "year": 2010,
    "genres": ["Детектив", "Триллер", "Драма"],
    "description": "Два американских маршала расследуют исчезновение пациентки из психиатрической лечебницы на отдалённом острове.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BYzhiNDkyNzktNTZmYS00ZTBkLTk2MDAtM2U0YjU1MzgxZjgzXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/1/3/3/8/31338-shutter-island-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt1130884",
      "rating": 8.2,
      "genres": ["Mystery", "Thriller"]
    },
    "kinopoisk": {
      "id": "462360",
      "rating": 8.1,
      "genres": ["Детектив", "Триллер", "Драма"],
      "description": "1954 год. Федеральные маршалы Тедди Дэниэлс и Чак Оул приезжают на остров Шаттер, где расположена психиатрическая лечебница для особо опасных преступников. Они расследуют исчезновение пациентки, но вскоре понимают, что на острове происходит нечто зловещее."
    },
    "letterboxd": {
      "id": "shutter-island-2010",
      "rating": 4.0,
      "genres": ["Mystery", "Thriller"]
    },
  },
  {
    "id": 63,
    "title": "Маяк",
    "originalTitle": "The Lighthouse",
    "year": 2019,
    "genres": ["Ужасы", "Драма", "Триллер"],
    "description": "Два смотрителя маяка в конце XIX века постепенно сходят с ума от изоляции и странных событий.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZmE0MGJhNmYtOWNjYi00Njc5LWE2YjEtMWMxZTVmODUwMmMxXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/4/2/2/8/4/42284-the-lighthouse-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt7984734",
      "rating": 7.5,
      "genres": ["Drama", "Fantasy", "Horror"]
    },
    "kinopoisk": {
      "id": "1219149",
      "rating": 7.1,
      "genres": ["Ужасы", "Драма", "Триллер"],
      "description": "1890-е годы. Двое смотрителей маяка — пожилой Томас Уэйк и молодой Эфраим Уинслоу — оказываются в изоляции на отдаленном острове. Постепенно их рассудок начинает давать сбои, а окружающая реальность становится все более пугающей."
    },
    "letterboxd": {
      "id": "the-lighthouse-2019",
      "rating": 4.1,
      "genres": ["Horror", "Drama"]
    },
  },
  {
    "id": 64,
    "title": "Невероятная жизнь Уолтера Митти",
    "originalTitle": "The Secret Life of Walter Mitty",
    "year": 2013,
    "genres": ["Приключения", "Драма", "Комедия"],
    "description": "Скромный сотрудник журнала отправляется в невероятное путешествие, чтобы найти пропавшую фотографию.",
    "posterUrl": "https://kinopoisk-ru.clstorage.net/d29GX8402/d97dbfeSwH/uZUJqETOMio-oYTfxTY6MG86xPmFHVRK40RBCc3rHuZVUrzHuR6fk3ztQI4DrcEjX1XtsRioBMYTPCKGGWFhS_vMG_0bhH9-av-dx5RraW0vJMv5wgscHKdZUlSWtDHWfWCVtZ8ht7NQjAPOQ7eafAAV_rxG7FfbVn5QuAwORAKdmw-MW-hqFhyE8vP8FAkDUlPk_6VdQX36HGYrxfwn-H5Dub-VGYmjfIM43nXKkGEoDs2kXdV_lmZ8Tq5WJWkhup4NolL3eBMukMjvyRE5PFVBwdKDQndu3RNoEcvwI-dJTaSIlhi4lXKDMM132J92HCjrgUfddr5lamaIYyRMLYSNGqJ9-0kjFIPgxMkcKARFctjwtnpiae04TQrt4DT9aVa1uoMik5FpmjrtRPyefAIK3JBA3UWDcFxGjUcaZTaovSyrUux2HSia58DQOQoCb17YyqdRd0TPImka6ewj-FBLtIKFMZOsXaY66VPBh14HH8SVf81utmhYbZ5jO3kPi4UPp3z3RDUUmuXA4QoZG09OxMaDU0dt0Q55A-DIPd9-Ra6ZlBq7mEiWJdZd7YhPAzDAhH_SWbNoeF--fBhXNbaGF7Ng_EgFE5rP5ccvNDJxX_zIiH5aXv0ETBLW1TvPXUeTn6g0lKdXswPPePq9TyAL54l8xlmadVhKiUA3VieYvRuCR89wExuH8vLvFSoSZW7v0KZfXWHuAlIpyckI6G5LvLqDIruXdKgB63nNglI4OOWcdddmhElZWaxLHVkMnIE0s0XKfTQ_t_DWwx8yEXhYxMWwQWJX2QhBFeL-G8Bkb7-EuSSagneVOsx23IBACB_fu0LLfaVDbHyqTQ9BEbeTEL5GzHsvPpTY9vQrCDdmUcHln1BUTdgsUDLkwyzGSVmRqLI-jZJdtAPjcfaUXQI9y4po8HqaUkxcr0oaQQurpT-xR-R5Niurze_gNy0CR3Hr7r10RXnGMEMS88As321VhZK5IZW3To0a03_9mUQnEf-cfdZFnlVse7FpMEYJi5s2hlX2fx01uPjOwAAdB15B49aEWnpK7QtSEub0JvpzS72MgCCIoGGXMslF1ppvLzH0qWjoW69QRlylQQNlCoG9LKVU214FD4rv694gByNdeNvdnH12XOE4fCLa6Bv_X3axhqohurVMsTLRd_GaXCY5-It_zWymS2hWingidheqnDKEXMl3DRCm8_zrAR0RWljD5IF2eGblAUgJ6ugc7n9QmZCUNJSSapQi10HSoV8DL-a0Rc9RkH5AbYZeGUcAiL0cmEznUxYKvujOyxkwBW9D48SWQHpV9iRtEfrQCtBJToOokwCGv3OENfVf3qZfOh_fvWPyd4VQfkurezV1DYWAH5tM6H8zPpT4x8ALChxcfsfYmlVAYdUBRDjo7wv8WEuHqb0ymrVQlAH_eNWFUgMY35loxWyycVlWiksyQBSitQSbU_9JCBa75cvtLxAnX1rr77J7Un79EXMu78cXx31JpJ2IPo6_bps931b-pV4XPsOKR9N5mV1BVoJ_EGUquJYxmGbQTiYYmP33yTU9AGBxwO6XWXlj5z9PLu7KI_hTa7yypyOWhEiSANVR9oVPNwjrgkXyX5FLZkOgbQFqA6qVGIxB_FATP5fO7-opMQNQQOnzuEhZZ9YCZxL57wvGRFWdgJM2uZxzsxvNVtOWfwQJ5KlbzXaEV0hAqm4sVC-_gSewRvJrIAio3dT2Li8EVX7I6qVGd1jWAXAoxuk8_HtsnL6fA5WQb6EY8WTSl0wYLuGwVex_lElGYoJ8NGQfrpszkHPfVBM0hMP-0D4NNGdQwPO7cHdawRpkBenjAOFRVaOBigWRsE2uGddy15RDKTfIpFf-eZlqbEuGQSJBIJafJYdVyk4GDJ760M8cKjxBVf33klt1de4ZWznO1QnKTmKupbw1jrZ_pAz0fNq0bBwWwKBozU-WaXpCtWIfQAWimRekcPpfMT-o2cPMIicwckfA0YddXH7dGmw6xPIewlhjuo2YOZyabI0uzEPwn1cGDumcf8htt2hCZqFHNHofqqcas1DLSCkdlsD2zBk4DV5O5N6QVWpj8wNTKfrRFM9mR7KAqgGko06uPtJS1LlsIi_NvE3Reb5qZGW3fj1gKYutOJ11814lMYTw5M8rFhZdd-HvhVR0edozbhrT_h3jcW64i5gDnLd7iBvueN-QWwoC4blY5WSEc0l3vkEsbgq4th-mUvpoAhm8yfXtCyY7UV_F6bhxRlXlC34Jyc4c2HJxjY-TMoqgWpcs9Uf6l0YrKvq1ZuhZg1BNfqFUMlELqrE5u2HMaBE7isD_0DYNME526eiEdH1C_QtBJtLTLNpsaK2skzqnnF60Gete1YdEAxP6smnxeqd0TV2yQBtoAqOyGYBY62wOFqPE7dI_Jjh_XcXFtFBFR_wGcjn26yTqZmSRq6YGhrZXhwf3cdimcQEKzJhqyXGHSmVJpV80aiqOsxuFXO1LCiC_-MLpGiwwR0zB5r1dUmHNJ1MJ9Ocg_lt4paeEO6igSqAGy03sgnIPPeiYQv1EnkFFaKxjB1IjtZI3u0frTg4yn-7-8D4vI09k-N2Qelph7xFlFsb2OcNlZLGhnSK3pF6QMdVw6LRWHA3HilnsSqBsTF2BfgNoE4eMDKdm-2UVIoDJ58oCCy9PU_jIlFBBRNACcwPG8Qv4a3SEqKoUs5FTrwzpUuOiZC85wpt4yV-vXWF3o3osZBedhAiqTv9wFR6B4_DIMBkveVnk8ZxGRnzbOVIszOUD3ERbo72mG7a6T6kn-3_vgWwlLOWhbup1sWxBe6BaBWspopIeo1Dbaz8tnfLk5jEYE05eyOqCZ0paxA1ZMvnUIOV_T5SPojmwkXKBAOtczL9_JzzWgGHqVLNFRGmVTS9pL6yhFYxSyXkUIojk3vQdLzl9TsjyoV1kf90ZXgzN0h74WGmPjZgYrKZ3kTHTdu-WUgILzZlc0E2UbVw",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/3/0/0/8/2/30082-the-secret-life-of-walter-mitty-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0359950",
      "rating": 7.3,
      "genres": ["Adventure", "Comedy", "Drama"]
    },
    "kinopoisk": {
      "id": "677683",
      "rating": 7.8,
      "genres": ["Приключения", "Драма", "Комедия"],
      "description": "Уолтер Митти — скромный сотрудник журнала Life, который проводит дни, мечтая о приключениях. Когда пропадает важная фотография для последнего выпуска журнала, Уолтер отправляется в невероятное путешествие, которое навсегда изменит его жизнь."
    },
    "letterboxd": {
      "id": "the-secret-life-of-walter-mitty-2013",
      "rating": 3.6,
      "genres": ["Adventure", "Comedy"]
    },
  },
  {
    "id": 65,
    "title": "Весёлые каникулы",
    "originalTitle": "Get the Gringo",
    "year": 2012,
    "genres": ["Боевик", "Драма", "Триллер"],
    "description": "Российская комедия о приключениях компании друзей во время летнего отдыха.",
    "posterUrl": "https://kinopoisk-ru.clstorage.net/d29GX8402/d97dbfeSwH/uZUJqETOMio-oYTfxTY6MG86xPmFHVRK40RFFNerX78IGeLa41zMlSnyRIkEqMgtW0i6sEyoC8EUamnRHmI7B__DSKxT3yx3OLSFlZRoJmEiJPXDsHNxcNg7Yyfqyhn-Sw-8g74cjptwsR-XRuyuSk4iybd98E6wSV55tmoAWzOXuCqfc_pSJA692PTJLRIecWzj7bNQXXrSA103xsUi7n1ytp6WB72Da4g32nbusFwUCeSUWvVMnkBBa7NYFGEvor0aoHTodwkoou7n7iIcJH9g5_KEXkBN0QJsAcjFKv1_YLmJoiGbpnGAPvJ1-Jh6IQjBmGTmW55vTVqDYgdJBKKwC5hk224rHZr74N4JOT9ZcPDopEVRf8Q4RwXT3CDdTES4g7wDrLd2gA3PYM64fwU26INI1m2XQFplvV4eTgC7lSmeTvduEQyx7s38Ex0vXXzn7Z1YUEfCK0c45-Ag2Vt5oaG5FrSySZAm-njKk2whF_S6a-5Om25BV5ViHkwAiqY6h27nch0os97k4j8NNlRY-cqzVkpc0wBvDPLQP-ZVVa6wvTmwo0mPEf946qFMPjTagFbtVo9ySlulZR5mJayDF65Q9koTI57D1841OCdiRf_akFR3Wu8uQDPt9Rn_cEKbsJ4Cl65KmxHWZcq0ewIb25J41lq-VXljs20DWzKEuQmORMdZCw2_xOjdMyYcfVnM_aNYWH_EOG8Dzu4b23F1pK2GMZW7Q4ouyFnLp14JMdS5fOp1j1d8bpRJM1kWqLMRjVnxch4bofve6jk1IFZu39WpfFtB_j5OFs3TIPx-ZKa_thavnHSWNelT_oJYDyPMpFf4UYJUemiPSBBxNp-HK6tH-Hc-NLDNxOsdJAdQU-jThEp1bfUkWQbn8hnTeU6yorw0u61erTLWQt6iXQg2zL5Lzn6NVVJqll0vZC-Lmw6eZthdNRaU3PD1ATcnR1DoyqBGYVf-O0Ej9MsA43dFv7uZGI-7S4sN0kX-hUMrHMu8a_B3ukdAbL1DPFEOq6w-m3_oVQ0vuuPD3jomJ1Jk4u--WFlJxzpcNNvRKPlNbryQkTiEjl61E-NA1KJXAy_ov2HWbZlGbU2leQ5GK7WMJL980W0GN53v1dIJCBdueN_qkmVVQ-07biH29yjhf0m8o5gwiKxJkCTqW_qoeDoO-6JK93O4Tn9krWYiWjyArT6Ne_F1PyqW4e_WMDw8XnjY-7JDfVXTLkAG0NI450lqh6C9JpaTc5IZ3G7Sk3QcNcq1aNZdpF5RQLZ8OkEOoLUTmU7qVR89oOPcxRUZJE5AzsWEXWdt1BpSK8nCL8VXZoCghBavmlWvP8lA7LVZORn4uGXrXqdeXmyTSBBRB6unKYB913EDMbXZ6OYwMA1cf8_plVhjbPooTiHq0hvPcG2jrb0Rr75emCT-YcuoeAkezaFC3kWnQUlaqGA_TAuGgzO7fvNdNBmby_fOIAcbW1fT0rBaQFjPJFor1N0n715Gg6GpN7OtcY4x1U3TqHA9POifWP1wpHRmXYZuHFQ3opkenEHYdjU8ueDq1A47G1pa5-2eeFh34DlCEPLUGuVZTqOwiQGbpXOvF91b9L1SLy3ntkr-WbBTSkOzSRNnL4GFEp9x6V8oE6jA7uUzEydNf8_TiUZ5RdQsbQjJ9QH9XmuwgLoAlI5tkD7IR9q-WCwA2Zpf6maMVER4gH4sdBSdggyYdNd-MQ6m7tHlMAQdcnn46bZ_eHvYGUEE1ecCwWxqsbOmJ5GXY7E32FnUnHA-GOmqTvByrGFpR7NCAGo-u5IuqEb5digQkO7T8isQMF1zxPScRkdEzR9FJPfoA-d6b7K8lz64g2GjMdV6_rV0Aw7MlXb0ZLtHfF2mehpTEKSwCaBg_EssObvs_N0oLwx6Rc3fg3FKYPsvWiLF4hbEdGKSk6IfsIdekAfaeei8RyAzzbBC8laYYkxMkUkscAOnjgSsU-52Ciy9xffuKxgPcGLa15VwXkjfI0gO1ss0_EtIuai4B5m7SZUl-3jQmFMFGPeqSsxbj0J9W4lrEmk2p7UbkX_nUgU7tfPqwDInHE5B0NqrVFZF7RtwN_ToJOJabJ-TnCa9m3uMMfJ69ptFPBHtnGvGeaFnRU2FRwBZJKSHNYp83lc0LrTt8OkCGi9nbtn2vH1cTt8ZSCPBzgHecGe2pLQLkZ5uuCzIY9uJTAMA479Y3V6aQEx7om84YDWGpwWncPZzMhOR39zWOgo8fV7Yzb9iaUrUKF404NE2xU9CsbmVI4qSULURz0DfgFMWHty-Stp4h3N6e7FNDmk_u5ourG_fXzMvlOTLzjo1E2ZD6M-he0lp1CBzCOTyA9tWbaG7vRqKlV-sMutk36NAAjflt0PZWLxKXX-uYCdtLbmTBaRe9HMeH7Dczs83BgxCe-D_q3d1buEcUiLtwR3HeWCAjr8DvL9clDnLWve3Vx0Y559u2Fq5TltYqlY7UQKCtg-sZuV3PRa9y-j-Fic8QHfk65ZrQWLDIXw08OYc-0VUpI2xNJi_dKAM0lHXll4hK9-WVfl2h1VdXa5EG0c-m5IMv27NTgY7msPo3CARI3Jm_daod1Vk2jhjMOTWK-V4UJKpogS3rW-xAux83qNzPC_lpmfnTZt0TXa1VARgJ6GuKLNu-k4TP7DYzeMzBzZyYc_tpmdgbe0OZwXp6RbZWluEm5EwsrxOlBfjTfOJUTgA6aJ970mWXEljtWgFSjCjnDqzWPBSKjem3_XoCCYZeHXHyYlIR3jhAWIu9e89y3dXp5ObJZWGWLc9_XzThVIYKeacQvlfn0JteJ9bGVskjZ07j2_3fjEph9PT9zwtB01E5PCyXHBK5SNkBcjHGttUdJmAmTWmp1e3HP9V1pdnDwPkmkzKVLBAf2q0VAxNHp-xDKVc534pCr399u4oKjl5QtrtlXprSN8CeDLN1yvjflewrbwCvb5qjQXYfc62YQAv6Zt280aEY0M",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/5/6/7/51567-get-the-gringo-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt1567609",
      "rating": 6.9,
      "genres": ["Action", "Crime", "Drama"]
    },
    "kinopoisk": {
      "id": "573759",
      "rating": 7.1,
      "genres": ["Боевик", "Криминал", "Драма"],
      "description": "Американский преступник попадает в мексиканскую тюрьму, где сталкивается с жестокими порядками и неожиданно находит дружбу с мальчиком."
    },
    "letterboxd": {
      "id": "get-the-gringo",
      "rating": 3.2,
      "genres": ["Action", "Crime"]
    },
  },
  {
    "id": 66,
    "title": "Всё самое лучшее",
    "originalTitle": "All Good Things",
    "year": 2010,
    "genres": ["Драма", "Триллер", "Мелодрама"],
    "description": "Наследник одной из самых богатых семей Нью-Йорка, сделавшей состояние на недвижимости, влюбляется в девушку не из своего круга. Их романтические отношения развиваются по вполне обыденному сценарию, кроме одного - девушка не знает, что у ее парня серьезные психические проблемы. В конце концов, девушка исчезает, проходит 20 лет прежде чем расследование снова возобновят, что закончится смертью для причастных к этому делу людей.",
    "posterUrl": "https://a.ltrbxd.com/resized/film-poster/1/8/8/4/7/18847-all-good-things-0-1000-0-1500-crop.jpg?v=22352c36e2",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/1/8/8/4/7/18847-all-good-things-0-1000-0-1500-crop.jpg?v=22352c36e2",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt1178663",
      "rating": 6.4,
      "genres": ["Drama", "Mystery", "Romance"]
    },
    "kinopoisk": {
      "id": "408878",
      "rating": 6.7,
      "genres": ["Драма", "Триллер", "Мелодрама"],
      "description": "Фильм основан на реальных событиях и рассказывает о загадочном исчезновении Кэти Маккормак, жены наследника нью-йоркской недвижимости Роберта Дёрста."
    },
    "letterboxd": {
      "id": "all-good-things",
      "rating": 3.0,
      "genres": ["Drama", "Mystery"]
    },
  },
  {
    "id": 67,
    "title": "Интерстеллар",
    "originalTitle": "Interstellar",
    "year": 2014,
    "genres": ["Фантастика", "Драма", "Приключения"],
    "description": "Группа исследователей совершает путешествие через червоточину в космосе в поисках нового дома для человечества.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/2/4/2/5/1/24251-interstellar-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt0816692",
      "rating": 8.6,
      "genres": ["Adventure", "Drama", "Sci-Fi"]
    },
    "kinopoisk": {
      "id": "258687",
      "rating": 8.6,
      "genres": ["Фантастика", "Драма", "Приключения"],
      "description": "Когда засуха приводит человечество к продовольственному кризису, коллектив исследователей и учёных отправляется сквозь червоточину (которая предположительно соединяет области пространства-времени через большое расстояние) в путешествие, чтобы превзойти прежние ограничения для космических путешествий человека и переселить человечество на другую планету."
    },
    "letterboxd": {
      "id": "interstellar-2014",
      "rating": 4.2,
      "genres": ["Science Fiction", "Drama"]
    },
  },
  {
    "id": 68,
    "title": "Майор Гром: Чумной Доктор",
    "originalTitle": "Mayor Grom: Plague Doctor",
    "year": 2021,
    "genres": ["Боевик", "Криминал", "Драма"],
    "description": "Первый фильм киновселенной Bubble, где майор полиции Игорь Гром сталкивается с таинственным мстителем в маске Чумного Доктора.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4bueXwukX8BxeYS7VYMDuqgNZjYjXhsR_kQ&s",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/5/1/8/0/0/51800-mayor-grom-plague-doctor-0-460-0-690-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt11704112",
      "rating": 6.3,
      "genres": ["Action", "Crime", "Drama"]
    },
    "kinopoisk": {
      "id": "1219149",
      "rating": 6.8,
      "genres": ["Боевик", "Криминал", "Драма"],
      "description": "Игорь Гром — опытный следователь из Петербурга, известный своим пренебрежением к бюрократии и умением раскрывать самые сложные преступления. Когда в городе появляется таинственный преступник, называющий себя Чумным Доктором, Гром вынужден выйти на тропу войны."
    },
    "letterboxd": {
      "id": "mayor-grom-plague-doctor",
      "rating": 3.1,
      "genres": ["Action", "Crime"]
    },
  },
    {
    "id": 69,
    "title": "Майор Гром: Трудное детство",
    "originalTitle": "Mayor Grom: Trudnoye detstvo",
    "year": 2024,
    "genres": ["Боевик", "Криминал", "Приключения"],
    "description": "Приквел о юности Игоря Грома, где он впервые сталкивается с несправедливостью и принимает решение стать полицейским.",
    "posterUrl": "https://a.ltrbxd.com/resized/film-poster/4/5/8/5/1/4/458514-major-grom-plague-doctor-0-1000-0-1500-crop.jpg?v=3e3ad61ae4",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/major-grom-plague-doctor-0-1000-0-1500-crop.jpg?v=3e3ad61ae4",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt12345678",
      "rating": 7.2,
      "genres": ["Action", "Crime", "Adventure"]
    },
    "kinopoisk": {
      "id": "1234567",
      "rating": 7.5,
      "genres": ["Боевик", "Криминал", "Приключения"],
      "description": "Молодой Игорь Гром сталкивается с несправедливостью в родном городе, что заставляет его пересмотреть свои взгляды на жизнь и выбрать путь служения закону."
    },
    "letterboxd": {
      "id": "major-grom-plague-doctor",
      "rating": 3.8,
      "genres": ["Action", "Crime"]
    }
  },
  {
    "id": 70,
    "title": "Вавилон",
    "originalTitle": "Babylon",
    "year": 2022,
    "genres": ["Драма", "Комедия"],
    "description": "Эпическая история о взлетах и падениях нескольких персонажей во времена перехода Голливуда от немого кино к звуковому.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNjlkYjc4NGMtZjc3MS00NjQ3LTk4MmUtMTkwZGZjODE1ZDVlXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/babylon-2022-0-1000-0-1500-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt10640346",
      "rating": 7.3,
      "genres": ["Drama", "Comedy"]
    },
    "kinopoisk": {
      "id": "1234568",
      "rating": 7.1,
      "genres": ["Драма", "Комедия"],
      "description": "Грандиозная панорама Голливуда 1920-х годов, где смешались гении, безумцы и новые технологии кинематографа."
    },
    "letterboxd": {
      "id": "babylon-2022",
      "rating": 3.9,
      "genres": ["Drama", "Comedy"]
    }
  },
  {
    "id": 71,
    "title": "Ужин по-американски",
    "originalTitle": "Dinner in America",
    "year": 2020,
    "genres": ["Комедия", "Драма", "Мелодрама"],
    "description": "История о панк-рокере, который скрывается от полиции, и девушке, которая становится его невольной сообщницей.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/en/5/5b/Dinner_in_America.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/dinner-in-america-0-1000-0-1500-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt8262802",
      "rating": 7.0,
      "genres": ["Comedy", "Drama", "Romance"]
    },
    "kinopoisk": {
      "id": "1234569",
      "rating": 7.3,
      "genres": ["Комедия", "Драма", "Мелодрама"],
      "description": "Неожиданная встреча между панк-музыкантом и молодой женщиной приводит к серии безумных приключений, которые меняют их жизни."
    },
    "letterboxd": {
      "id": "dinner-in-america",
      "rating": 3.7,
      "genres": ["Comedy", "Drama"]
    }
  },
  {
    "id": 72,
    "title": "Идеальные дни",
    "originalTitle": "Perfect Days",
    "year": 2023,
    "genres": ["Драма"],
    "description": "История токийского уборщика туалетов, который находит красоту в простых повседневных моментах.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/ru/2/24/Perfect_Days.jpeg",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/perfect-days-0-1000-0-1500-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt12345679",
      "rating": 7.8,
      "genres": ["Drama"]
    },
    "kinopoisk": {
      "id": "1234570",
      "rating": 7.9,
      "genres": ["Драма"],
      "description": "Трогательная история о человеке, нашедшем гармонию в простых вещах и ежедневных ритуалах жизни в большом городе."
    },
    "letterboxd": {
      "id": "perfect-days",
      "rating": 4.1,
      "genres": ["Drama"]
    }
  },
  {
    "id": 73,
    "title": "RRR",
    "originalTitle": "RRR",
    "year": 2022,
    "genres": ["Боевик", "Драма", "Исторический"],
    "description": "Эпическая история о двух легендарных индийских революционерах и их дружбе во времена британского колониального правления.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_FMjpg_UX1000_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/rrr-0-1000-0-1500-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt8178634",
      "rating": 7.9,
      "genres": ["Action", "Drama", "History"]
    },
    "kinopoisk": {
      "id": "1234571",
      "rating": 8.2,
      "genres": ["Боевик", "Драма", "Исторический"],
      "description": "Грандиозный индийский блокбастер о дружбе двух революционеров, боровшихся против британского колониализма."
    },
    "letterboxd": {
      "id": "rrr",
      "rating": 4.3,
      "genres": ["Action", "Drama"]
    }
  },
  {
    "id": 74,
    "title": "Субботний вечер",
    "originalTitle": "Saturday Night",
    "year": 2024,
    "genres": ["Комедия", "Драма"],
    "description": "История о группе друзей, чья жизнь меняется во время одного безумного вечера.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQryWAMpbplcJ5_zuQtNnbadnSoWn4pJQHJJA&s",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/saturday-night-0-1000-0-1500-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt12345680",
      "rating": 6.5,
      "genres": ["Comedy", "Drama"]
    },
    "kinopoisk": {
      "id": "1234572",
      "rating": 6.8,
      "genres": ["Комедия", "Драма"],
      "description": "Один вечер, который перевернет жизни нескольких друзей, заставив их пересмотреть свои ценности и отношения."
    },
    "letterboxd": {
      "id": "saturday-night",
      "rating": 3.2,
      "genres": ["Comedy", "Drama"]
    }
  },
  {
    "id": 75,
    "title": "Закусочная",
    "originalTitle": "Snack Shack",
    "year": 2024,
    "genres": ["Комедия"],
    "description": "Два подростка летом 1991 года открывают закусочную у местного бассейна и попадают в различные приключения.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwmqOgW_oZ5ik5gzjyFxaIWVKa1GrjQ7WlfA&s",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/snack-shack-0-1000-0-1500-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt12345681",
      "rating": 6.7,
      "genres": ["Comedy"]
    },
    "kinopoisk": {
      "id": "1234573",
      "rating": 6.9,
      "genres": ["Комедия"],
      "description": "Ностальгическая комедия о летних приключениях подростков, пытающихся заработать на собственном маленьком бизнесе."
    },
    "letterboxd": {
      "id": "snack-shack",
      "rating": 3.4,
      "genres": ["Comedy"]
    }
  },
  {
    "id": 76,
    "title": "Банши Инишерина",
    "originalTitle": "The Banshees of Inisherin",
    "year": 2022,
    "genres": ["Драма", "Комедия"],
    "description": "На отдаленном ирландском острове в 1923 году один житель внезапно решает разорвать многолетнюю дружбу, что приводит к неожиданным последствиям.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/ru/thumb/9/93/The_Banshees_of_Inisherin_%28film%29.jpg/1200px-The_Banshees_of_Inisherin_%28film%29.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/the-banshees-of-inisherin-0-1000-0-1500-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt11813216",
      "rating": 7.8,
      "genres": ["Drama", "Comedy"]
    },
    "kinopoisk": {
      "id": "1234574",
      "rating": 7.9,
      "genres": ["Драма", "Комедия"],
      "description": "Трагикомическая история о разрыве дружбы, которая приводит к цепочке неожиданных событий на маленьком ирландском острове."
    },
    "letterboxd": {
      "id": "the-banshees-of-inisherin",
      "rating": 4.2,
      "genres": ["Drama", "Comedy"]
    }
  },
  {
    "id": 77,
    "title": "Громовержцы",
    "originalTitle": "Thunderbolts",
    "year": 2025,
    "genres": ["Фантастика", "Боевик", "Приключения"],
    "description": "Группа антигероев Marvel объединяется для выполнения опасных миссий.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSk-pt_lg77D_FEn9K4VBBmxZZ7tGrx2bwliA&s",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/thunderbolts-0-1000-0-1500-crop.jpg",
    type: MediaType.MOVIE,
    "imdb": {
      "id": "tt12345682",
      "rating": undefined,
      "genres": ["Action", "Adventure", "Sci-Fi"]
    },
    "kinopoisk": {
      "id": "1234575",
      "rating": undefined,
      "genres": ["Фантастика", "Боевик", "Приключения"],
      "description": "Команда антигероев из вселенной Marvel собирается для выполнения специальных миссий под руководством Валентины Аллегры де Фонтейн."
    },
    "letterboxd": {
      "id": "thunderbolts",
      "rating": undefined,
      "genres": ["Action", "Sci-Fi"]
    }
  },
  {
    "id": 78,
    "title": "Андор",
    "originalTitle": "Andor",
    "year": 2022,
    "genres": ["Фантастика", "Драма", "Приключения"],
    "description": "Приквел к 'Звездным войнам' о Кассиане Андорре.",
    "posterUrl": "https://upload.wikimedia.org/wikipedia/ru/thumb/8/8b/Star_Wars_Andor.jpg/640px-Star_Wars_Andor.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/andor-0-1000-0-1500-crop.jpg",
    type: MediaType.SERIES,
    "imdb": {
      "id": "tt9253284",
      "rating": 8.4,
      "genres": ["Sci-Fi", "Drama", "Adventure"]
    },
    "kinopoisk": {
      "id": "1234576",
      "rating": 8.2,
      "genres": ["Фантастика", "Драма", "Приключения"],
      "description": "История становления Кассиана Андорра, который станет ключевой фигурой в борьбе повстанцев против Галактической Империи."
    },
    "letterboxd": {
      "id": "andor",
      "rating": 4.3,
      "genres": ["Sci-Fi", "Drama"]
    },
    "seriesInfo": {
      "seasons": 1,
      "episodes": 12,
      "endYear": 2022
    }
  },
  {
    "id": 79,
    "title": "Аркейн",
    "originalTitle": "Arcane",
    "year": 2021,
    "genres": ["Аниме", "Фантастика", "Драма"],
    "description": "История происхождения двух легендарных чемпионов League of Legends.",
    "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQbSSzHB_KX1vBQBSfx989zlfFNpqjGb80I9g&s",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/arcane-0-1000-0-1500-crop.jpg",
    type: MediaType.SERIES,
    "imdb": {
      "id": "tt11126994",
      "rating": 9.0,
      "genres": ["Animation", "Action", "Adventure"]
    },
    "kinopoisk": {
      "id": "1234577",
      "rating": 9.1,
      "genres": ["Аниме", "Фантастика", "Драма"],
      "description": "Визуально потрясающий анимационный сериал, раскрывающий историю персонажей вселенной League of Legends."
    },
    "letterboxd": {
      "id": "arcane",
      "rating": 4.7,
      "genres": ["Animation", "Drama"]
    },
    "seriesInfo": {
      "seasons": 1,
      "episodes": 9,
      "endYear": 2021
    }
  },
  {
    "id": 80,
    "title": "Атланта",
    "originalTitle": "Atlanta",
    "year": 2016,
    "genres": ["Комедия", "Драма"],
    "description": "История двух кузенов, пытающихся пробиться в мире рэп-музыки.",
    "posterUrl": "https://irecommend.ru/sites/default/files/product-images/2708446/tXAyjSWUUlbYCD2m96c2uw.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/atlanta-0-1000-0-1500-crop.jpg",
    type: MediaType.SERIES,
    "imdb": {
      "id": "tt4288182",
      "rating": 8.6,
      "genres": ["Comedy", "Drama"]
    },
    "kinopoisk": {
      "id": "1234578",
      "rating": 8.4,
      "genres": ["Комедия", "Драма"],
      "description": "Уникальный сериал Дональда Гловера о жизни в Атланте, сочетающий социальную сатиру, сюрреализм и глубокие размышления о современной культуре."
    },
    "letterboxd": {
      "id": "atlanta",
      "rating": 4.4,
      "genres": ["Comedy", "Drama"]
    },
    "seriesInfo": {
      "seasons": 4,
      "episodes": 41,
      "endYear": 2022
    }
  },
  {
    "id": 81,
    "title": "Друзья",
    "originalTitle": "Friends",
    "year": 1994,
    "genres": ["Комедия", "Ситком"],
    "description": "Культовый ситком о жизни шестерых друзей в Нью-Йорке.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BOTU2YmM5ZjctOGVlMC00YTczLTljM2MtYjhlNGI5YWMyZjFkXkEyXkFqcGc@._V1_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/friends-0-1000-0-1500-crop.jpg",
    type: MediaType.SERIES,
    "imdb": {
      "id": "tt0108778",
      "rating": 8.9,
      "genres": ["Comedy", "Romance"]
    },
    "kinopoisk": {
      "id": "1234579",
      "rating": 9.0,
      "genres": ["Комедия", "Ситком"],
      "description": "Легендарный ситком о шестерых друзьях, живущих в Нью-Йорке, который стал культурным феноменом и символом целого поколения."
    },
    "letterboxd": {
      "id": "friends",
      "rating": 4.5,
      "genres": ["Comedy"]
    },
    "seriesInfo": {
      "seasons": 10,
      "episodes": 236,
      "endYear": 2004
    }
  },
  {
    "id": 82,
    "title": "Чёрные паруса",
    "originalTitle": "Black Sails",
    "year": 2014,
    "genres": ["Приключения", "Драма", "Исторический"],
    "description": "Пиратская сага, приквел к 'Острову сокровищ'.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZGZmOGNjNzUtNTNkMC00ZDU2LThjMDAtZGM2OGRjMjE1OGQ5XkEyXkFqcGc@._V1_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/black-sails-0-1000-0-1500-crop.jpg",
    type: MediaType.SERIES,
    "imdb": {
      "id": "tt2375692",
      "rating": 8.2,
      "genres": ["Adventure", "Drama"]
    },
    "kinopoisk": {
      "id": "1234580",
      "rating": 8.3,
      "genres": ["Приключения", "Драма", "Исторический"],
      "description": "Захватывающая пиратская сага, рассказывающая о событиях, предшествующих роману 'Остров сокровищ'."
    },
    "letterboxd": {
      "id": "black-sails",
      "rating": 4.2,
      "genres": ["Adventure", "Drama"]
    },
    "seriesInfo": {
      "seasons": 4,
      "episodes": 38,
      "endYear": 2017
    }
  },
  {
    "id": 83,
    "title": "Реальные парни",
    "originalTitle": "Blue Mountain State",
    "year": 2010,
    "genres": ["Комедия", "Спорт"],
    "description": "О жизни студентов-футболистов колледжа.",
    "posterUrl": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7930922_b_v8_ac.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/blue-mountain-state-0-1000-0-1500-crop.jpg",
    type: MediaType.SERIES,
    "imdb": {
      "id": "tt1378167",
      "rating": 8.2,
      "genres": ["Comedy", "Sport"]
    },
    "kinopoisk": {
      "id": "1234581",
      "rating": 8.1,
      "genres": ["Комедия", "Спорт"],
      "description": "Отвязная комедия о жизни студентов-футболистов колледжа, полная безумных вечеринок и абсурдных ситуаций."
    },
    "letterboxd": {
      "id": "blue-mountain-state",
      "rating": 3.9,
      "genres": ["Comedy"]
    },
    "seriesInfo": {
      "seasons": 3,
      "episodes": 39,
      "endYear": 2011
    }
  },
  {
    "id": 84,
    "title": "Блудливая Калифорния",
    "originalTitle": "Californication",
    "year": 2007,
    "genres": ["Комедия", "Драма"],
    "description": "О писателе Хэнке Муди и его хаотичной жизни в Лос-Анджелесе.",
    "posterUrl": "https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p7895125_b_v13_aa.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/californication-0-1000-0-1500-crop.jpg",
    type: MediaType.SERIES,
    "imdb": {
      "id": "tt0904208",
      "rating": 8.3,
      "genres": ["Comedy", "Drama"]
    },
    "kinopoisk": {
      "id": "1234582",
      "rating": 8.2,
      "genres": ["Комедия", "Драма"],
      "description": "История харизматичного писателя Хэнка Муди, который балансирует между творческим кризисом, сложными отношениями и бесконечными соблазнами Лос-Анджелеса."
    },
    "letterboxd": {
      "id": "californication",
      "rating": 4.0,
      "genres": ["Comedy", "Drama"]
    },
    "seriesInfo": {
      "seasons": 7,
      "episodes": 84,
      "endYear": 2014
    }
  },
  {
    "id": 85,
    "title": "Утиные истории",
    "originalTitle": "DuckTales",
    "year": 2017,
    "genres": ["Мультфильм", "Приключения", "Комедия"],
    "description": "Современная адаптация классического мультсериала.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BNTA2NTc5MzQwNV5BMl5BanBnXkFtZTgwOTY2ODI2MjI@._V1_FMjpg_UX1000_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/ducktales-0-1000-0-1500-crop.jpg",
    type: MediaType.SERIES,
    "imdb": {
      "id": "tt5766194",
      "rating": 8.0,
      "genres": ["Animation", "Adventure", "Comedy"]
    },
    "kinopoisk": {
      "id": "1234583",
      "rating": 8.1,
      "genres": ["Мультфильм", "Приключения", "Комедия"],
      "description": "Обновленная версия классического мультсериала о приключениях Скруджа МакДака и его племянников."
    },
    "letterboxd": {
      "id": "ducktales",
      "rating": 4.0,
      "genres": ["Animation", "Adventure"]
    },
    "seriesInfo": {
      "seasons": 3,
      "episodes": 75,
      "endYear": 2021
    }
  },
  {
    "id": 86,
    "title": "Красавцы",
    "originalTitle": "Entourage",
    "year": 2004,
    "genres": ["Комедия", "Драма"],
    "description": "О молодом актере и его друзьях в Голливуде.",
    "posterUrl": "https://m.media-amazon.com/images/M/MV5BZjEyYWJlMDktNGEwMi00OTRjLWE4YzgtOTMwNDc0NzQzMDlmXkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
    "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5j/5x/5b/5e/entourage-0-1000-0-1500-crop.jpg",
    type: MediaType.SERIES,
    "imdb": {
      "id": "tt0387199",
      "rating": 8.4,
      "genres": ["Comedy", "Drama"]
    },
    "kinopoisk": {
      "id": "1234584",
      "rating": 8.3,
      "genres": ["Комедия", "Драма"],
      "description": "Сериал о взлетах и падениях молодого актера и его друзей в жестоком мире Голливуда."
    },
    "letterboxd": {
      "id": "entourage",
      "rating": 4.1,
      "genres": ["Comedy", "Drama"]
    },
    "seriesInfo": {
      "seasons": 8,
      "episodes": 96,
      "endYear": 2011
    }
  },
  {
      "id": 87,
      "title": "Хулиганы и ботаны",
      "originalTitle": "Freaks and Geeks",
      "year": 1999,
      "genres": ["Комедия", "Драма"],
      "description": "Культовый сериал о школьниках 1980-х.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BNDk4MTRlZjMtYTMxYi00ZjdkLWEyYjYtZjg1NjBlMzY2MDIzXkEyXkFqcGc@._V1_.jpg",
      "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/freaks-and-geeks-1200-1200-675-675-crop-000000.jpg",
      type: MediaType.SERIES,
      "seriesInfo": {
        "seasons": 1,
        "episodes": 18,
        "endYear": 2000
      },
      "imdb": {
        "id": "tt0193676",
        "rating": 8.8,
        "genres": ["Comedy", "Drama"]
      },
      "kinopoisk": {
        "id": "77044",
        "rating": 8.4,
        "genres": ["Комедия", "Драма"],
        "description": "Сериал рассказывает о жизни двух групп подростков в средней школе в начале 1980-х: «хулиганов» и «ботаников»."
      },
      "letterboxd": {
        "id": "freaks-and-geeks",
        "rating": 4.2
      }
    },
    {
      "id": 88,
      "title": "Гравити Фолз",
      "originalTitle": "Gravity Falls",
      "year": 2012,
      "genres": ["Мультфильм", "Мистика", "Комедия"],
      "description": "Близнецы исследуют аномалии в городке Гравити Фолз.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTEzNDc3MDQ2NzNeQTJeQWpwZ15BbWU4MDYzMzUwMDIx._V1_FMjpg_UX1000_.jpg",
      "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7h/7p/3d/5x/gravity-falls-1200-1200-675-675-crop-000000.jpg",
      type: MediaType.SERIES,
      "seriesInfo": {
        "seasons": 2,
        "episodes": 40,
        "endYear": 2016
      },
      "imdb": {
        "id": "tt1865718",
        "rating": 8.9,
        "genres": ["Animation", "Adventure", "Comedy"]
      },
      "kinopoisk": {
        "id": "535341",
        "rating": 8.8,
        "genres": ["Мультфильм", "Мистика", "Комедия"],
        "description": "Близнецы Диппер и Мэйбл проводят лето у своего дяди Стэна в городке Гравити Фолз, где происходят странные и загадочные события."
      },
      "letterboxd": {
        "id": "gravity-falls",
        "rating": 4.3
      }
    },
    {
      "id": 89,
      "title": "Удивительные странствия Геракла",
      "originalTitle": "Hercules: The Legendary Journeys",
      "year": 1995,
      "genres": ["Фэнтези", "Приключения"],
      "description": "Приключения Геракла в древнегреческом мире.",
      "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9ae24Rd8nJGKKb8yYkb5gk8PVGlOgRLfZRw&s",
      "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7i/7p/3d/5x/hercules-the-legendary-journeys-1200-1200-675-675-crop-000000.jpg",
      type: MediaType.SERIES,
      "seriesInfo": {
        "seasons": 6,
        "episodes": 111,
        "endYear": 1999
      },
      "imdb": {
        "id": "tt0111999",
        "rating": 6.7,
        "genres": ["Action", "Adventure", "Fantasy"]
      },
      "kinopoisk": {
        "id": "83805",
        "rating": 7.5,
        "genres": ["Фэнтези", "Приключения"],
        "description": "Сериал рассказывает о приключениях древнегреческого героя Геракла, который странствует по миру, помогая людям и сражаясь с мифическими чудовищами."
      },
      "letterboxd": {
        "id": "hercules-the-legendary-journeys",
        "rating": 3.1
      }
    },
    {
      "id": 90,
      "title": "Карточный домик",
      "originalTitle": "House of Cards",
      "year": 2013,
      "genres": ["Драма", "Политика"],
      "description": "О беспринципном конгресмене Фрэнке Андервуде.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTQ4MDczNDYwNV5BMl5BanBnXkFtZTcwNjMwMDk5OA@@._V1_.jpg",
      "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/house-of-cards-1200-1200-675-675-crop-000000.jpg",
      type: MediaType.SERIES,
      "seriesInfo": {
        "seasons": 6,
        "episodes": 73,
        "endYear": 2018
      },
      "imdb": {
        "id": "tt1856010",
        "rating": 8.7,
        "genres": ["Drama"]
      },
      "kinopoisk": {
        "id": "535341",
        "rating": 8.2,
        "genres": ["Драма", "Политика"],
        "description": "Амбициозный конгрессмен Фрэнк Андервуд и его жена Клэр готовы на всё, чтобы добиться власти в Вашингтоне."
      },
      "letterboxd": {
        "id": "house-of-cards",
        "rating": 3.9
      }
    },
    {
      "id": 91,
      "title": "Полиция Майами",
      "originalTitle": "Miami Vice",
      "year": 1984,
      "genres": ["Криминал", "Драма"],
      "description": "Культовый сериал о двух детективах под прикрытием.",
      "posterUrl": "https://resizing.flixster.com/e9eUsEHrrGMruRp-qMFoev2yfko=/fit-in/705x460/v2/https://resizing.flixster.com/-XZAfHZM39UwaGJIFWKAE8fS0ak=/v3/t/assets/p183928_i_v9_ab.jpg",
      "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7i/7p/3d/5x/miami-vice-1200-1200-675-675-crop-000000.jpg",
      type: MediaType.SERIES,
      "seriesInfo": {
        "seasons": 5,
        "episodes": 111,
        "endYear": 1989
      },
      "imdb": {
        "id": "tt0086759",
        "rating": 7.6,
        "genres": ["Action", "Crime", "Drama"]
      },
      "kinopoisk": {
        "id": "83805",
        "rating": 7.9,
        "genres": ["Криминал", "Драма"],
        "description": "Детективы Сонни Крокет и Рико Таббс работают под прикрытием в отделе по борьбе с наркотиками полиции Майами."
      },
      "letterboxd": {
        "id": "miami-vice",
        "rating": 3.5
      }
    },
    {
      "id": 92,
      "title": "Детективное агентство «Лунный свет»",
      "originalTitle": "Moonlighting",
      "year": 1985,
      "genres": ["Комедия", "Детектив"],
      "description": "О частных детективах Мэдди и Дэвиде.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BMzUyNzMzMDctOTAwYi00MzgwLWIyODUtNjgyMmEyY2EzYjY3XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
      "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/moonlighting-1200-1200-675-675-crop-000000.jpg",
      type: MediaType.SERIES,
      "seriesInfo": {
        "seasons": 5,
        "episodes": 66,
        "endYear": 1989
      },
      "imdb": {
        "id": "tt0088576",
        "rating": 7.8,
        "genres": ["Comedy", "Drama", "Mystery"]
      },
      "kinopoisk": {
        "id": "83805",
        "rating": 8.0,
        "genres": ["Комедия", "Детектив"],
        "description": "Бывшая модель Мэдди Хейс и харизматичный Дэвид Эддисон ведут детективное агентство «Лунный свет»."
      },
      "letterboxd": {
        "id": "moonlighting",
        "rating": 3.6
      }
    },
    {
      "id": 93,
      "title": "Мистер Робот",
      "originalTitle": "Mr. Robot",
      "year": 2015,
      "genres": ["Триллер", "Драма", "Киберпанк"],
      "description": "Хакер Эллиот пытается изменить мир.",
      "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRu8ZaprxvWUtksGRD_FZhknNiJNPjEovTYSg&s",
      "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7i/7p/3d/5x/mr-robot-1200-1200-675-675-crop-000000.jpg",
      type: MediaType.SERIES,
      "seriesInfo": {
        "seasons": 4,
        "episodes": 45,
        "endYear": 2019
      },
      "imdb": {
        "id": "tt4158110",
        "rating": 8.5,
        "genres": ["Crime", "Drama", "Thriller"]
      },
      "kinopoisk": {
        "id": "535341",
        "rating": 8.6,
        "genres": ["Триллер", "Драма", "Киберпанк"],
        "description": "Эллиот Алдерсон — молодой инженер кибербезопасности и хакер, страдающий от социальной тревожности и клинической депрессии."
      },
      "letterboxd": {
        "id": "mr-robot",
        "rating": 4.1
      }
    },
    {
      "id": 94,
      "title": "Детектив Нэш Бриджес",
      "originalTitle": "Nash Bridges",
      "year": 1996,
      "genres": ["Криминал", "Драма"],
      "description": "О работе инспектора полиции Сан-Франциско.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjE3MTY2NjA1N15BMl5BanBnXkFtZTcwOTY4MjY5MQ@@._V1_.jpg",
      "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/nash-bridges-1200-1200-675-675-crop-000000.jpg",
      type: MediaType.SERIES,
      "seriesInfo": {
        "seasons": 6,
        "episodes": 122,
        "endYear": 2001
      },
      "imdb": {
        "id": "tt0115270",
        "rating": 6.5,
        "genres": ["Action", "Comedy", "Crime"]
      },
      "kinopoisk": {
        "id": "83805",
        "rating": 7.1,
        "genres": ["Криминал", "Драма"],
        "description": "Инспектор Нэш Бриджес возглавляет специальный отряд полиции Сан-Франциско."
      },
      "letterboxd": {
        "id": "nash-bridges",
        "rating": 3.0
      }
    },
    {
      "id": 95,
      "title": "Новенькая",
      "originalTitle": "New Girl",
      "year": 2011,
      "genres": ["Комедия"],
      "description": "Девушка Джесс переезжает жить к трем парням.",
      "posterUrl": "https://m.media-amazon.com/images/M/MV5BMTQ5MzM1NzMwMl5BMl5BanBnXkFtZTgwNjQ2MzI2NzE@._V1_.jpg",
      "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7i/7p/3d/5x/new-girl-1200-1200-675-675-crop-000000.jpg",
      type: MediaType.SERIES,
      "seriesInfo": {
        "seasons": 7,
        "episodes": 146,
        "endYear": 2018
      },
      "imdb": {
        "id": "tt1826940",
        "rating": 7.7,
        "genres": ["Comedy", "Romance"]
      },
      "kinopoisk": {
        "id": "535341",
        "rating": 7.9,
        "genres": ["Комедия"],
        "description": "После расставания с парнем жизнерадостная Джесс переезжает в квартиру к трем незнакомым парням."
      },
      "letterboxd": {
        "id": "new-girl",
        "rating": 3.7
      }
    },
    {
      "id": 96,
      "title": "Пси Фактор: Хроники паранормальных явлений",
      "originalTitle": "Psi Factor",
      "year": 1996,
      "genres": ["Фантастика", "Мистика"],
      "description": "О расследованиях паранормальных явлений.",
      "posterUrl": "https://www.kinonews.ru/insimgs/2023/poster/poster115636_1.webp",
      "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/psi-factor-1200-1200-675-675-crop-000000.jpg",
      type: MediaType.SERIES,
      "seriesInfo": {
        "seasons": 4,
        "episodes": 88,
        "endYear": 2000
      },
      "imdb": {
        "id": "tt0115341",
        "rating": 6.8,
        "genres": ["Drama", "Horror", "Mystery"]
      },
      "kinopoisk": {
        "id": "83805",
        "rating": 7.2,
        "genres": ["Фантастика", "Мистика"],
        "description": "Команда учёных исследует паранормальные явления по всему миру."
      },
      "letterboxd": {
        "id": "psi-factor",
        "rating": 3.2
      }
    },

    {
        "id": 97,
        "title": "Рик и Морти",
        "originalTitle": "Rick and Morty",
        "year": 2013,
        "genres": ["Мультфильм", "Фантастика", "Комедия"],
        "description": "Безумные приключения ученого и его внука.",
        "posterUrl": "https://m.media-amazon.com/images/M/MV5BZGQyZjk2MzMtMTcyNC00NGU3LTlmNjItNDExMWM4ZDFhYmQ2XkEyXkFqcGc@._V1_FMjpg_UX1000_.jpg",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/rick-and-morty-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 6,
            "episodes": 61,
            "endYear": 2023
        },
        "imdb": {
            "id": "tt2861424",
            "rating": 9.1,
            "genres": ["Animation", "Adventure", "Comedy"]
        },
        "kinopoisk": {
            "id": "685540",
            "rating": 9.0,
            "genres": ["Мультфильм", "Фантастика", "Комедия"],
            "description": "Сумасшедшие приключения циничного гениального ученого Рика Санчеза и его наивного, но храброго внука Морти Смита."
        },
        "letterboxd": {
            "id": "rick-and-morty",
            "rating": 4.5
        }
    },
    {
        "id": 98,
        "title": "Клиника",
        "originalTitle": "Scrubs",
        "year": 2001,
        "genres": ["Комедия", "Драма", "Ситком"],
        "description": "О буднях врачей больницы Сакред Харт.",
        "posterUrl": "https://m.media-amazon.com/images/M/MV5BZDYwNTk4YzEtMTRjNS00YWZjLTlkOWYtYzFlYWQyMjU2ZjkwXkEyXkFqcGc@._V1_.jpg",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7i/7p/3d/5x/scrubs-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 9,
            "episodes": 182,
            "endYear": 2010
        },
        "imdb": {
            "id": "tt0285403",
            "rating": 8.4,
            "genres": ["Comedy", "Drama"]
        },
        "kinopoisk": {
            "id": "83805",
            "rating": 8.6,
            "genres": ["Комедия", "Драма", "Ситком"],
            "description": "Молодой доктор Джон Дориан начинает свою медицинскую практику в больнице Сакред Харт, где его ждут не только профессиональные испытания, но и забавные ситуации."
        },
        "letterboxd": {
            "id": "scrubs",
            "rating": 4.0
        }
    },
    {
        "id": 99,
        "title": "Терапия",
        "originalTitle": "Shrinking",
        "year": 2023,
        "genres": ["Комедия", "Драма"],
        "description": "Терапевт начинает говорить пациентам правду.",
        "posterUrl": "https://resizing.flixster.com/ZOo1dmJSS7i_BKnjxx66Pv7Ag6s=/ems.cHJkLWVtcy1hc3NldHMvdHZzZWFzb24vMDQ4ZTM1ZjQtNWE0Zi00NGY0LWI3ZTItMjAzYjExOGRiZjViLmpwZw==",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/shrinking-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 1,
            "episodes": 10,
            "endYear": 2023
        },
        "imdb": {
            "id": "tt15677150",
            "rating": 7.9,
            "genres": ["Comedy", "Drama"]
        },
        "kinopoisk": {
            "id": "1395869",
            "rating": 7.7,
            "genres": ["Комедия", "Драма"],
            "description": "Терапевт Джимми переживает личную трагедию и решает радикально изменить подход к работе, начав говорить пациентам жесткую правду."
        },
        "letterboxd": {
            "id": "shrinking",
            "rating": 3.8
        }
    },
    {
        "id": 100,
        "title": "Снегопад",
        "originalTitle": "Snowfall",
        "year": 2017,
        "genres": ["Криминал", "Драма"],
        "description": "О эпидемии крэка в Лос-Анджелесе 1980-х.",
        "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxAl0JS9PiK20l5N-y7Qkbf0eLh1KqK-U8Sw&s",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7i/7p/3d/5x/snowfall-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 6,
            "episodes": 60,
            "endYear": 2023
        },
        "imdb": {
            "id": "tt6439752",
            "rating": 8.5,
            "genres": ["Crime", "Drama"]
        },
        "kinopoisk": {
            "id": "1045582",
            "rating": 8.1,
            "genres": ["Криминал", "Драма"],
            "description": "Сериал рассказывает о начале эпидемии крэка в Лос-Анджелесе в 1980-х годах и людях, чьи судьбы переплелись с наркоторговлей."
        },
        "letterboxd": {
            "id": "snowfall",
            "rating": 4.1
        }
    },
    {
        "id": 101,
        "title": "Southland",
        "originalTitle": "Southland",
        "year": 2009,
        "genres": ["Криминал", "Драма"],
        "description": "Реалистичный взгляд на работу полиции Лос-Анджелеса.",
        "posterUrl": "https://preview.redd.it/southland-2009-2013-v0-5uyj62hdjybd1.jpeg?auto=webp&s=9342b45c91c3a3cd10136e2f7508b02f29c2a4e2",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/southland-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 5,
            "episodes": 43,
            "endYear": 2013
        },
        "imdb": {
            "id": "tt1245112",
            "rating": 8.4,
            "genres": ["Crime", "Drama"]
        },
        "kinopoisk": {
            "id": "435756",
            "rating": 8.3,
            "genres": ["Криминал", "Драма"],
            "description": "Реалистичная драма о буднях полицейских Лос-Анджелеса, показывающая их работу без прикрас."
        },
        "letterboxd": {
            "id": "southland",
            "rating": 3.9
        }
    },
    {
        "id": 102,
        "title": "Stranger Things",
        "originalTitle": "Stranger Things",
        "year": 2016,
        "genres": ["Фантастика", "Ужасы", "Драма"],
        "description": "Дети сталкиваются с сверхъестественными явлениями.",
        "posterUrl": "https://m.media-amazon.com/images/M/MV5BMjg2NmM0MTEtYWY2Yy00NmFlLTllNTMtMjVkZjEwMGVlNzdjXkEyXkFqcGc@._V1_.jpg",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7i/7p/3d/5x/stranger-things-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 4,
            "episodes": 34,
            "endYear": 2022
        },
        "imdb": {
            "id": "tt4574334",
            "rating": 8.7,
            "genres": ["Drama", "Fantasy", "Horror"]
        },
        "kinopoisk": {
            "id": "1045582",
            "rating": 8.6,
            "genres": ["Фантастика", "Ужасы", "Драма"],
            "description": "В маленьком городке исчезает мальчик, и его друзья сталкиваются с таинственными явлениями, связанными с секретными экспериментами правительства."
        },
        "letterboxd": {
            "id": "stranger-things",
            "rating": 4.3
        }
    },
    {
        "id": 103,
        "title": "Сверхъестественное",
        "originalTitle": "Supernatural",
        "year": 2005,
        "genres": ["Фэнтези", "Ужасы", "Драма"],
        "description": "Братья Винчестеры охотятся на нечисть.",
        "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR4d6ZXc0m64u2MGYJ-hfc6mDdpZq5fTkgd98dGj_-pWxgxLe06aZVuiFDFgInkra99bPk&usqp=CAU",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/supernatural-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 15,
            "episodes": 327,
            "endYear": 2020
        },
        "imdb": {
            "id": "tt0460681",
            "rating": 8.4,
            "genres": ["Drama", "Fantasy", "Horror"]
        },
        "kinopoisk": {
            "id": "77044",
            "rating": 8.4,
            "genres": ["Фэнтези", "Ужасы", "Драма"],
            "description": "Братья Сэм и Дин Винчестеры путешествуют по Америке, расследуя паранормальные явления и сражаясь с демонами, призраками и другими сверхъестественными существами."
        },
        "letterboxd": {
            "id": "supernatural",
            "rating": 3.9
        }
    },
    {
        "id": 104,
        "title": "Двойка",
        "originalTitle": "The Deuce",
        "year": 2017,
        "genres": ["Драма", "Криминал"],
        "description": "О зарождении порноиндустрии в Нью-Йорке 1970-х.",
        "posterUrl": "https://upload.wikimedia.org/wikipedia/ru/2/2e/The_Deuce_%28TV_series%29.jpg",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7i/7p/3d/5x/the-deuce-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 3,
            "episodes": 25,
            "endYear": 2019
        },
        "imdb": {
            "id": "tt4998350",
            "rating": 8.0,
            "genres": ["Drama"]
        },
        "kinopoisk": {
            "id": "1045582",
            "rating": 7.8,
            "genres": ["Драма", "Криминал"],
            "description": "Сериал рассказывает о зарождении порноиндустрии в Нью-Йорке 1970-х годов и людях, которые стояли у ее истоков."
        },
        "letterboxd": {
            "id": "the-deuce",
            "rating": 3.7
        }
    },
    {
        "id": 105,
        "title": "Клан Сопрано",
        "originalTitle": "The Sopranos",
        "year": 1999,
        "genres": ["Криминал", "Драма"],
        "description": "Классический сериал о мафиозной семье.",
        "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRE9GuggQnlxBgQ3W7HwN7fDZokY8tNzl6trQ&s",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/the-sopranos-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 6,
            "episodes": 86,
            "endYear": 2007
        },
        "imdb": {
            "id": "tt0141842",
            "rating": 9.2,
            "genres": ["Crime", "Drama"]
        },
        "kinopoisk": {
            "id": "77044",
            "rating": 9.1,
            "genres": ["Криминал", "Драма"],
            "description": "Тони Сопрано - глава мафиозной семьи из Нью-Джерси, который пытается балансировать между криминальным миром и семейными проблемами, посещая психотерапевта."
        },
        "letterboxd": {
            "id": "the-sopranos",
            "rating": 4.6
        }
    },
    {
        "id": 106,
        "title": "Прослушка",
        "originalTitle": "The Wire",
        "year": 2002,
        "genres": ["Криминал", "Драма"],
        "description": "Реалистичный взгляд на наркоторговлю в Балтиморе.",
        "posterUrl": "https://m.media-amazon.com/images/I/81ucKbnIugS._UF894,1000_QL80_.jpg",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7i/7p/3d/5x/the-wire-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 5,
            "episodes": 60,
            "endYear": 2008
        },
        "imdb": {
            "id": "tt0306414",
            "rating": 9.3,
            "genres": ["Crime", "Drama", "Thriller"]
        },
        "kinopoisk": {
            "id": "77044",
            "rating": 9.2,
            "genres": ["Криминал", "Драма"],
            "description": "Многослойный реалистичный взгляд на наркоторговлю в Балтиморе, показывающий проблему с разных сторон: полиции, наркодилеров, политиков и обычных жителей."
        },
        "letterboxd": {
            "id": "the-wire",
            "rating": 4.7
        }
    },
    {
        "id": 107,
        "title": "The X-Files",
        "originalTitle": "The X-Files",
        "year": 1993,
        "genres": ["Фантастика", "Мистика", "Драма"],
        "description": "Агенты ФБР расследуют паранормальные явления.",
        "posterUrl": "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTaaju3E3ZFFWsdPkilth4f4pGB3HlbSTHKVQ&s",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/the-x-files-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 11,
            "episodes": 218,
            "endYear": 2018
        },
        "imdb": {
            "id": "tt0106179",
            "rating": 8.6,
            "genres": ["Crime", "Drama", "Mystery"]
        },
        "kinopoisk": {
            "id": "77044",
            "rating": 8.7,
            "genres": ["Фантастика", "Мистика", "Драма"],
            "description": "Агенты ФБР Фокс Малдер и Дана Скалли расследуют необъяснимые дела, связанные с паранормальными явлениями, заговорами и внеземными цивилизациями."
        },
        "letterboxd": {
            "id": "the-x-files",
            "rating": 4.2
        }
    },
    {
        "id": 108,
        "title": "Теория большого взрыва",
        "originalTitle": "The Big Bang Theory",
        "year": 2007,
        "genres": ["Комедия", "Ситком"],
        "description": "О жизни группы друзей-ученых.",
        "posterUrl": "https://m.media-amazon.com/images/I/71qKFGIrv2L._UF1000,1000_QL80_.jpg",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7i/7p/3d/5x/the-big-bang-theory-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 12,
            "episodes": 279,
            "endYear": 2019
        },
        "imdb": {
            "id": "tt0898266",
            "rating": 8.1,
            "genres": ["Comedy", "Romance"]
        },
        "kinopoisk": {
            "id": "77044",
            "rating": 8.3,
            "genres": ["Комедия", "Ситком"],
            "description": "История двух блестящих физиков-теоретиков, их друзей и соседки, которая мечтает стать актрисой и совершенно не разбирается в науке."
        },
        "letterboxd": {
            "id": "the-big-bang-theory",
            "rating": 3.5
        }
    },
    {
        "id": 109,
        "title": "Бывает и хуже",
        "originalTitle": "The Middle",
        "year": 2009,
        "genres": ["Комедия"],
        "description": "О жизни средней американской семьи.",
        "posterUrl": "https://m.media-amazon.com/images/I/919165pXYHL._UF1000,1000_QL80_.jpg",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/the-middle-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 9,
            "episodes": 215,
            "endYear": 2018
        },
        "imdb": {
            "id": "tt1442464",
            "rating": 7.6,
            "genres": ["Comedy", "Family"]
        },
        "kinopoisk": {
            "id": "435756",
            "rating": 7.8,
            "genres": ["Комедия"],
            "description": "Ситком о жизни семьи Хек из маленького городка в Индиане, которая пытается свести концы с концами и сохранить семью в условиях постоянного кризиса."
        },
        "letterboxd": {
            "id": "the-middle",
            "rating": 3.4
        }
    },
    {
        "id": 110,
        "title": "Щит",
        "originalTitle": "The Shield",
        "year": 2002,
        "genres": ["Криминал", "Драма"],
        "description": "О коррумпированном полицейском отряде.",
        "posterUrl": "https://ru-images.kinorium.com/movie/200/229716.jpg?1667345472",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7i/7p/3d/5x/the-shield-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 7,
            "episodes": 88,
            "endYear": 2008
        },
        "imdb": {
            "id": "tt0286486",
            "rating": 8.7,
            "genres": ["Crime", "Drama", "Thriller"]
        },
        "kinopoisk": {
            "id": "77044",
            "rating": 8.5,
            "genres": ["Криминал", "Драма"],
            "description": "Вик Мэкки - лидер ударного отряда полиции Лос-Анджелеса, который использует незаконные методы борьбы с преступностью, переступая грань между законом и беззаконием."
        },
        "letterboxd": {
            "id": "the-shield",
            "rating": 4.3
        }
    },
    {
        "id": 111,
        "title": "Два с половиной человека",
        "originalTitle": "Two and a Half Men",
        "year": 2003,
        "genres": ["Комедия", "Ситком"],
        "description": "О непохожих братьях и сыне одного из них.",
        "posterUrl": "https://static.thcdn.com/images/large/original/productimg/960/960/8430268-1904324891893852.jpg",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/two-and-a-half-men-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 12,
            "episodes": 262,
            "endYear": 2015
        },
        "imdb": {
            "id": "tt0369179",
            "rating": 7.0,
            "genres": ["Comedy"]
        },
        "kinopoisk": {
            "id": "77044",
            "rating": 7.5,
            "genres": ["Комедия", "Ситком"],
            "description": "Богатый донжуан Чарли Харпер и его занудный брат Алан, который после развода переезжает к нему с сыном Джейком, вынуждены жить вместе в одном доме в Малибу."
        },
        "letterboxd": {
            "id": "two-and-a-half-men",
            "rating": 2.9
        }
    },
    {
        "id": 112,
        "title": "В глуши",
        "originalTitle": "Untamed",
        "year": 2025,
        "genres": ["Триллер", "Драма", "Криминал", "Детектив"],
        "description": "Расследование в лесах Йосемити или когда «Настоящий детектив» заблудился в «Йеллоустоуне». Работник Йосемитского национального парка Кайл Тернер расследует жестокое убийство на территории калифорнийского заповедника.",
        "posterUrl": "https://m.media-amazon.com/images/M/MV5BODkxMDM5YWItNDcxZi00NjQ3LWE3NzMtNjM0MzgyNWM0MDhhXkEyXkFqcGc@._V1_.jpg",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/untamed-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 1,
            "episodes": 8,
            "endYear": 2025
        },
        "imdb": {
            "id": "tt12345678",
            "rating": undefined,
            "genres": ["Drama", "Thriller"]
        },
        "kinopoisk": {
            "id": "1395869",
            "rating": undefined,
            "genres": ["Триллер", "Драма", "Криминал", "Детектив"],
            "description": "Новый сериал от создателей «Настоящего детектива» о расследовании убийства в национальном парке Йосемити, где переплетаются человеческие драмы и тайны дикой природы."
        },
        "letterboxd": {
            "id": "untamed",
            "rating": undefined
        }
    },
    {
        "id": 113,
        "title": "Винил",
        "originalTitle": "Vinyl",
        "year": 2016,
        "genres": ["Драма", "Музыка"],
        "description": "О музыкальной индустрии 1970-х в Нью-Йорке.",
        "posterUrl": "https://images.justwatch.com/poster/183519255/s718/vinyl.jpg",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7i/7p/3d/5x/vinyl-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 1,
            "episodes": 10,
            "endYear": 2016
        },
        "imdb": {
            "id": "tt3560060",
            "rating": 7.4,
            "genres": ["Drama", "Music"]
        },
        "kinopoisk": {
            "id": "1045582",
            "rating": 7.2,
            "genres": ["Драма", "Музыка"],
            "description": "Нью-Йорк, 1970-е. Ричи Финестра - владелец звукозаписывающей компании, который пытается спасти свой бизнес и найти новое звучание в эпоху расцвета рок-н-ролла."
        },
        "letterboxd": {
            "id": "vinyl",
            "rating": 3.3
        }
    },
    {
        "id": 114,
        "title": "Безумная любовь",
        "originalTitle": "Mad love",
        "year": 2011,
        "genres": ["Драма", "Мелодрама"],
        "description": "Российский сериал о сложных отношениях.",
        "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1946459/c577306e-dc46-4a82-a85b-2d17ec3eccf9/600x900",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/mad-love-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 1,
            "episodes": 13,
            "endYear": 2011
        },
        "imdb": {
            "id": "tt1837576",
            "rating": 6.5,
            "genres": ["Drama", "Romance"]
        },
        "kinopoisk": {
            "id": "435756",
            "rating": 6.8,
            "genres": ["Драма", "Мелодрама"],
            "description": "История сложных взаимоотношений двух пар, чьи жизни переплетаются из-за любовного треугольника и семейных тайн."
        },
        "letterboxd": {
            "id": "mad-love",
            "rating": 2.8
        }
    },
    {
        "id": 115,
        "title": "Как я встретил вашу маму",
        "originalTitle": "How I Met Your Mother",
        "year": 2005,
        "genres": ["Комедия", "Романтика", "Ситком"],
        "description": "комедийный сериал о приключениях Теда Мосби и его друзей в Нью-Йорке. Через забавные и трогательные истории Тед рассказывает детям, как встретил их маму, раскрывая секреты дружбы, любви и взросления. Идеальный выбор для тех, кто любит лёгкий юмор и душевные моменты!",
        "posterUrl": "https://www.kino-teatr.ru/movie/posters/big/5/6/20165.jpg",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7i/7p/3d/5x/how-i-met-your-mother-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 9,
            "episodes": 208,
            "endYear": 2014
        },
        "imdb": {
            "id": "tt0460649",
            "rating": 8.3,
            "genres": ["Comedy", "Romance"]
        },
        "kinopoisk": {
            "id": "77044",
            "rating": 8.5,
            "genres": ["Комедия", "Романтика", "Ситком"],
            "description": "Тед Мосби рассказывает своим детям историю о том, как он встретил их мать, вспоминая свои приключения в Нью-Йорке вместе с друзьями."
        },
        "letterboxd": {
            "id": "how-i-met-your-mother",
            "rating": 3.7
        }
    },
    {
        "id": 116,
        "title": "Киностудия",
        "originalTitle": "The Studio",
        "year": 2025,
        "genres": ["Комедия"],
        "description": "Продюсер Мэтт Ремик получает долгожданное повышение и становится главой кинокомпании Continental Studios. Его первый проект на новой должности — супергеройский дорогостоящий фильм, на который его босс возлагает большие надежды.",
        "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4716873/49fa0f44-c8da-4e24-b9bd-8839afb62e5f/600x900",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/the-studio-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 2,
            "episodes": 16,
            "endYear": 2026
        },
        "imdb": {
            "id": "tt12345679",
            "rating": undefined,
            "genres": ["Comedy"]
        },
        "kinopoisk": {
            "id": "1395870",
            "rating": undefined,
            "genres": ["Комедия"],
            "description": "Сатирический взгляд на голливудскую киноиндустрию через призму работы кинокомпании Continental Studios и её нового главы Мэтта Ремика."
        },
        "letterboxd": {
            "id": "the-studio",
            "rating": undefined
        }
    },
    
    {
        "id": 118,
        "title": "Кремниевая долина",
        "originalTitle": "Silicon Valley",
        "year": 2014,
        "genres": ["Комедия"],
        "description": "О стартаперах в Кремниевой долине.",
        "posterUrl": "https://ru-images.kinorium.com/movie/1080/679783.jpg?1652086465",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7i/7p/3d/5x/silicon-valley-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 6,
            "episodes": 53,
            "endYear": 2019
        },
        "imdb": {
            "id": "tt2575988",
            "rating": 8.5,
            "genres": ["Comedy"]
        },
        "kinopoisk": {
            "id": "685540",
            "rating": 8.4,
            "genres": ["Комедия"],
            "description": "Группа гиков пытается создать стартап в конкурентной среде Кремниевой долины, сталкиваясь с абсурдными ситуациями и корпоративными интригами."
        },
        "letterboxd": {
            "id": "silicon-valley",
            "rating": 4.0
        }
    },
    {
        "id": 119,
        "title": "Меломанка",
        "originalTitle": "High Fidelity",
        "year": 2020,
        "genres": ["Драма", "Музыка"],
        "description": "О девушке, работающей на виниловом заводе в 1990-х.",
        "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/4774061/a59c97f5-ea4a-4708-a1d1-949a34dc3ba3/600x900",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/high-fidelity-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 1,
            "episodes": 10,
            "endYear": 2020
        },
        "imdb": {
            "id": "tt8134470",
            "rating": 7.3,
            "genres": ["Comedy", "Drama", "Music"]
        },
        "kinopoisk": {
            "id": "1236063",
            "rating": 7.1,
            "genres": ["Драма", "Музыка"],
            "description": "Робин, владелица винилового магазина в Бруклине, пересматривает свои прошлые отношения под звуки любимых пластинок."
        },
        "letterboxd": {
            "id": "high-fidelity",
            "rating": 3.5
        }
    },
    {
        "id": 120,
        "title": "Монстры корпораций",
        "originalTitle": "Corporate",
        "year": 2018,
        "genres": ["Комедия"],
        "description": "О абсурде корпоративной культуры.",
        "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1599028/591519e4-93c6-4047-8c76-26dba02e3393/600x900",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/corporate-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 3,
            "episodes": 26,
            "endYear": 2020
        },
        "imdb": {
            "id": "tt6288124",
            "rating": 7.3,
            "genres": ["Comedy"]
        },
        "kinopoisk": {
            "id": "1111111",
            "rating": 7.0,
            "genres": ["Комедия"],
            "description": "Два сотрудника крупной корпорации Hampton DeVille пытаются сохранить рассудок в мире абсурдных корпоративных правил и бессмысленных инициатив."
        },
        "letterboxd": {
            "id": "corporate",
            "rating": 3.4
        }
    },
    {
        "id": 121,
        "title": "Сайнфелд",
        "originalTitle": "Seinfeld",
        "year": 1989,
        "genres": ["Комедия"],
        "description": "Культовый сериал о 'ни о чем'.",
        "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1704946/f32a003f-d00d-4a71-9c71-128fc34b83ee/600x900",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7i/7p/3d/5x/seinfeld-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 9,
            "episodes": 180,
            "endYear": 1998
        },
        "imdb": {
            "id": "tt0098904",
            "rating": 8.9,
            "genres": ["Comedy"]
        },
        "kinopoisk": {
            "id": "77044",
            "rating": 8.8,
            "genres": ["Комедия"],
            "description": "Комик Джерри Сайнфелд и его друзья Элейн, Джордж и Крамер попадают в нелепые ситуации из повседневной жизни Нью-Йорка."
        },
        "letterboxd": {
            "id": "seinfeld",
            "rating": 4.4
        }
    },
    {
        "id": 122,
        "title": "САС: Неизвестные герои",
        "originalTitle": "SAS: Rogue Heroes",
        "year": 2022,
        "genres": ["Драма", "Военный"],
        "description": "Северная Африка, 1941 год. Молодой и эксцентричный британский офицер Дэвид Стерлинг, убеждённый в неэффективности традиционных методов ведения войны, предлагает радикальный план формирования нового подразделения для выполнения спецопераций и диверсий в тылу нацистов.",
        "posterUrl": "https://www.kino-teatr.ru/movie/poster/156003/237728.jpg",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/5x/7k/6g/5n/sas-rogue-heroes-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 1,
            "episodes": 6,
            "endYear": 2022
        },
        "imdb": {
            "id": "tt13313298",
            "rating": 8.1,
            "genres": ["Action", "Drama", "War"]
        },
        "kinopoisk": {
            "id": "1395869",
            "rating": 7.9,
            "genres": ["Драма", "Военный"],
            "description": "История создания британского спецподразделения SAS во время Второй мировой войны группой эксцентричных офицеров под руководством Дэвида Стерлинга."
        },
        "letterboxd": {
            "id": "sas-rogue-heroes",
            "rating": 3.8
        }
    },
    {
        "id": 123,
        "title": "Сыны анархии",
        "originalTitle": "Sons of Anarchy",
        "year": 2008,
        "genres": ["Криминал", "Драма"],
        "description": "О байкерском клубе в Калифорнии.",
        "posterUrl": "https://avatars.mds.yandex.net/get-kinopoisk-image/1600647/81be3b3e-719f-4d81-8c52-00b82c4e8674/220x330",
        "posterUrl2": "https://a.ltrbxd.com/resized/sm/upload/7i/7p/3d/5x/sons-of-anarchy-1200-1200-675-675-crop-000000.jpg",
        type: MediaType.SERIES,
        "seriesInfo": {
            "seasons": 7,
            "episodes": 92,
            "endYear": 2014
        },
        "imdb": {
            "id": "tt1124373",
            "rating": 8.6,
            "genres": ["Crime", "Drama", "Thriller"]
        },
        "kinopoisk": {
            "id": "435756",
            "rating": 8.5,
            "genres": ["Криминал", "Драма"],
            "description": "Джексон 'Джекс' Теллер пытается управлять байкерским клубом 'Сыны анархии', балансируя между криминалом и семейными обязательствами."
        },
        "letterboxd": {
            "id": "sons-of-anarchy",
            "rating": 4.1
        }
    },
	  {
    "id": 124,
    "title": "Изображая бога",
    "originalTitle": "Playing God",
    "year": 1997,
    "genres": ["Триллер", "Драма", "Криминал"],
    "description": "Блестящего хирурга лишают лицензии за употребление наркотиков — у него под ножом умерла пациентка. Избрав себе в качестве утешителя синтетический заменитель героина, он большую часть времени пребывает в состоянии, позволяющем забыть о прошлом и будущем. При покупке очередной дозы в баре он становится свидетелем бандитской разборки и спасает жизнь одному из раненых, применив свой талант хирурга. Глава одной из группировок предлагает доктору практиковать нелегально. 10000 за операцию — а пациентов хватает — оказываются веским аргументом, да и у самого хирурга руки тоскуют по скальпелю. Он соглашается…",
    "posterUrl": "https://a.ltrbxd.com/resized/film-poster/4/4/4/1/4/44414-playing-god-0-1000-0-1500-crop.jpg?v=fdaff76162",
    "type": MediaType.MOVIE,
    "imdb": {
      "id": "tt0119878",
      "rating": 5.5,
      "genres": ["Crime", "Drama", "Thriller"]
    },
    "kinopoisk": {
      "id": "40810",
      "rating": 6.2,
      "genres": ["триллер", "драма", "криминал"],
      "description": "Блестящего хирурга лишают лицензии за употребление наркотиков — у него под ножом умерла пациентка. Избрав себе в качестве утешителя синтетический заменитель героина, он большую часть времени пребывает в состоянии, позволяющем забыть о прошлом и будущем. При покупке очередной дозы в баре он становится свидетелем бандитской разборки и спасает жизнь одному из раненых, применив свой талант хирурга. Глава одной из группировок предлагает доктору практиковать нелегально. 10000 за операцию — а пациентов хватает — оказываются веским аргументом, да и у самого хирурга руки тоскуют по скальпелю. Он соглашается…"
    },
    "letterboxd": {
      "id": "playing-god-1997",
      "rating": 2.7
    }
  },
  {
    "id": 125,
    "title": "Фирма",
    "originalTitle": "The Firm",
    "year": 1993,
    "genres": ["Триллер", "Драма", "Криминал"],
    "description": "Выпускника юрфака Гарварда приглашают работать на отличных условиях в небольшую юридическую фирму. Молодой фирмач мечтает о высотах карьеры, однако вскоре обнаруживает, что его фирма обслуживает влиятельные мафиозные кланы Чикаго. Отказаться от сотрудничества с ними - значит подписать себе смертельный приговор. С другой стороны, за ним начинает следить ФБР.",
    "posterUrl": "https://a.ltrbxd.com/resized/sm/upload/0e/jq/39/82/2kp8H2wQEPnJstXmWwdTPJuACSo-0-1000-0-1500-crop.jpg?v=4f3a56e77e",
    "type": MediaType.MOVIE,
    "imdb": {
      "id": "tt0106918",
      "rating": 6.8,
      "genres": ["Drama", "Mystery", "Thriller"]
    },
    "kinopoisk": {
      "id": "46438",
      "rating": 7.5,
      "genres": ["триллер", "драма", "криминал"],
      "description": "Выпускника юрфака Гарварда приглашают работать на отличных условиях в небольшую юридическую фирму. Молодой фирмач мечтает о высотах карьеры, однако вскоре обнаруживает, что его фирма обслуживает влиятельные мафиозные кланы Чикаго. Отказаться от сотрудничества с ними - значит подписать себе смертельный приговор. С другой стороны, за ним начинает следить ФБР."
    },
    "letterboxd": {
      "id": "the-firm-1993",
      "rating": 3.4
    }
  },
  {
    "id": 126,
    "title": "Офисное пространство",
    "originalTitle": "Office Space",
    "year": 1999,
    "genres": ["Комедия"],
    "description": "Питер Гиббонс после неудачного сеанса гипноза становится человеком с поменявшимися жизненными взглядами. Его новая философия - «забей на работу». Если он и показывается теперь в офисе, то только для того, чтобы играть в компьютерные игры, нарушать внутренний распорядок, а также говорить своему боссу, куда тому следует засунуть свои идиотские распоряжения. Но подобные действия, как ни странно, только поднимают его авторитет, зарплату и должность. Используя новые возможности, он разрабатывает схему присвоения чужих денег.",
    "posterUrl": "https://a.ltrbxd.com/resized/film-poster/5/0/9/9/1/50991-office-space-0-1000-0-1500-crop.jpg?v=ecc49b2fbf",
    "type": MediaType.MOVIE,
    "imdb": {
      "id": "tt0151804",
      "rating": 7.7,
      "genres": ["Comedy"]
    },
    "kinopoisk": {
      "id": "6791",
      "rating": 7.6,
      "genres": ["комедия"],
      "description": "Питер Гиббонс после неудачного сеанса гипноза становится человеком с поменявшимися жизненными взглядами. Его новая философия - «забей на работу». Если он и показывается теперь в офисе, то только для того, чтобы играть в компьютерные игры, нарушать внутренний распорядок, а также говорить своему боссу, куда тому следует засунуть свои идиотские распоряжения. Но подобные действия, как ни странно, только поднимают его авторитет, зарплату и должность. Используя новые возможности, он разрабатывает схему присвоения чужих денег."
    },
    "letterboxd": {
      "id": "office-space-1999",
      "rating": 3.9
    }
  },
  {
    "id": 127,
    "title": "Октябрьское небо",
    "originalTitle": "October Sky",
    "year": 1999,
    "genres": ["Драма", "Биография"],
    "description": "В октябре 1957 года произошло событие эпохального значения. Советский Союз впервые в истории человечества запустил на земную орбиту первый «Спутник». Мир стал другим. Запуск советской ракеты произвел неизгладимое впечатление на мальчика по имени Хомер Хикэм из небольшого шахтерского городка Колвуд в Западной Вирджинии. Всерьез «заболевший» космосом, Хомер решает построить собственную ракету. В этом ему начинают помогать трое друзей и школьная учительница. Однако отец Хомера, шахтер - работяга, видящий сына только в роли продолжателя своего нелегкого дела, категорически противится стремлениям своего ребенка. Но, несмотря ни на что, мальчик сделает все возможное и невозможное, чтобы его мечта стала явью...",
    "posterUrl": "https://a.ltrbxd.com/resized/film-poster/4/3/8/6/8/43868-october-sky-0-1000-0-1500-crop.jpg?v=7d94f13221",
    "type": MediaType.MOVIE,
    "imdb": {
      "id": "tt0132477",
      "rating": 7.8,
      "genres": ["Biography", "Drama", "Family"]
    },
    "kinopoisk": {
      "id": "6790",
      "rating": 8.0,
      "genres": ["драма", "биография"],
      "description": "В октябре 1957 года произошло событие эпохального значения. Советский Союз впервые в истории человечества запустил на земную орбиту первый «Спутник». Мир стал другим. Запуск советской ракеты произвел неизгладимое впечатление на мальчика по имени Хомер Хикэм из небольшого шахтерского городка Колвуд в Западной Вирджинии. Всерьез «заболевший» космосом, Хомер решает построить собственную ракету. В этом ему начинают помогать трое друзей и школьная учительница. Однако отец Хомера, шахтер - работяга, видящий сына только в роли продолжателя своего нелегкого дела, категорически противится стремлениям своего ребенка. Но, несмотря ни на что, мальчик сделает все возможное и невозможное, чтобы его мечта стала явью..."
    },
    "letterboxd": {
      "id": "october-sky-1999",
      "rating": 4.0
    }
  },
   {
    "id": 129,
    "title": "Красота по-американски",
    "originalTitle": "American Beauty",
    "year": 1999,
    "genres": ["Драма", "Комедия"],
    "description": "Лестер Бернэм переживает кризис среднего возраста. Его не уважают и не ценят на работе, а от счастливой семьи осталась лишь видимость. У жены Кэролайн страстный роман с коллегой по работе, а угрюмая дочь-подросток Джейн увлечена соседским парнем, побывавшим в психиатрической больнице. Терзаемый душевными муками Лестер впадает в депрессию. Но неожиданно для себя влюбляется в одноклассницу дочери Анджелу, и эта страсть дает Лестеру мощный жизненный импульс. Он ощущает прилив сил и желаний и готов снова радоваться красоте.",
    "posterUrl": "https://a.ltrbxd.com/resized/film-poster/2/7/0/3/2703-american-beauty-0-1000-0-1500-crop.jpg?v=30329dd752",
    "posterUrl2": "https://a.ltrbxd.com/resized/film-poster/2/7/0/3/2703-american-beauty-0-1000-0-1500-crop.jpg?v=30329dd752",
    "type": MediaType.MOVIE,
    "imdb": {
      "id": "tt0169547",
      "rating": 8.3,
      "genres": ["Drama"]
    },
    "kinopoisk": {
      "id": "679",
      "rating": 8.3,
      "genres": ["драма"],
      "description": "Лестер Бернэм переживает кризис среднего возраста. Его не уважают и не ценят на работе, а от счастливой семьи осталась лишь видимость. У жены Кэролайн страстный роман с коллегой по работе, а угрюмая дочь-подросток Джейн увлечена соседским парнем, побывавшим в психиатрической больнице. Терзаемый душевными муками Лестер впадает в депрессию. Но неожиданно для себя влюбляется в одноклассницу дочери Анджелу, и эта страсть дает Лестеру мощный жизненный импульс. Он ощущает прилив сил и желаний и готов снова радоваться красоте."
    },
    "letterboxd": {
      "id": "american-beauty-1999",
      "rating": 4.1
    }
  },
  {
    "id": 130,
    "title": "Жизнь Чака",
    "originalTitle": "The Life of Chuck",
    "year": 2024,
    "genres": ["Драма", "Фэнтези"],
    "description": "В жизни Чака происходит нечто странное: мир вокруг постепенно рушится, а повсюду появляются загадочные послания со словами благодарности ему. Кто же такой Чак и почему он оказывается связан с судьбой целого мира? Оказывается, за внешней простотой его бытия скрываются глубокие переживания, радость, боль и удивительные открытия, которые делают эту жизнь по-настоящему невероятной.",
    "posterUrl": "https://a.ltrbxd.com/resized/film-poster/7/5/7/6/1/2/757612-the-life-of-chuck-0-1000-0-1500-crop.jpg?v=7ac670c0be",
    "type": MediaType.MOVIE,
    "imdb": {
      "id": "tt19611750",
      "rating": null,
      "genres": ["Drama", "Fantasy"]
    },
    "kinopoisk": {
      "id": "1425278",
      "rating": null,
      "genres": ["драма", "фэнтези"],
      "description": "В жизни Чака происходит нечто странное: мир вокруг постепенно рушится, а повсюду появляются загадочные послания со словами благодарности ему. Кто же такой Чак и почему он оказывается связан с судьбой целого мира? Оказывается, за внешней простотой его бытия скрываются глубокие переживания, радость, боль и удивительные открытия, которые делают эту жизнь по-настоящему невероятной."
    },
    "letterboxd": {
      "id": "the-life-of-chuck-2024",
      "rating": null
    }
  },
  {
    "id": 131,
    "title": "Смертельный выстрел",
    "originalTitle": "Dead Bang",
    "year": 1989,
    "genres": ["Боевик", "Триллер", "Драма", "Криминал"],
    "description": "Опытный лос-анджелесский полицейский Джерри Бек расследует убийство офицера полиции и выходит на след злодейского заговора банды белых расистов.",
    "posterUrl": "https://a.ltrbxd.com/resized/film-poster/4/9/0/7/2/49072-dead-bang-0-1000-0-1500-crop.jpg?v=6575d9050d",
    "type": MediaType.MOVIE,
    "imdb": {
      "id": "tt0159365",
      "rating": 7.4,
      "genres": ["Drama", "War"]
    },
    "kinopoisk": {
      "id": "40811",
      "rating": 7.6,
      "genres": ["драма", "военный"],
      "description": "Опытный лос-анджелесский полицейский Джерри Бек расследует убийство офицера полиции и выходит на след злодейского заговора банды белых расистов."
    },
    "letterboxd": {
      "id": "shot-through-the-heart-1998",
      "rating": 3.6
    }
  },
  {
    "id": 132,
    "title": "Игра с огнём",
    "originalTitle": "The Hot Spot",
    "year": 1990,
    "genres": ["Триллер", "Драма", "Криминал"],
    "description": "Загадочный незнакомец устраивается на работу в автосалон и попадает в водоворот страстей и преступлений.",
    "posterUrl": "https://a.ltrbxd.com/resized/film-poster/4/2/7/5/6/42756-the-hot-spot-0-1000-0-1500-crop.jpg?v=1d217f8778",
    "type": MediaType.MOVIE,
    "imdb": {
      "id": "tt0099797",
      "rating": 6.4,
      "genres": ["Crime", "Drama", "Thriller"]
    },
    "kinopoisk": {
      "id": "40812",
      "rating": 6.5,
      "genres": ["триллер", "драма", "криминал"],
      "description": "Откуда приехал Гарри Мэдокс в этот захолустный техасский городишко, чем занимался прежде — неизвестно. Но совершенно понятно, что он человек случайный и долго тут не задержится. Единственная его проблема — как убить время. Разве что пойти в местный бар, известный как «Горячая точка», да напиться там до посинения. Или откликнуться на зазывный женский взгляд, забыв о том, что это жена твоего начальника. Впрочем, есть еще один вариант: ограбить местный банк."
    },
    "letterboxd": {
      "id": "the-hot-spot-1990",
      "rating": 3.2
    }
  }
];
