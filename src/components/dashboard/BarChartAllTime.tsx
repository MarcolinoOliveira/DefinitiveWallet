'use client'

import { useCoinsWallet } from '@/hooks/useCoinsWallet';
import useThemeMode from '@/hooks/useThemeMode';
import { tokens } from '@/theme/theme';
import { Box } from '@mui/material';
import ApexCharts from 'react-apexcharts'
import { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import useMediaQueryAdapted from '@/hooks/useMediaQueryAdapter';

const BarChartAllTime = () => {

  const [contributed, setContributed] = useState<Array<number>>([])
  const [sale, setSale] = useState<Array<number>>([])
  const [names, setNames] = useState<Array<string>>([])

  const { sm } = useMediaQueryAdapted()
  const { coinsWallet } = useCoinsWallet()
  const { mode } = useThemeMode()

  const colors = tokens(mode)
  const height = sm ? 350 : 200

  useEffect(() => {
    const contribution: Array<number> = []
    const sales: Array<number> = []
    const name: Array<string> = []

    coinsWallet?.forEach((item) => {
      if (item.totalContributed === 0) return
      contribution.push(item.totalContributed)
      sales.push(item.totalSellings)
      name.push(item.symbol.toUpperCase())
    })

    setContributed(contribution)
    setSale(sales)
    setNames(name)

  }, [coinsWallet])

  const series = [
    {
      name: 'Contributed',
      data: contributed
    },
    {
      name: 'Sales',
      data: sale
    }
  ]

  const options: ApexOptions = {
    chart: {
      width: '100%',
      height: 'auto'
    },

    title: {
      text: 'Negotiations of All Time',
      align: 'left',
      offsetX: 10,
      style: {
        fontSize: '16px',
        color: colors.white[100],
        fontWeight: 'bold'
      }
    },

    grid: {
      show: false,
      row: {
        colors: [colors.grey[900]]
      }
    },

    plotOptions: {
      bar: {
        borderRadius: 3,
        horizontal: false,
        dataLabels: {
          position: 'top'
        }
      }
    },

    dataLabels: {
      enabled: true,
      style: {
        colors: [colors.white[100]]
      },
      formatter: (val) => val.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 2 }),
      offsetY: -20,
    },

    colors: [colors.indigo[500], colors.purple[500]],

    tooltip: {
      shared: true,
      intersect: false,
      theme: mode === 'dark' ? 'dark' : 'light',
      y: {
        formatter: (val) => val?.toLocaleString('en-US', { style: 'currency', currency: 'USD' }),
      }
    },

    yaxis: {
      labels: {
        formatter: (val) => { return `$${val}` },
        style: {
          colors: [colors.white[100]]
        }
      }
    },

    xaxis: {
      categories: names,
      labels: {
        show: true,
        style: {
          colors: colors.white[100],
        }
      }
    },
    legend: {
      position: "top",
      horizontalAlign: "right",
      floating: true,
      width: 200,
      offsetY: -35,
      offsetX: 200,
      labels: {
        colors: colors.white[200]
      },
    },

    responsive: [{
      breakpoint: 1000,
      options: {
        plotOptions: {
          bar: {
            horizontal: true
          },
        },
        legend: {
          position: 'bottom',
          horizontalAlign: 'center',
          floating: false,
          width: 0,
          offsetY: 0,
          offsetX: 0,
        },
        dataLabels: {
          enabled: false
        }
      }
    },
    {
      breakpoint: 1480,
      options: {
        legend: {
          offsetX: 150
        }
      }
    },
    {
      breakpoint: 1200,
      options: {
        legend: {
          offsetX: 150
        }
      }
    }]
  }

  return (
    <Box
      pt={2}
      bgcolor={colors.grey[900]}
      borderRadius={3}
    >
      <ApexCharts options={options} series={series} type='bar' height={height} />
    </Box>
  );
}

export default BarChartAllTime