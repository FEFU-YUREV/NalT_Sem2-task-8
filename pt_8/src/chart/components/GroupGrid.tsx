import Container from '@mui/material/Container'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { ruRU } from '@mui/x-data-grid/locales'
import { tGroup } from '../groupdata'

type GroupProps = {
  data: tGroup
  metric: 'Цена' | 'Оценка'
}

function GroupGrid({ data, metric }: GroupProps) {
  const rows: GridRowsProp = data
  const columns: GridColDef[] = [
    { field: 'Группа', flex: 1 },
    { field: `Минимальная ${metric.toLowerCase()}`, headerName: `Мин. ${metric.toLowerCase()}`, type: 'number', flex: 0.5 },
    { field: `Максимальная ${metric.toLowerCase()}`, headerName: `Макс. ${metric.toLowerCase()}`, type: 'number', flex: 0.5 },
    { field: `Средняя ${metric.toLowerCase()}`, headerName: `Средн. ${metric.toLowerCase()}`, type: 'number', flex: 0.5 },
  ]

  return (
    <Container maxWidth="lg" sx={{ height: '400px', mt: '40px', mb: '40px' }}>
      <DataGrid
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={columns}
      />
    </Container>
  )
}

export default GroupGrid
