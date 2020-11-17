export const getWishlist = () => {
    const data = JSON.parse(localStorage.getItem("wishlist")) || [];
    return data;
  };
  export const checkMovie = (id) => {
    const wishlist = getWishlist();
    return wishlist.findIndex((movie) => movie.id === id) !== -1;
  };
  export const updateWishlist = (movie) => {
    const isMovieInWishlist = checkMovie(movie.id);
    if (isMovieInWishlist) return;
    const wishlist = getWishlist();
    const newWishlist = [...wishlist, movie];
    localStorage.setItem("wishlist", JSON.stringify(newWishlist));
  };
