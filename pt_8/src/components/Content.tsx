import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { Link } from 'react-router-dom'
import { detailPages, featureLaptop } from '../data'
import BuildCard from './BuildCard'

const cardData = [detailPages[2], detailPages[0], detailPages[4], detailPages[5]]
const sideCards = [detailPages[6], detailPages[3]]

function Content() {
  return (
    <Container maxWidth="xl">
      <Grid container spacing={{ xs: 3, md: 4 }}>
        {cardData.map((item, index) => (
          <Grid key={item.title} size={{ xs: 12, md: 6 }}>
            <BuildCard laptop={item} cardNumber={index + 1} />
          </Grid>
        ))}
      </Grid>

      <Grid container spacing={3} sx={{ mt: 4, mb: 4, alignItems: 'stretch' }}>
        <Grid size={{ xs: 12, md: 3 }} sx={{ display: 'flex' }}>
          <BuildCard laptop={sideCards[0]} cardNumber={5} forceColumn={true} />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }} sx={{ display: 'flex' }}>
          <Paper
            elevation={0}
            sx={{
              p: { xs: 2, md: 2.5 },
              borderRadius: 3,
              bgcolor: '#f5f5f7',
              border: '1px solid #d2d2d7',
              display: 'flex',
              flexDirection: 'column',
              width: '100%',
            }}
          >
            <Typography variant="h5" sx={{ mb: 1.5, textAlign: 'center', fontWeight: 600 }}>
              {featureLaptop.title}
            </Typography>
            {featureLaptop.description.map((item) => (
              <Typography
                key={item}
                variant="body2"
                sx={{ mb: 1.25, lineHeight: 1.55, textAlign: 'justify' }}
              >
                {item}
              </Typography>
            ))}
            <Grid container spacing={1.5} sx={{ my: 1.5 }}>
              {featureLaptop.images.map((image, index) => (
                <Grid key={image} size={{ xs: 4 }}>
                  <Box
                    component="img"
                    src={image}
                    alt={`${featureLaptop.title} ${index + 1}`}
                    sx={{
                      width: '100%',
                      height: { xs: 80, sm: 110 },
                      objectFit: 'contain',
                      bgcolor: '#fff',
                      borderRadius: 2,
                    }}
                  />
                </Grid>
              ))}
            </Grid>
            <Button component={Link} to="/laptop/0" size="small" sx={{ display: 'block', ml: 'auto', mt: 'auto' }}>
              Подробнее
            </Button>
          </Paper>
        </Grid>
        <Grid size={{ xs: 12, md: 3 }} sx={{ display: 'flex' }}>
          <BuildCard laptop={sideCards[1]} cardNumber={6} forceColumn={true} />
        </Grid>
      </Grid>
    </Container>
  )
}

export default Content
