<template>
    <apexchart type="bar" height="200" width="400" :options="chartOptions" :series="series" align="center"/>
</template>

<script>
import json from '../data/5.json'
export default {
  name: 'ApexColumn',
  data () {
    return {
      series: [{
        name: 'Проблем',
        components: json,
        data: [Math.random(1000, 6000), Math.random(500, 5000),
         Math.random(500, 5000), Math.random(500, 4000), Math.random(300, 3000),
          Math.random(200, 6000), Math.random(500, 1000), Math.random(100, 400)]
      }],
      chartOptions: {
        colors: ['#04092A', '#041227', '#f02fc2'],
        animations: {
          enabled: true,
          easing: 'easeinout',
          speed: 1000
        },
        grid: {
          show: true,
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: false
            }
          }
        },
        title: {
          text: '',
          align: 'center',
          font: 'Helvetica',
          style: {
            color: '#000000'
          }
        },
        fill: {
          type: 'solid',
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 0
        },
        xaxis: {
          categories: ['Плохая работа сайта', 'Плохая работа сотрудника', 
          'Очереди', 'Отказ в предоставлении услуги', 'Нет ответа при подаче заявления',
          'Превышение сроков услуги', 'Нет ответа при звонке в техподдержку', 'Низкое качество услуги'],
          labels: {
            show:false,
            style: {
              colors: '#000000'
            }
          }
        },
        yaxis: {
          labels: {
            show:false,
            style: {
              colors: '#000000'
            }
          }
        },
        tooltip: {
          y: {
            formatter: function (val) {
              return  val 
            }
          }
        },
         chart: {
  toolbar: {
    show: false,
    tools: {
      download: false
    }
  }
}
      }
     
    }
  }
}
</script>