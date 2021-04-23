const { RESTDataSource } = require('apollo-datasource-rest');

class PeopleAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://swapi.dev/api/';
  }

  async getAllPeople(page){
      try {
          if(page){        
            const response = await this.get(`people/?page=${page}`);
            const data = response.results;
          
            return data.map(person => {
                const { name, height, mass, gender, homeworld } = person
                return {
                    name, height, mass, gender, homeworld 
                }
            })
          }
          const response = await this.get('people');
          const data = response.results;
    
          return data.map(person => {
              const { name, height, mass, gender, homeworld } = person
              return {
                  name, height, mass, gender, homeworld 
              }
        })
      } catch(error){
        console.log('An error occured')
      }
  }
  async getPerson(personName){
    try {
      const response = await this.get(`people/?search=${personName}`);
      const data = response.results;
      const { name, height, mass, gender, homeworld } = data[0];
      return { name, height, mass, gender, homeworld }

    } catch (error) {
      console.log(error)
    }
  }

}

module.exports =  PeopleAPI;