var app = new Vue({
    el: '#root',
    data: {
      films: [],
      series: [],
      prefix: 'https://image.tmdb.org/t/p/w220_and_h330_face',
      message: '',
      votes: []
  	},
    methods: {
      funzioneCerca: function () {
        this.films = [];
        this.series = [];
          axios
            .get('https://api.themoviedb.org/3/search/movie?api_key=45461509edc8d818f3b7e4e72e2b03e5&language=en-EN&query='+ this.message +'&page=1&include_adult=false')
            .then((result) =>  {
              result.data.results.forEach(
                (element) => {
                  this.films.push(element);
                  var voto = Math.ceil(element.vote_average / 2);
                  this.votes.push(voto);
                  console.log(this.votes);
                }
              )
            });
            axios
              .get('https://api.themoviedb.org/3/search/tv?api_key=e99307154c6dfb0b4750f6603256716d&language=en_EN&query='+ this.message +'')
              .then((result) =>  {
                result.data.results.forEach(
                  (element) => {
                    this.films.push(element);
                  }
                )
              });
        this.message = '';
        }
    },

    mounted:
      function () {
        // axios
        //   .get('https://api.themoviedb.org/3/trending/all/day?api_key=45461509edc8d818f3b7e4e72e2b03e5')
        //   .then((result) =>  {
        //     result.data.results.forEach(
        //       (element) => {
        //         this.films.push(element);
        //       }
        //     )
        //   });

      }
});
