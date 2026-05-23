import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import AvatarImage from '../images/avatar.jpg'

function Footer() {
  return (
    <Box sx={{ mt: 4, py: 3, textAlign: 'center', bgcolor: 'grey.100' }}>
      <Stack direction="row" justifyContent="center" sx={{ mb: 1 }}>
        <Avatar
          alt="Юрьев Артём"
          src={AvatarImage}
          sx={{ width: 72, height: 72 }}
        />
      </Stack>
      <Typography variant="body1">
        Выполнил: Юрьев Артём
      </Typography>
      <Typography variant="body2" color="text.secondary">
        Б9123-09.03.04(5)
      </Typography>
    </Box>
  )
}

export default Footer
