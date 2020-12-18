var app = new Vue({
  el: '#root',
  data: {
    films: [],
    linkImages: []
	},
  methods: {

  },
  mounted:
    function () {
      var self = this;
      axios
        .get('https://api.themoviedb.org/3/search/movie?api_key=45461509edc8d818f3b7e4e72e2b03e5&language=it-IT&query=sniper&page=1&include_adult=false')
        .then(function(result)  {
          result.data.results.forEach(
            (element) => {
              self.films.push(element)
              self.images.push('https://image.tmdb.org/t/p/w220_and_h330_face' + element.poster_path)
            }
          )
          console.log(self.images);
        });
    }
});
