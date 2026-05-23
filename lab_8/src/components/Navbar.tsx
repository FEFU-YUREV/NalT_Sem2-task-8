import CloseRoundedIcon from '@mui/icons-material/CloseRounded'
import MenuIcon from '@mui/icons-material/Menu'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import MenuItem from '@mui/material/MenuItem'
import MenuList from '@mui/material/MenuList'
import { styled } from '@mui/material/styles'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  flexShrink: 0,
  borderRadius: `calc(${theme.shape.borderRadius}px + 8px)`,
  border: '1px solid',
  borderColor: theme.palette.divider,
  padding: '8px 12px',
}))

interface ComponentProps {
  active: string;
}

const menuItems = [
  { id: '1', label: 'Главная', path: '/' },
  { id: '2', label: 'Список зданий', path: '/list' },
  { id: '3', label: 'Диаграммы', path: '/chart' },
  { id: '4', label: 'Проверь себя', path: '/testing' },
]

function Navbar({ active }: ComponentProps) {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <AppBar
      position="static"
      sx={{
        boxShadow: 0,
        bgcolor: 'transparent',
        mt: '28px',
      }}
    >
      <Container maxWidth="xl">
        <StyledToolbar>
          <Typography variant="h6" sx={{ color: '#5d8aa8' }}>
            Самые высокие здания и сооружения
          </Typography>
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 1 }}>
            {menuItems.map((item) => (
              <Link key={item.id} to={item.path} style={{ textDecoration: 'none' }}>
                <Button
                  variant={active === item.id ? 'contained' : 'text'}
                  color="info"
                  size="medium"
                >
                  {item.label}
                </Button>
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
            <IconButton aria-label="Menu button" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box>
                <Box
                  sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <IconButton onClick={toggleDrawer(false)}>
                    <CloseRoundedIcon />
                  </IconButton>
                </Box>
                <MenuList sx={{ p: 0 }}>
                  {menuItems.map((item) => {
                    const isActive = active === item.id

                    return (
                      <MenuItem
                        key={item.id}
                        component={Link}
                        to={item.path}
                        selected={isActive}
                        onClick={toggleDrawer(false)}
                        sx={{
                          py: 2,
                          fontSize: '1.1rem',
                          color: 'inherit',
                          textDecoration: 'none',
                          '&.Mui-selected': {
                            bgcolor: 'info.main',
                            color: 'common.black',
                          },
                          '&.Mui-selected:hover': {
                            bgcolor: 'info.main',
                          },
                          '&:hover': {
                            bgcolor: isActive ? 'info.main' : '#c4e1f4',
                          },
                        }}
                      >
                        {item.label}
                      </MenuItem>
                    )
                  })}
                </MenuList>
              </Box>
            </Drawer>
          </Box>
        </StyledToolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar
