export const photo_url="https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";
export const Logo_Netflix="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

  export const API_OPTIONS={
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNGY0NzdhNzI3YTdhOWMwZTMxNDBmYTg3YjUxNzQzNSIsInN1YiI6IjY1ZTFhYmJlZGFmNTdjMDE2MjljMjdjOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.GZBtdpj0xcWyzgckkb__4ta4oBHhpye1BMOWc2s2sLs'
    }
  };
  export const IMD_CDN_URL="https://image.tmdb.org/t/p/w500";
  export const IMG_URL_BC='https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_small.jpg';

  export const SUPPORTED_LANGUAGEs=[
      {identifier:"en", name:"English"},
      {identifier:"hindi", name:"Hindi"},
      {identifier:"spanish", name:"Spanish"},
  ];

  export const OPENAI_GPT_KEY= process.env.REACT_APP_OPENAI;