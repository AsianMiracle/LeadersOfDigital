<template>
<div>
  <v-row>
    <v-col sm="0,25">
    </v-col>
    <v-col sm="5">
      <div >
        <v-card text class="ml=5" width="400" height="350" >
          <p class="">{{name}}</p>
            <Chart :chart-data="chartData"/>
        </v-card>
      </div>
    </v-col>
    <v-col>
      <div class="wrapper " >
        <div class="wrapper-title">{{msg}}</div>
        <v-card width="500" height="350" >
           <RussianMap
        @peredacha="inforeg" />
        </v-card>
      </div>
    </v-col>
    <v-col sm="0,25">
    </v-col>
  </v-row> 
  <div>
    <v-row>
      <v-col sm="0,25">
    </v-col>
    <v-col sm="5">
      <div class="mt-20">
        <v-card text class="ml=5" width="400" height="300" >
            <Chart2 :chart-data="chartData2"/>
        </v-card>
      </div>
    </v-col>
      <v-col sm="0,25">
    </v-col>
    <v-col sm="6">
      <div class="mt-20">
        <v-card text class="ml=5" width="400" height="300" >
            <Chart :chart-data="chartData"/>
        </v-card>
      </div>
    </v-col>
       <v-col sm="1">
    </v-col>
  </v-row>
  </div>
  
</div>
  
</template> 

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
<script src="https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"></script>

<script>
import RussianMap from "@/components/RussianMap";
import data_json from '../data/data.json'
import Chart from "../components/Chart"
import Chart2 from "../components/Chart2"

export default {
  name: "app",
  name: 'PageIndex',
  props: {
    msg: String
  },
  data() {
    return {
      x: null,
      y: null,
      regions: data_json,
      name:"REG_NAME",
       chartData: {
                labels: ["1", "2", "3"],
                datasets: [
                    {
                        label: "Наименование графика",
                        borderColor: "white",
                        pointBackgroundColor: "blue",
                        borderWidth: 1,
                        pointBorderColor: "white",
                        backgroundColor: {"r": 18, "g": 52, "b": 116},
                        data: [36, 54, 100]
                    }
                ]
            },
            chartData2: {
                labels: ["1", "2", "3"],
                datasets: [
                    {
                        label: "Наименование графика",
                        borderColor: "white",
                        pointBackgroundColor: "blue",
                        borderWidth: 1,
                        pointBorderColor: "white",
                        backgroundColor: {"r": 18, "g": 52, "b": 116},
                        data: [36, 54, 100]
                    }
                ]
            },
    };
  },
  methods: {
    goEvent(event) {
      this.x = event.x - 25;
      this.y = event.y - 25;
		},
    inforeg(region){
      this.name = region.name
      this.chartData = {
        labels: ["1", "2", "3"],
        datasets: [
            {
                label: this.chartData.datasets[0].label,
                borderColor: this.chartData.datasets[0].borderColor,
                pointBackgroundColor: this.chartData.datasets[0].pointBackgroundColor,
                borderWidth: 1,
                pointBorderColor: this.chartData.datasets[0].pointBorderColor,
                backgroundColor: this.chartData.datasets[0].backgroundColor,
                data: [Math.random(10, 100), Math.random(10, 100), Math.random(10, 100)]
                  }
              ]
        }
    },
  },
  components: {
    RussianMap,
    Chart,
    Chart2
     }
};
</script>

<style>
.wrapper {
  margin: 0;
  height: 100%;
  overflow: hidden;
}

.wrapper-title {
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    left: 0;
    right: 0;
    font-size: 72px;
    z-index: 2;
    -moz-user-select: none;
    -khtml-user-select: none;
    user-select: none;
  }

.chartjs-render-monitor{
  max-width: 400px;
  max-height: 300px;
}

.theme--light.v-card.v-sheet{
  background-color: rgba(141, 163, 153, 0.5);
}

.row{
  margin-top: 50px;
}

body{
  height: 100%;
}

html{
  height: 100%S;
}

</style>