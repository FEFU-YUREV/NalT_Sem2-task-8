import Box from '@mui/material/Box'
import Typography from '@mui/material/Typography'

function Footer() {
  return (
    <Box id="contacts" sx={{ mt: 4, py: 3, textAlign: 'center', bgcolor: '#f5f5f7' }}>
      <Typography variant="body1">© 2025 • Б9123-09.03.04(5) • Юрьев А.П.</Typography>
      <Typography variant="body2" color="text.secondary">
        Практическая работа: сайт о производительных ноутбуках
      </Typography>
    </Box>
  )
}

export default Footer
