<template>
  <div>
    <svg viewBox="0 0 990 560" xmlns="http://www.w3.org/2000/svg">
      <RegionPath 
      v-for="(item, key) in  regions" 
      :key=key 
      :index="key" 
      :region="item"
      @sobevent="consolka"
      />
    </svg>
  </div>  
</template>

<script>
import RegionPath from './RegionPath'
import data_json from '../data/data.json'
export default {
    props: {
  },
    data () {
        return {
            regions: data_json
        }
    },
    components: {
        RegionPath
    },
    methods: {
      consolka(region){
        this.$emit('peredacha', region)
      }
    }
};
</script>

<style lang="less" scoped>
svg {
  width: 100%;
  height: 100vh;
  .state {
    stroke-width: 1;
    stroke: #fff;
    -webkit-transition: stroke 0.5s, stroke-width 0.5s;
    -o-transition: stroke 0.5s, stroke-width 0.5s;
    transition: stroke 0.5s, stroke-width 0.5s;
  }
}

svg .state:hover,
.state.active {
  cursor: pointer;
  stroke-width: 3;
  stroke: #000;
}

path {
  fill: #8c8d8f;
  opacity: 0.75;
}

.regionActive {
  fill: #0B3067;
  opacity: 0.75;
}

p {
  margin: 0 0 10px;
}

.close {
  float: right;
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1;
  color: #000;
  text-shadow: 0 1px 0 #fff;
  opacity: 0.5;
}

.close:focus,
.close:hover {
  color: #000;
  text-decoration: none;
  cursor: pointer;
  opacity: 0.75;
}

svg[data-v-3b415e79] {
    width: 100%;
    height: 70vh;
}

</style>
