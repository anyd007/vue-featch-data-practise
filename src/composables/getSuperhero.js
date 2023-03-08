import { ref } from "vue";

const getSuperhero = (searchHero) => {
  const superheros = ref([]);
  const error = ref(null);

  const load = async (searchHero) => {
    try {
      const response = await fetch(`https://superheroapi.com/api/218556693899567/search/${searchHero}`);
      if (!response.ok) {
        const errorMsg = 'dupa';
        throw new Error(`${errorMsg}`)
        
      }
      const data = await response.json();
      if(data.response === 'error'){
        throw new Error("NIE MA TAKIEGO SUPER BOHATERA....")
      }
      superheros.value = data;
      
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };

  return { superheros, error, load, searchHero };
};

export default getSuperhero;