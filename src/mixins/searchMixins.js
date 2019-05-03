// Méthode permettant de faire une recherche en fonction des noms des fournisseurs
export default {
    computed: {
      filteredProviders: function() {
        return this.providers.filter(provider => {
          return provider.name.toLowerCase().match(this.search.toLowerCase());
        });
      }
    }
  };