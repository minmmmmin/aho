import * as React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#fff", boxShadow: "none" }}>
      <Toolbar>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            gap: "20px",
          }}
        >
                  
          <Typography
            component={Link}
            to="/"
            sx={{
              textDecoration: "none",
              color: "black",
              fontSize: "16px",
              fontWeight: "bold",
              "&:hover": { color: "blue" },
            }}
          >
            ホーム
          </Typography>

          
          <Typography
            component={Link}
            to="/about"
            sx={{
              textDecoration: "none",
              color: "black",
              fontSize: "16px",
              fontWeight: "bold",
              "&:hover": { color: "blue" },
            }}
          >
            しょうかい
          </Typography>

          <Typography
            component={Link}
            to="/news"
            sx={{
              textDecoration: "none",
              color: "black",
              fontSize: "16px",
              fontWeight: "bold",
              "&:hover": { color: "blue" },
            }}
          >
            ミニゲーム
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
}