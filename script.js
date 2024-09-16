Highcharts.chart('container', {
    chart: {
        type: 'column',
    },
    title: {
        text: 'Metas para aplicações de recursos do RPPS',
        align: 'center'
    },
    credits: {
        enabled: false
    },
    xAxis: {
        categories: [2016, 2017, 2018, 2019, 2020, 2021, 2022],
        lineColor: '#ccd6eb'
    },
    yAxis: {
        title: '',
        labels: {
            enabled: false 
        },
        tickAmount: 3
    },
    plotOptions: {
        area: {
            stacking: 'percent'
        }
    },
    series: [
        {
            name: 'RPPS que atingiram a meta atuarial',
            color: '#96e9b2',
            events: {
                legendItemClick() {
                    const series = this.chart.series
                    series.forEach(serie => {
                        if(serie.userOptions.linkedTo === ':RPPS que atingiram a meta atuarial') {
                            serie.setVisible()
                        }
                    })
                }
            }
        },
        {
            name: 'RPPS que não atingiram a meta atuarial',
            color: '#d77c7f',
            events: {
                legendItemClick() {
                    const series = this.chart.series
                    series.forEach(serie => {
                        if (serie.userOptions.linkedTo === ':RPPS que não atingiram a meta atuarial') {
                            serie.setVisible()
                        }
                    })
                }
            }
        },
        {
            linkedTo: ':RPPS que atingiram a meta atuarial',
            name: 'RPPS que atingiram a meta atuarial',
            type: 'area',
            data: [187, 185, 76, 169, 8, 3, 14],
            color: '#96e9b2'
        },
        {
            linkedTo: ':RPPS que não atingiram a meta atuarial',
            name: 'RPPS que não atingiram a meta atuarial',
            type: 'area',
            data: [32, 34, 143, 50, 211, 215, 204],
            color: '#d77c7f'
        }
    ]
})