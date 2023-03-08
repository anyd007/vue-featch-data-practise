<template>
 <div v-for="superhero in superheros.results" :key="superhero.id">
 <h2>{{ superhero.name }}</h2>
 <img :src="superhero.image.url" />
 </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
export default {
    props: ['superheros'],
  
   

}
</script>

<style>

</style>