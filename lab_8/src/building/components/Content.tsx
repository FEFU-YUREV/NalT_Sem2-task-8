import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { styled } from '@mui/material/styles';
import { DetailPageItem } from '../../data';
import NewBreadcrumbs from './NewBreadcrumbs';

const StyledTypography = styled(Typography)(({ theme }) => ({
  textAlign: 'justify',
  color: theme.palette.text.primary,
  fontSize: '16px',
}));

interface contentProps {
  struct: DetailPageItem;
}

function Content({ struct }: contentProps) {
  return (
    <Container maxWidth="lg" sx={{ mt: '20px' }}>
      <NewBreadcrumbs name={struct.title} />
      <Typography
        variant="h4"
        component="h1"
        sx={{ textAlign: 'center', mb: '20px', color: 'text.secondary' }}
      >
        {struct.title}
      </Typography>

      <Box
        component="img"
        src={struct.img}
        alt={struct.title}
        sx={{
          display: 'block',
          width: { xs: '100%', sm: '70%', md: '40%' },
          maxWidth: '420px',
          mx: 'auto',
          mb: '25px',
        }}
      />
      <Grid container spacing={{ xs: 2, md: 4 }}>
        {struct.description.map((item, index) => (
          <Grid key={index} size={{ xs: 12, md: 6 }}>
            <StyledTypography variant="body2">
              {item}
            </StyledTypography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

export default Content;
