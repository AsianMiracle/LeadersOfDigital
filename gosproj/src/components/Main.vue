<template>
<div>
  <v-container>
        <v-row>
            <v-col>
                <div>
                    <v-card flat class="ml=5" width="400" height="350" >
                        <ChartMain :chart-data="chartData" />
                    </v-card>
                </div>
            </v-col>
            <v-col>
                <v-card>
                    <v-data-table
                   
                        :headers="headers"
                        :items="vacansy"
                        :items-per-page="5"
                        show-select
                        depressed
                        v-model="selectedRows"
                    >
                    <template v-slot:top="t">
                     {{ t.items[0].name }}
                        </template>
                    </v-data-table>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
    <v-container>
        <v-row>
          <v-col>
              <div>
                  <v-card flat class="ml=5" width="400" height="350" >
                      <ChartMain :chart-data="chartData" />
                  </v-card>
              </div>
          </v-col>
          <v-col>
              <v-card flat>
                  <ChartRegr :chart-data="chartDataRegr" />
              </v-card>
          </v-col>
        </v-row>
    </v-container>
</div>
    
</template>

<script src="https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.1/Chart.min.js"></script>
<script src="https://unpkg.com/vue-chartjs/dist/vue-chartjs.min.js"></script>

<script>
import vacansy_json from '../data/regs.json'
import ChartMain from "../components/ChartMain"
import ChartRegr from "../components/ChartRegr"


export default {
  
  name: "app",
  name: 'PageIndex',
  props: {
    msg: String
  },
  data() {
    return {
        vacansy: vacansy_json,
        headers: [
          {
            text: 'Регион',
            align: 'start',
            sortable: false,
            value: 'region',
          },
          { text: 'Дефицит', value: 'def_prof' },
          { text: 'Выпуск', value: 'release' },
          { text: 'Вакансия', value: 'need' },
        ],
      x: null,
      y: null,
      name:"REG_NAME",
        chartData: {
                labels: ["Москва", "Санкт-Петербург", "Новосибирская область", "Свердловская область", 
                        "Краснодарский край", "Республика Татарстан ", "Московская область", 
                        "Нижегородская область", "Ростовская область", "Пермский край"],
                datasets: [
                    {
                        label: "Дефицит",
                        borderColor: "white",
                        pointBackgroundColor: "blue",
                        borderWidth: 1,
                        pointBorderColor: "white",
                        backgroundColor: {"r": 18, "g": 52, "b": 116},
                        data: [15972, 8644, 2684, 2689, 2881, 2477, 2001, 2050, 1180, 1121]
                    }
                ],
                
            },
        chartDataRegr: {
                labels: [2005,2006,2007,2008,2009,2010,2011,2012,2013,2014,2015,2016,2017,2018,2019,2020,2021,2022,2023],
                datasets: [
                    {
                        label: "Прогноз Зарплаты",
                        borderColor: "white",
                        pointBackgroundColor: "blue",
                        borderWidth: 1,
                        pointBorderColor: "white",
                        backgroundColor: {"r": 18, "g": 52, "b": 116},
                        data: [8021,13465,18908,24352,29796,35240,40684,46128,51571,57015,62459,67903,73347,78791,84234,89678,95122,100566,106010]
                    },
                    {
                        label: "Реальные данные",
                        borderColor: "white",
                        pointBackgroundColor: "orange",
                        borderWidth: 1,
                        pointBorderColor: "white",
                        data: [13300, 8200, 19100, 26400, 27800, 32700, 35200, 44800, 48200, 52800, 59300, 65700, 73600, 80000, 89400, 95100]
                    }
                ]
            },
        selectedRows: [],
        methods: {
        sel(){
      console.log(this.selectedRows.name)
        }}
    };
  },
  components: {
    ChartMain,
    ChartRegr
     }
};
</script>

<style>

</style>