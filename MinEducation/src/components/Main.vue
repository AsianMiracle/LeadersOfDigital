<template>
    <v-container>
        <v-row>
            <v-col>
                <div>
                    <v-card text class="ml=5" width="400" height="350" >
                        <ChartMain :chart-data="chartData"/>
                    </v-card>
                </div>
            </v-col>
            <v-col>
                <v-card>
                    <v-data-table
                        :headers="headers"
                        :items="desserts"
                        :items-per-page="5"
                        class="elevation-1"
                    >
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
<script src="https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"></script>

<script>
import vacansy from '../data/vacansy.json'
import ChartMain from "../components/ChartMain"

export default {
  name: "app",
  name: 'PageIndex',
  props: {
    msg: String
  },
  data() {
    return {
        headers: [
          {
            text: 'Dessert (100g serving)',
            align: 'start',
            sortable: false,
            value: 'name',
          },
          { text: 'Calories', value: 'calories' },
          { text: 'Fat (g)', value: 'fat' },
          { text: 'Carbs (g)', value: 'carbs' },
          { text: 'Protein (g)', value: 'protein' },
          { text: 'Iron (%)', value: 'iron' },
        ],
      x: null,
      y: null,
      regions: vacansy,
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
    ChartMain
     }
};
</script>

<style>

</style>