<template>
  <div class="home">
  <h1>SUPER BOHATEROWIE</h1>
  <input type="text" v-model="searchHero">
  <button @click="acceptSearch">znajdź</button>
 
  <div v-if="error">{{ error }}</div>
  <div v-if="superheros.results">
    <HeroList :superheros="superheros"/>
  </div>
  <div v-else>
    wczytywanie ....
  </div>
  </div>
</template>

<script>
import { ref } from '@vue/reactivity';
import HeroList from '../components/HeroList.vue'
import getSuperhero from '../composables/getSuperhero';
import { computed } from '@vue/runtime-core';

export default {
  name: 'HomeView',
  components: { HeroList },

  setup(){
    const searchHero = ref(null)
    const  {superheros, error, load} = getSuperhero()
   
    const acceptSearch = () =>{
  
      load(searchHero.value)
    }
    const displayTile = computed(() =>{
        return 
    })
    return {superheros, error, searchHero, acceptSearch, displayTile}
  }
}

</script>
