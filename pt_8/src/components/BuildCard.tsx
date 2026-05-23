import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Chip from '@mui/material/Chip'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { Link } from 'react-router-dom'
import { DetailPageItem } from '../data'

const StyledTypography = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.secondary,
  textAlign: 'justify',
  '& + &': {
    marginTop: theme.spacing(2),
  },
}))

interface ComponentProps {
  laptop: DetailPageItem
  cardNumber: number
  forceColumn?: boolean
}

function BuildCard({ laptop, cardNumber, forceColumn }: ComponentProps) {
  const isEvenCard = cardNumber % 2 === 0

  return (
    <Card
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: forceColumn ? 'column' : isEvenCard ? 'row' : 'row-reverse' },
        height: '100%',
        width: '100%',
      }}
    >
      <CardMedia
        component="img"
        alt={laptop.title}
        image={laptop.img}
        sx={{
          width: { xs: '100%', sm: forceColumn ? '100%' : '34%' },
          height: { xs: 180, sm: forceColumn ? 180 : 'auto' },
          objectFit: 'contain',
          p: 1,
        }}
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <CardContent>
          <Chip label={laptop.tag} size="small" sx={{ mb: 1 }} />
          <Typography gutterBottom variant="h5">
            {laptop.title}
          </Typography>
          {laptop.description.map((item, ind) => (
            <StyledTypography key={ind} variant="body2">
              {item}
            </StyledTypography>
          ))}
        </CardContent>
        <CardActions sx={{ justifyContent: isEvenCard ? 'flex-end' : 'flex-start', mt: 'auto' }}>
          <Button component={Link} to={`/laptop/${laptop.id}`} size="small">
            Подробнее
          </Button>
          <Typography variant="body2" color="text.secondary">
            {laptop.price} • {laptop.score}/100
          </Typography>
        </CardActions>
      </Box>
    </Card>
  )
}

export default BuildCard
