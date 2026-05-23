import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import Typography from '@mui/material/Typography'
import { DetailPageItem } from '../../data'
import NewBreadcrumbs from './NewBreadcrumbs'

interface ContentProps {
  laptop: DetailPageItem
}

function LaptopContent({ laptop }: ContentProps) {
  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>
      <NewBreadcrumbs name={laptop.title} />
      <Paper elevation={0} sx={{ p: 4, borderRadius: 3, bgcolor: '#f5f5f7' }}>
        <Grid container spacing={4} sx={{ alignItems: 'center' }}>
          <Grid size={{ xs: 12, md: 5 }} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="img"
              src={laptop.img}
              alt={laptop.title}
              sx={{
                width: '100%',
                maxWidth: 400,
                objectFit: 'contain',
                bgcolor: '#fff',
                borderRadius: 2,
                p: 3, // added padding inside the white box
                mb: { xs: 4, md: 0 }, // margin on bottom for mobile view, separating from text
              }}
            />
          </Grid>
          <Grid size={{ xs: 12, md: 7 }} sx={{ pl: { md: 4 } }}>
            <Typography variant="h4" sx={{ fontWeight: 600, mb: 2 }}>
              {laptop.title}
            </Typography>
            <Typography variant="subtitle1" color="text.secondary" sx={{ mb: 3 }}>
              {laptop.tag} • {laptop.price} • Оценка: {laptop.score}/100
            </Typography>
            {laptop.description.map((paragraph, index) => (
              <Typography key={index} variant="body1" sx={{ mb: 2, lineHeight: 1.6 }}>
                {paragraph}
              </Typography>
            ))}
          </Grid>
        </Grid>
      </Paper>
    </Container>
  )
}

export default LaptopContent
