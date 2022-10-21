import { useState, useEffect } from "react";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/material/styles";

interface ChipArrayProps {
  data: string[];
  handleDelete?: (arg: number) => void;
}

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(0.5),
}));

export const ChipArray = ({ data, handleDelete }: ChipArrayProps) => {
  return (
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
      {data.map((label, index) => {
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
};
