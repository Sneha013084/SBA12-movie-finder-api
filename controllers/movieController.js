
const axios = require ('axios');

const OMDB_BASE_URL = 'http://www.omdbapi.com/';

//search movie by name

const searchMovies = async(req ,res) =>{

    const title = req.query.title;

    if(!title) {
        return res.status(400).json ({ error: "Title query parameter is required"})
    }
    try{
        const response = await axios.get  (OMDB_BASE_URL,{ params : {s: title, apiKey : process.env.OMDB_API_KEY }
        
        });
        res.json(response.data);
    }catch(error) {
        res.status(500).json({error: 'Error fetching movie data' });
    }
};


//Get movie details by IMDb ID


   const getMovieDetails= async(req ,res) =>{

    const id = req.query.id;

    // if(! id {
    //     return res.status(400).json ({ error: "Title query parameter is required"})
    // }
    try{
        const response = await axios.get  (OMDB_BASE_URL,{ params : { i : id , apiKey : process.env.OMDB_API_KEY }
        
        });
        res.json(response.data);
    }catch(error) {
        res.status(500).json({error: 'Error fetching movie details' });
    }
};

module.exports = {searchMovies, getMovieDetails};
