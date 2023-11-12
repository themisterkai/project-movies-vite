const API_KEY = '6e59972b55cd841fd656e40cdafa8bc6';

const pageTitle = `Kai's Movie Site`;

export const getURL = (type, id) => {
  switch (type) {
    case 'popular':
    case 'top_rated':
    case 'upcoming':
      return `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`;
    case 'movieDetail':
      return `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=en-US`;
    case 'movieCredits':
      return `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${API_KEY}&language=en-US`;
    case 'actorDetail':
      return `https://api.themoviedb.org/3/person/${id}?api_key=${API_KEY}&language=en-US`;
    case 'actorCredits':
      return `https://api.themoviedb.org/3/person/${id}/movie_credits?api_key=${API_KEY}&language=en-US`;
    default:
      return `https://api.themoviedb.org/3/movie/${type}?api_key=${API_KEY}&language=en-US&page=1`;
  }
};

export const getPageTitle = extraInfo => {
  if (extraInfo == null) {
    return pageTitle;
  }
  return pageTitle + ' | ' + convertToTitleCase(extraInfo);
};

const convertToTitleCase = str => {
  if (!str) {
    return '';
  }
  return str.toLowerCase().replace(/\b\w/g, s => s.toUpperCase());
};
