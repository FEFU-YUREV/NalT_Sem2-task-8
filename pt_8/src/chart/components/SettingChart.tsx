import Checkbox from '@mui/material/Checkbox'
import Divider from '@mui/material/Divider'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import FormLabel from '@mui/material/FormLabel'
import Radio from '@mui/material/Radio'
import RadioGroup from '@mui/material/RadioGroup'
import Stack from '@mui/material/Stack'
import * as React from 'react'

type tSeries = {
  [key: string]: boolean
}

type CheckboxProps = {
  series: tSeries
  setSeries: React.Dispatch<React.SetStateAction<tSeries>>
  isBar: boolean
  setIsBar: React.Dispatch<React.SetStateAction<boolean>>
  metric: 'Цена' | 'Оценка'
}

function SettingChart({ series, setSeries, isBar, setIsBar, metric }: CheckboxProps) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSeries({
      ...series,
      [event.target.name]: event.target.checked,
    })
  }

  const handleChartChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setIsBar(event.target.value === 'bar')
  }

  const minKey = `Минимальная ${metric.toLowerCase()}`
  const maxKey = `Максимальная ${metric.toLowerCase()}`
  const avgKey = `Средняя ${metric.toLowerCase()}`

  return (
    <Stack
      direction={{ xs: 'column', md: 'row' }}
      divider={<Divider orientation="vertical" flexItem />}
      spacing={2}
      sx={{ m: '20px 0', justifyContent: 'center' }}
    >
      <FormControl>
        <FormLabel id="label-radio-group">Тип диаграммы:</FormLabel>
        <RadioGroup row name="group-radio" value={isBar ? 'bar' : 'dot'}>
          <FormControlLabel
            value="bar"
            control={<Radio checked={isBar} onChange={handleChartChange} />}
            label="Гистограмма"
          />
          <FormControlLabel
            value="dot"
            control={<Radio checked={!isBar} onChange={handleChartChange} />}
            label="Линейная"
          />
        </RadioGroup>
      </FormControl>
      <FormControl>
        <FormLabel id="label-checkbox-group">На диаграмме показать:</FormLabel>
        <Stack direction={{ xs: 'column', sm: 'row' }}>
          <FormControlLabel
            control={<Checkbox checked={!!series[maxKey]} onChange={handleChange} name={maxKey} />}
            label="Максимум"
          />
          <FormControlLabel
            control={<Checkbox checked={!!series[avgKey]} onChange={handleChange} name={avgKey} />}
            label="Среднее"
          />
          <FormControlLabel
            control={<Checkbox checked={!!series[minKey]} onChange={handleChange} name={minKey} />}
            label="Минимум"
          />
        </Stack>
      </FormControl>
    </Stack>
  )
}

export default SettingChart
