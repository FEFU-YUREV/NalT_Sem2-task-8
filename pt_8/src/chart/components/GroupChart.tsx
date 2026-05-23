import Container from '@mui/material/Container'
import { BarChart } from '@mui/x-charts/BarChart'
import { LineChart } from '@mui/x-charts/LineChart'
import * as React from 'react'
import { tGroup } from '../groupdata'
import SettingChart from './SettingChart'

type GroupProps = {
  data: tGroup
  metric: 'Цена' | 'Оценка'
}

function GroupChart({ data, metric }: GroupProps) {
  const minKey = `Минимальная ${metric.toLowerCase()}`
  const maxKey = `Максимальная ${metric.toLowerCase()}`
  const avgKey = `Средняя ${metric.toLowerCase()}`

  // Default series state based on metric
  const [series, setSeries] = React.useState<{ [key: string]: boolean }>({
    [maxKey]: true,
    [avgKey]: false,
    [minKey]: false,
  })

  // Update series state if metric changes
  React.useEffect(() => {
    setSeries({
      [maxKey]: true,
      [avgKey]: false,
      [minKey]: false,
    })
  }, [metric, maxKey, avgKey, minKey])

  const [isBar, setIsBar] = React.useState(true)

  const activeSeries = Object.entries(series).filter((item) => item[1] === true)

  const seriesY = activeSeries.map((item) => {
    return {
      dataKey: item[0],
      label: item[0],
      barLabel: activeSeries.length === 1 ? ('value' as const) : undefined,
    }
  })

  const chartSetting = {
    yAxis: [{ label: metric === 'Цена' ? 'Цена ($)' : 'Баллы' }],
    height: 400,
  }

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <SettingChart
        series={series}
        setSeries={setSeries}
        isBar={isBar}
        setIsBar={setIsBar}
        metric={metric}
      />
      {isBar ? (
        <BarChart
          dataset={data}
          xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
          series={seriesY}
          slotProps={{
            legend: {
              position: { vertical: 'bottom', horizontal: 'center' },
            },
          }}
          {...chartSetting}
        />
      ) : (
        <LineChart
          dataset={data}
          xAxis={[{ scaleType: 'band', dataKey: 'Группа' }]}
          series={seriesY}
          slotProps={{
            legend: {
              position: { vertical: 'bottom', horizontal: 'center' },
            },
          }}
          {...chartSetting}
        />
      )}
    </Container>
  )
}

export default GroupChart

