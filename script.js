var app = new Vue({
    el: '#root',
    data: {
      films: [],
      prefix: 'https://image.tmdb.org/t/p/w220_and_h330_face',
      message: ''
  	},
    methods: {
      pippo: function () {
          axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=45461509edc8d818f3b7e4e72e2b03e5&language=it-IT&query='+ this.message +'&page=1&include_adult=false')
            .then((result) =>  {
              result.data.results.forEach(
                (element) => {
                  this.films.push(element);
                }
              )
            });
        }
    },

    mounted:
      function () {
        console.log("ciao");
        axios
          .get('https://api.themoviedb.org/3/trending/all/day?api_key=45461509edc8d818f3b7e4e72e2b03e5')
          .then((result) =>  {
            result.data.results.forEach(
              (element) => {
                this.films.push(element);
              }
            )
            console.log(this.films);
          });
      }


});
