<template>
<div>
  <v-app >
    <Navbar />
    <v-main mx-4 class="grey lighten-4">
      <router-view></router-view>
    </v-main>
  </v-app>
</div>
  
</template>


<script>
import Navbar from './components/Navbar'


export default {
  name: 'App',
  components: { Navbar },
  data () {
    return {
    hidden: false,
    }
  }
}
</script>

<style >
    .v-main__wrap {
        background-color:#123474 ;
    }
    .v-toolbar__content {
      background-color: #123474;
    }
   
</style>