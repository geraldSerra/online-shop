import { useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import RemoveCircleOutlineOutlinedIcon from "@mui/icons-material/RemoveCircleOutlineOutlined";
import ControlPointOutlinedIcon from "@mui/icons-material/ControlPointOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

interface CounterProps {
  handleDelete: (arg: number) => void;
  index: number;
}

const Counter = ({ handleDelete, index }: CounterProps) => {
  let [counter, setCounter] = useState<number>(1);
  return (
    <>
      <Box
        sx={{ bgcolor: "#D6E4E5", color: "#3C4048", borderRadius: 10, mb: 1 }}
      >
        <Stack direction="row" justifyContent="space-between">
          {counter >= 2 ? (
            <RemoveCircleOutlineOutlinedIcon
              sx={{
                cursor: "pointer",
                borderRadius: 10,
                transition: "0.3s",
                "&:hover": {
                  color: "white",
                  bgcolor: "#3C4048",
                },
              }}
              onClick={() => {
                setCounter(counter - 1);
              }}
            />
          ) : (
            <DeleteOutlineOutlinedIcon
              sx={{
                cursor: "pointer",
                transition: "0.3s",
                borderRadius: 10,
                "&:hover": {
                  color: "white",
                  bgcolor: "#3C4048",
                },
              }}
              onClick={() => {
                handleDelete(index);
              }}
            />
          )}

          <Typography>
            <strong>{counter}</strong>
          </Typography>
          <ControlPointOutlinedIcon
            sx={{
              cursor: "pointer",
              transition: "0.3s",
              borderRadius: 10,
              "&:hover": {
                color: "white",
                bgcolor: "#3C4048",
              },
            }}
            onClick={() => {
              setCounter(counter + 1);
            }}
          />
        </Stack>
      </Box>
    </>
  );
};

export default Counter;
