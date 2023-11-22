import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { NavLink } from "react-router-dom";

export default function Product({
  name,
  capital,
  flag,
  population,
  alpha3Code,
}) {
  return (
    <NavLink to={`/country/${alpha3Code}`}>
      <Card className="max-w-[300px] rounded-sm shadow-lg">
        <CardActionArea>
          <CardMedia component="img" height="140" image={flag} alt={name} />
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {name}
            </Typography>
            <Typography>
              {capital} | {population}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </NavLink>
  );
}
