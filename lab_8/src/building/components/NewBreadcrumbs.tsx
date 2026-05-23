import Breadcrumbs from '@mui/material/Breadcrumbs';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

interface breadProps {
  name: string;
}

function NewBreadcrumbs({ name }: breadProps) {
  return (
    <Breadcrumbs separator="›" aria-label="breadcrumb" sx={{ mt: "15px" }}>
      <Link to="/" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="body1" sx={{ color: 'primary.main', fontWeight: "bold" }}>
          ГЛАВНАЯ
        </Typography>
      </Link>
      <Link to="" style={{ textDecoration: 'none', color: 'inherit' }}>
        <Typography variant="body1" sx={{ color: "black" }}>
          {name}
        </Typography>
      </Link>
    </Breadcrumbs>
  );
}

export default NewBreadcrumbs;
