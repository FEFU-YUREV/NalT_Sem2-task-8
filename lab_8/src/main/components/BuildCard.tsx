import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'

const StyledTypography = styled(Typography)(({ theme }) => ({
    color: theme.palette.text.secondary,
    textAlign: 'justify',
    '& + &': {
        marginTop: theme.spacing(2),
    },
}))

interface ComponentProps {
    building: {
        img: string, 
        title: string, 
        description: string[],
    };
    cardNumber: number
  }

function BuildCard({ building, cardNumber} : ComponentProps) {
    const isEvenCard = cardNumber % 2 === 0

    return (
      <Card sx={{ display: 'flex', flexDirection: { xs: 'column', md: isEvenCard ? 'row' : 'row-reverse' }, height: '100%' }}>
        <CardMedia
            component="img"
            alt={ building.title }
            image={ building.img }
            sx={{
              width: { xs: '100%', md: '30%' },
              height: { xs: 'auto', md: 'auto' },
              objectFit: { xs: 'contain', md: 'cover' },
            }}
        />
        <Box sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" >
              { building.title }
            </Typography>
            { building.description.map((item, ind) => (
              <StyledTypography key={ind} variant="body2">    
                { item }
              </StyledTypography>
            ))}
          </CardContent>
          <CardActions sx={{ justifyContent: isEvenCard ? 'flex-end' : 'flex-start', mt: 'auto'}} >
            <Button size="small">Подробнее</Button>
          </CardActions>
        </Box>
      </Card>
    )
}

export default BuildCard;
