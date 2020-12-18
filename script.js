var app = new Vue({
  el: '#root',
  data: {
    films: [],
    filmCercato:''
	},
  methods: {

  },
  mounted:
    function () {
      var self = this;
      axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=45461509edc8d818f3b7e4e72e2b03e5&language=it-IT&query=ciao&page=1&include_adult=false')
        .then(function(result)  {
          result.data.results.forEach(
            (element) => {
              self.films.push(element)
            }
          )
          console.log(self.films);

        });
    }
});
