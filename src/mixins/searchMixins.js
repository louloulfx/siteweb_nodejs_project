export default {
    computed: {
      filteredProviders: function() {
        return this.providers.filter(provider => {
          return provider.name.toLowerCase().match(this.search.toLowerCase());
        });
      }
    }
  };