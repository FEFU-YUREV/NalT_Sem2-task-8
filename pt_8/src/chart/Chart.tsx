import Box from '@mui/material/Box'
import FormControl from '@mui/material/FormControl'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import * as React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import GroupChart from './components/GroupChart'
import GroupGrid from './components/GroupGrid'
import { tagsData } from './groupdata'

type tSelect = 'Цена' | 'Оценка'

function Chart() {
  const [metric, setMetric] = React.useState<tSelect>('Цена')

  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value as tSelect
    setMetric(value)
  }

  return (
    <div>
      <Navbar active="3" />
      <Box sx={{ width: '300px', m: 'auto', mt: 4 }}>
        <FormControl fullWidth>
          <InputLabel>Показатель</InputLabel>
          <Select id="select-metric" value={metric} label="Показатель" onChange={handleChange}>
            <MenuItem value="Цена">Цена</MenuItem>
            <MenuItem value="Оценка">Оценка</MenuItem>
          </Select>
        </FormControl>
      </Box>
      <GroupChart data={tagsData} metric={metric} />
      <GroupGrid data={tagsData} metric={metric} />
      <Footer />
    </div>
  )
}

export default Chart
