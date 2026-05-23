import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { detailPages } from '../data'

const imgData = detailPages.slice(0, 8)

function Gallery() {
  return (
    <Container id="gallery" maxWidth="lg">
      <Typography variant="h4" sx={{ mt: 4, mb: 2, textAlign: 'center', fontWeight: 600 }}>
        Самые производительные ноутбуки
      </Typography>
      <Grid container spacing={2} sx={{ my: 3 }}>
        {imgData.map((item) => (
          <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
            <Link to={`/laptop/${item.id}`} style={{ textDecoration: 'none' }}>
              <Card sx={{ height: '100%', border: '1px solid #d2d2d7', boxShadow: 0, '&:hover': { cursor: 'pointer' } }}>
                <Box
                  sx={{
                    height: 190,
                    p: 1.5,
                    bgcolor: '#fafafa',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Box
                    component="img"
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    sx={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }}
                  />
                </Box>
                <CardContent sx={{ textAlign: 'center', py: 1.5 }}>
                  <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {item.tag} • {item.price} • {item.score}/100
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

export default Gallery
