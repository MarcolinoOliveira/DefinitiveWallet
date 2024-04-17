'use client'

import { useCoinsWallet } from '@/hooks/useCoinsWallet';
import useThemeMode from '@/hooks/useThemeMode';
import { tokens } from '@/theme/theme';
import { Box } from '@mui/material';
import ApexCharts from 'react-apexcharts'
import { useEffect, useState } from 'react';
import { ApexOptions } from 'apexcharts';
import useMediaQueryAdapted from '@/hooks/useMediaQueryAdapter';

const BarChartNegotiations = () => {

  const [contributed, setContributed] = useState<Array<number>>([])
  const [balance, setBalance] = useState<Array<number>>([])
  const [names, setNames] = useState<Array<string>>([])
  const [profit, setProfit] = useState<Array<number>>([])

  const { sm } = useMediaQueryAdapted()
  const { coinsWallet } = useCoinsWallet()
  const { mode } = useThemeMode()

  const colors = tokens(mode)
  const height = sm ? 400 : 325

  useEffect(() => {
    const contribution: Array<number> = []
    const balances: Array<number> = []
    const name: Array<string> = []
    const profits: Array<number> = []

    coinsWallet?.forEach((item) => {
      if (item.contributed === 0) return
      contribution.push(item.contributed)
      balances.push(item.balance)
      name.push(item.symbol.toUpperCase())
      profits.push(item.balance - item.contributed)
    })
    setContributed(contribution)
    setBalance(balances)
    setNames(name)
    setProfit(profits)

  }, [coinsWallet])

  const series = [
    {
      name: 'Contributed',
      data: contributed
    }, {
      name: 'Balance',
      data: balance
    },
    {
      name: 'Profit',
      data: profit
    }
  ]

  const options: ApexOptions = {
    title: {
      text: 'Current Negotiations',
      align: 'left',
      margin: 10,
      offsetX: 5,
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
      },

    },

    dataLabels: {
      enabled: true,
      style: {
        colors: [colors.white[100]]
      },
      formatter: (val) => val.toLocaleString('de-DE', { minimumFractionDigits: 0, maximumFractionDigits: 2 }),
      offsetY: -20,
    },

    colors: [colors.indigo[500], colors.greenAccent[500], colors.purple[500]],

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
      width: 300,
      offsetY: -40,
      offsetX: 570,
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
          offsetX: 470
        }
      }
    },
    {
      breakpoint: 1250,
      options: {
        legend: {
          offsetX: 370
        }
      }
    }
    ]
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

export default BarChartNegotiations