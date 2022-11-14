import { useContext } from "react";
import { Box, Dialog, Typography } from "@mui/material";
import SentimentVerySatisfiedRoundedIcon from "@mui/icons-material/SentimentVerySatisfiedRounded";
import { PurchasedContext } from "../context/PurchasedContext";

const ThanksToBuy = () => {
  const { purchased, setPurchased } = useContext(PurchasedContext);
  return (
    <Dialog
      open={purchased ? purchased : false}
      onClose={() => {
        setPurchased(false);
      }}
      sx={{ borderRadius: 10 }}
    >
      <Box
        sx={{
          maxWidth: "400px",
          bgcolor: "white",
          justifyItems: "center",
          boxShadow: 5,
          px: 5,
          py: 3,
        }}
      >
        <Typography
          variant="h4"
          textAlign="center"
          color="#003865"
          sx={{ py: 2 }}
        >
          <strong>
            Thanks for you purchase!{" "}
            <SentimentVerySatisfiedRoundedIcon
              sx={{ color: "#00ADB5", fontSize: "80px" }}
            />
          </strong>
        </Typography>
      </Box>
    </Dialog>
  );
};

export default ThanksToBuy;
