<template>
  <path 
      :index='index'
      :d='region.path' 
      class='state'  
      @mouseover='isActive = true' 
      @mouseout='isActive = false'
      @click="showTitleDialog(region)"
      :class='{ regionActive: isActive}'
      v-tooltip="{content: region.name, classes:['a','b']}">
  </path>
</template>
            
<script>
export default {
  props: {
    region: Object,
    index: Number
  },
  data() {
    return {
      isActive: false
          };
  },
  methods: {
    showTitleDialog(region){
      this.$emit('sobevent', region)
    }
      
  }
};
</script>

<style>
.a {
  color: white;
  font-family: 'Helvetica';
  font-size:10px;
  padding:2px;
  padding-left: 5px;
  padding-right: 5px;
}
.b {
  background-color: black;
  border-radius: 3px;
  opacity: 70%;
}

.vm--modal{
  max-width: 65px;
  max-height: 35px;
  position: absolute;
  left: 50%;
  top: 50%;
  margin-left: 250px;
  margin-top: 150px;
}
</style>
