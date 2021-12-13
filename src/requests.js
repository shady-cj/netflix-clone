const API_KEY = "16fcc8613696186cda006b17b5d9367f";

const requests = [
    {
        title: "NETFLIX ORIGINALS",
        fetchTitle: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
        isLargeRows: true,
    },
    {
        title: "Trending Now",
        fetchTitle: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
        isLargeRows: false,
    },
    {
        title: "Top Rated",
        fetchTitle: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
        isLargeRows: false,
    },
    {
        title: "Action Movies",
        fetchTitle: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
        isLargeRows: false,
    },
    {
        title: "Comedy Movies",
        fetchTitle: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
        isLargeRows: false,
    },
    {
        title: "Horror Movies",
        fetchTitle: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
        isLargeRows: false,
    },
    {
        title: "Romance Movies",
        fetchTitle: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
        isLargeRows: false,
    },
    {
        title: "Documentaries",
        fetchTitle: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
        isLargeRows: false,
    },
];

export default requests;
