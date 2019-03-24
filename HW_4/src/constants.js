import logo from './logo.svg';
import images from './logo.svg';
import school from './logo.svg';

const constants = {
  studies: [
    {
      id: 1,
      title: 'The School',
      src: school ,
      class: 'btn btn-info',
      buttonTitle:'Start education',
      likes: 0,
      buttonShowDescription: 'Show more',
      description:`Шко́ла (от др.-греч. σχολή, σχολά — досуг, учебное занятие, школа) — 
                учебное заведение для получения общего образования. В широком смысле слово может применяться к 
                названию любого образовательного учреждения (музыкальная школа, художественная школа, спортивная школа
                — ДЮСШ, школа боевых искусств и т. д.`,
      buttonHideDescription: 'Show less',
      isShowLess: true
    },{
      id: 2,
      title: 'The University',
      src: images ,
      class: 'btn btn-success',
      buttonTitle:"Join to us",
      likes: 0,
      buttonShowDescription: 'Show more',
      description:`Университе́т (от нем. Universität, которое, в свою очередь, произошло от лат. 
                universitas — совокупность, общность) — высшее учебное заведение, где готовятся специалисты по 
                фундаментальным и многим прикладным наукам. Как правило, осуществляет и научно-исследовательскую 
                работу. Многие современные университеты действуют как учебно-научно-практические комплексы. 
                Университеты объединяют в своём составе несколько факультетов, на которых представлена совокупность 
                различных дисциплин, составляющих основы научного знания.`,
      buttonHideDescription: 'Show less',
      isShowLess: true
    },
    {
      id: 3,
      title: 'React',
      src: logo ,
      class: 'btn btn-primary',
      buttonTitle: "Learn React",
      likes: 0,
      buttonShowDescription: 'Show more',
      description:`React (иногда React.js или ReactJS) — JavaScript-библиотека[4] с открытым исходным 
                кодом для разработки пользовательских интерфейсов. React разрабатывается и поддерживается Facebook, 
                Instagram и сообществом отдельных разработчиков и корпораций.
                React может использоваться для разработки одностраничных и мобильных приложений. 
                Его цель — предоставить высокую скорость, простоту и масштабируемость. 
                В качестве библиотеки для разработки пользовательских интерфейсов React часто используется с 
                другими библиотеками, такими как Redux.`,
      buttonHideDescription: 'Show less',
      isShowLess: true
    }
  ]
};

export default constants;



export const BASE_URL_MOVIES = 'https://react-cdp-api.herokuapp.com';

// const BEST_URL = {
//   MOVIES : 'https://react-cdp-api.herokuapp.com/',
// };

// export BEST_URL;
