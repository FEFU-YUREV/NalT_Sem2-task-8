import Container from '@mui/material/Container'
import { DataGrid, GridColDef, GridRowsProp } from "@mui/x-data-grid"
import { ruRU } from '@mui/x-data-grid/locales'
import buildings from "../table"

function BuildingsGrid() {
  const rows: GridRowsProp = buildings;
  const columns: GridColDef[] = [
    { field: 'Название', headerName: 'Название', flex: 1 },
    { field: 'Тип', flex: 0.5 },
    { field: 'Страна', flex: 0.5 },
    { field: 'Город', flex: 0.5 },
    { field: 'Год', type: 'number' },
    { field: 'Высота', type: 'number' },
  ];


  return (
   <Container maxWidth="lg" sx={{height: '700px', mt: '20px'}}>
     <DataGrid
       localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
       showToolbar={true}
       rows={rows}
       columns={columns}
    />
   </Container>
 )
}
export default BuildingsGrid;
