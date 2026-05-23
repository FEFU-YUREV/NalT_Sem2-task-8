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
import TextField from '@mui/material/TextField'
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
  background: 'linear-gradient(180deg, #f5f5f7, #e8e8ed)',
}))

interface ComponentProps {
  active: string
}

const menuItems = [
  { id: '1', label: 'Главная', href: '/' },
  { id: '2', label: 'Таблица', href: '/list' },
  { id: '3', label: 'Диаграмма', href: '/chart' },
  { id: '4', label: 'Тест', href: '/test' },
]

function Navbar({ active }: ComponentProps) {
  const [open, setOpen] = useState(false)

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen)
  }

  return (
    <AppBar id="top" position="static" sx={{ boxShadow: 0, bgcolor: 'transparent', mt: 3 }}>
      <Container maxWidth="xl">
        <StyledToolbar>
          <Typography variant="h6" sx={{ color: '#1d1d1f', fontWeight: 600 }}>
            Легкие ноуты, тяжелые аргументы
          </Typography>
          <Box sx={{ display: { xs: 'none', lg: 'flex' }, gap: 1, alignItems: 'center' }}>
            {menuItems.map((item) => (
              <Button
                key={item.id}
                component={Link}
                to={item.href}
                variant={active === item.id ? 'contained' : 'text'}
                color="inherit"
                size="medium"
                sx={{
                  color: '#1d1d1f',
                  bgcolor: active === item.id ? '#f5f5f7' : 'transparent',
                  boxShadow: 0,
                  '&:hover': {
                    bgcolor: active === item.id ? '#e8e8ed' : 'rgba(0, 0, 0, 0.04)',
                    boxShadow: 0,
                  },
                }}
              >
                {item.label}
              </Button>
            ))}
            <TextField
              size="small"
              placeholder="Поиск по сайту"
              sx={{ ml: 2, width: 220, bgcolor: '#fff' }}
            />
          </Box>
          <Box sx={{ display: { xs: 'flex', lg: 'none' } }}>
            <IconButton aria-label="Открыть меню" onClick={toggleDrawer(true)}>
              <MenuIcon />
            </IconButton>
            <Drawer anchor="top" open={open} onClose={toggleDrawer(false)}>
              <Box>
                <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  <IconButton aria-label="Закрыть меню" onClick={toggleDrawer(false)}>
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
                        to={item.href}
                        selected={isActive}
                        onClick={toggleDrawer(false)}
                        sx={{
                          py: 2,
                          fontSize: '1.1rem',
                          color: '#1d1d1f',
                          textDecoration: 'none',
                          '&.Mui-selected': {
                            bgcolor: '#e8e8ed',
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

