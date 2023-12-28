

export const NETFLIX_LOGO = "https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png";

export const USER_AVATAR = "https://wallpapers.com/images/high/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.webp";

export const BG_URL = "https://assets.nflxext.com/ffe/siteui/vlv3/893a42ad-6a39-43c2-bbc1-a951ec64ed6d/6f4a54e8-cd9d-47fd-a89b-4a8041b7bb23/CA-en-20231002-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const API_OPTIONS =  {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJkYTM5ZmIzNTJiZTY3YWQ2OTQyNjllODc0YzY1MTFiNCIsInN1YiI6IjY1MjRiODYxZDM5OWU2MDExZDE0YjVjMCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.tvUmXXnWJIhTETtdVgvjI6zZqm70cUCDeaL2VbCjL-M'
    }
  };

  export const NOW_PLAYING_MOVIES_URL = "https://api.themoviedb.org/3/movie/now_playing?page=1";
  export const POPULAR_MOVIES_URL = "https://api.themoviedb.org/3/movie/popular?page=1";

  export const IMAGE_CDN = "https://image.tmdb.org/t/p/w500/";

  export const SUPPORTED_LANGUAGES = [
    {
      identifier : "en",
      name : "English"
    },
    {
      identifier : "hindi",
      name : "Hindi"
    },
    {
      identifier : "spanish",
      name : "Spanish"
    }
  ]