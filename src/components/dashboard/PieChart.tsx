'use client'

import { useCoinsWallet } from "@/hooks/useCoinsWallet";
import useThemeMode from "@/hooks/useThemeMode";
import { tokens } from "@/theme/theme";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { ApexOptions } from 'apexcharts';
import ApexCharts from 'react-apexcharts'

const PieChart = () => {

  const [balance, setBalance] = useState<Array<number>>([])
  const [names, setNames] = useState<Array<string>>([])
  const [totalBalance, setTotalBalance] = useState(0)

  const { coinsWallet } = useCoinsWallet()
  const { mode } = useThemeMode()

  const colors = tokens(mode)
  const orderBalanceCoin = coinsWallet.sort((a, b) => (b.balance) - (a.balance))

  useEffect(() => {
    const balanceCoins: Array<number> = []
    const nameCoins: Array<string> = []

    orderBalanceCoin.forEach((item) => {
      const string = item.balance.toFixed(2)
      balanceCoins.push(parseFloat(string))
      nameCoins.push(item.symbol.toUpperCase())
    })

    const total = orderBalanceCoin.reduce((accumulator, value) => {
      return accumulator + value.balance
    }, 0)

    setBalance(balanceCoins)
    setNames(nameCoins)
    setTotalBalance(total)

  }, [orderBalanceCoin])

  const options: ApexOptions = {
    title: {
      text: 'Your balance',
      align: 'left',
      offsetX: 10,
      style: {
        fontSize: '16px',
        color: colors.white[100],
        fontWeight: 'bold'
      }
    },

    labels: names,

    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: false,
      width: 0
    },

    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        offsetX: -20,
        offsetY: 20,
        donut: {
          size: "85%",
          labels: {
            show: true,
            name: {
              fontSize: '15px',
            },
            value: {
              color: colors.white[100],
              fontSize: '22px',
              fontWeight: 'bold',
              formatter: (w) => `$${w}`
            },
            total: {
              show: true,
              fontSize: '18px',
              color: colors.white[200],
              label: 'Total',
              fontWeight: 'bold',
              formatter: function (w) {
                return `$${w.globals.seriesTotals.reduce((a: number, b: number) => {
                  return parseFloat((a + b).toFixed(2))
                }, 0)}`
              }
            }
          }
        }
      }
    },

    legend: {
      fontSize: '15px',
      height: 150,
      offsetY: 30,
      offsetX: -20,
      labels: {
        colors: colors.white[100],
      },
      itemMargin: {
        horizontal: 5,
        vertical: 5,
      },
      markers: {
        offsetX: -10
      },
      formatter: function (val: string, opts: any) {
        return val + " - " + ((opts.w.globals.series[opts.seriesIndex] * 100) / totalBalance).toFixed(2) + ' %'
      }
    },

    responsive: [{
      breakpoint: 560,
      options: {
        legend: {
          height: 120,
        }
      }
    }]
  }

  return (
    <Box
      width='100%'
      height='auto'
      borderRadius={3}
      bgcolor={colors.grey[900]}
      pt={2}
    >
      <ApexCharts options={options} series={balance} type='donut' height={188} />
    </Box>
  );
}

export default PieChart;