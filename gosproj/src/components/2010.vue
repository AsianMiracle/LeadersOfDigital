<template>
<div>
  <v-container>

    <v-row>
      <v-col sm="5">
        <div >
          <v-card flat width="400" height="350" >
            <p class="namk">{{name}}</p>
              <Chart id="hvatit" :chart-data="chartData"/>
               <p class="namk">Процент ухода:{{proc}}%</p>
          </v-card>
        </div>
      </v-col>
      <v-col>
        <div class="wrapper " >
          <div class="wrapper-title">{{msg}}</div>
          <v-card flat width="500" height="350" >
            <RussianMap
          @peredacha="inforeg" />
          </v-card>
        </div>
      </v-col>
    </v-row> 
  </v-container>
  <v-container>
      <div>
    <v-row>
      <v-col sm="0,25">
    </v-col>
    <v-col sm="5">
      <div class="mt-20">
        <v-card flat class="ml=5" width="400" height="300" >
            <Chart2 :chart-data="chartData2"/>
        </v-card>
      </div>
    </v-col>
      <v-col sm="0,5">
    </v-col>
    <v-col sm="6">
      <div class="mt-20">
        <v-card flat class="ml=5" width="400" height="300" >
            <Chart :chart-data="chartData"/>
        </v-card>
      </div>
    </v-col>

  </v-row>
  </div>
  
  </v-container>
</div>

  


  
</template> 

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
<script src="https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/axios/dist/axios.min.js"></script>

<script>
import RussianMap from "@/components/RussianMap";
import data_json from '../data/data.json'
import Chart from "../components/Chart"
import Chart2 from "../components/Chart2"
import regs_json from '../data/regs.json'
import regs_2010json from '../data/regs_2010.json'


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
      regs: regs_2010json,
      
      name:"Московская область",
      proc:"19,81",
       chartData: {
                labels: ["Поступило", "Выпустилось"],
                datasets: [
                    {
                        label: "Регион",
                        borderColor: "white",
                        pointBackgroundColor: "blue",
                        borderWidth: 1,
                        pointBorderColor: "white",
                        backgroundColor: {"r": 18, "g": 52, "b": 116},
                        data: [58239, 46700]
                    }
                ]
            },
            
            // chartData2: {
            //     labels: ["1", "2", "3"],
            //     datasets: [
            //         {
            //             label: "Наименование графика",
            //             borderColor: "white",
            //             pointBackgroundColor: "blue",
            //             borderWidth: 1,
            //             pointBorderColor: "white",
            //             backgroundColor: {"r": 116, "g": 180, "b": 224},
            //             data: [36, 54, 100]
            //         }
            //     ]
            // },
    };
  },
  methods: {
    goEvent(event) {
      this.x = event.x - 25;
      this.y = event.y - 25;
		},
    inforeg(region){
      this.name = region.name
      console.log(regs.length)
      for (let i = 0; i < regs.length; i++){
         if(regs[i].region === region.name){
           this.proc = (regs[i].accepted - regs[i].released)/regs[i].accepted*100
             this.chartData = {
        labels: ["Поступило", "Выпустилось"],
        datasets: [
            {
                label: this.chartData.datasets[0].label,
                borderColor: this.chartData.datasets[0].borderColor,
                pointBackgroundColor: this.chartData.datasets[0].pointBackgroundColor,
                borderWidth: 1,
                pointBorderColor: this.chartData.datasets[0].pointBorderColor,
                backgroundColor: this.chartData.datasets[0].backgroundColor,
                data: [regs[i].accepted, regs[i].released]
                  }
              ]
        }
      }
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
  background-color: rgba(255,255,255, 0,5);
}

.row{
  margin-top: 50px;
}

body{
  height: 100%;
}

path{
    fill: #123508;
  opacity: 0.75;
}

html{
  height: 100%S;
}

.namk{
  color:black;
  text-align: center;

}

#hvatit{
  height: 260px;
  width: 340px;
}
</style>