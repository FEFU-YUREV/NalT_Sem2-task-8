import Container from '@mui/material/Container'
import { DataGrid, GridColDef, GridRowsProp } from '@mui/x-data-grid'
import { ruRU } from '@mui/x-data-grid/locales'
import { detailPages } from '../../data'

function LaptopGrid() {
  const rows: GridRowsProp = detailPages.map((item) => {
    // Clean price string, e.g., "$2099" -> 2099
    const cleanPrice = parseInt(item.price.replace(/[^0-9]/g, '')) || 0
    return {
      ...item,
      priceValue: cleanPrice,
    }
  })

  const columns: GridColDef[] = [
    { field: 'title', headerName: 'Название', flex: 1 },
    { field: 'tag', headerName: 'Категория', flex: 0.5 },
    { field: 'priceValue', headerName: 'Цена ($)', type: 'number', flex: 0.5 },
    { field: 'score', headerName: 'Оценка', type: 'number', flex: 0.5 },
  ]

  return (
    <Container maxWidth="lg" sx={{ height: '700px', mt: '20px' }}>
      <DataGrid
        localeText={ruRU.components.MuiDataGrid.defaultProps.localeText}
        showToolbar={true}
        rows={rows}
        columns={columns}
      />
    </Container>
  )
}

export default LaptopGrid
