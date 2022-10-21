import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions, Grid } from "@mui/material";
import Stack from "@mui/material/Stack";
import { cart } from "../data/Cart";

interface ChipArrayProps {
  data: string[];
  handleDelete?: (arg: number) => void;
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export const ChipArray = ({ data, handleDelete }: ChipArrayProps) => (
  <Paper
    sx={{
      display: "block",
      flexWrap: "wrap",
      listStyle: "none",
      p: 2,
      my: "10px",
    }}
    component="ul"
  >
    {cart.map((label, index) => {
      return (
        <>
          <ListItem
            sx={{
              display: "block",
              py: 0.8,
            }}
            key={index}
          >
            <Chip
              label={label}
              onDelete={handleDelete ? () => handleDelete(index) : undefined}
            />
          </ListItem>
        </>
      );
    })}
  </Paper>
);
