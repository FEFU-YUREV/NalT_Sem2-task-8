import Container from '@mui/material/Container'
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"
import { ruRU } from '@mui/x-data-grid/locales'
import { tGroup } from "../groupdata"

type GroupProps = {
  data: tGroup;
};

function GroupGrid({ data }: GroupProps) {
  const rows: GridRowsProp = data;
  const columns: GridColDef[] = [
    { field: 'Группа', flex: 1 },
    { field: 'Минимальная высота', type: 'number', flex: 0.5 },
    { field: 'Максимальная высота', type: 'number', flex: 0.5 },
    { field: 'Средняя высота', type: 'number', flex: 0.5 },
  ];

  return (
    <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
      <DataGrid
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        rows={rows}
        columns={columns}
      />
    </Container>
  )
}

export default GroupGrid;
