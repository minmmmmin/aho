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
            gap: "24px",
          }}
        >
                  
          <Typography
            component={Link}
            to="/"
            sx={{
              fontFamily: 'Hanazome',
              textDecoration: "none",
              color: "black",
              fontSize: "24px",
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
              fontFamily: 'Hanazome',
              textDecoration: "none",
              color: "black",
              fontSize: "24px",
              fontWeight: "bold",
              "&:hover": { color: "blue" },
            }}
          >
            しょうかい
          </Typography>

          <Typography
            component={Link}
            to="/animal"
            sx={{
              fontFamily: 'Hanazome',
              textDecoration: "none",
              color: "black",
              fontSize: "24px",
              fontWeight: "bold",
              "&:hover": { color: "blue" },
            }}
          >
            ずかん
          </Typography>

          <Typography
            component={Link}
            to="/news"
            sx={{
              fontFamily: 'Hanazome',
              textDecoration: "none",
              color: "black",
              fontSize: "24px",
              fontWeight: "bold",
              "&:hover": { color: "blue" },
            }}
          >
            ミニゲーム
          </Typography>

          <Typography
            component={Link}
            to="/question"
            sx={{
              fontFamily: 'Hanazome',
              textDecoration: "none",
              color: "black",
              fontSize: "24px",
              fontWeight: "bold",
              "&:hover": { color: "blue" },
            }}
          >
            よくある質問
          </Typography>

          <Typography
            component={Link}
            to="/goods"
            sx={{
              fontFamily: 'Hanazome',
              textDecoration: "none",
              color: "black",
              fontSize: "24px",
              fontWeight: "bold",
              "&:hover": { color: "blue" },
            }}
          >
            グッズ
          </Typography>

          <Typography
            component={Link}
            to="/inf"
            sx={{
              fontFamily: 'Hanazome',
              textDecoration: "none",
              color: "black",
              fontSize: "24px",
              fontWeight: "bold",
              "&:hover": { color: "blue" },
            }}
          >
            お問い合わせ
          </Typography>

        </Box>
      </Toolbar>
    </AppBar>
  );
}