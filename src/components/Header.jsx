import * as React from "react";
import { AppBar, Toolbar, Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <Box>
      <Box
        component="img"
        src="/images/aho.png"
        alt="Header Image"
        sx={{
          width: "100%",
          height: { xs: "150px", sm: "200px", md: "250px" },
          objectFit: "cover",
          objectPosition: "center",
        }}
      />

      <AppBar
        position="static"
        sx={{
          backgroundColor: "#fff",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Toolbar>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
              gap: {
                xs: "2%",
                md: "5%",
              },
            }}
          >
            {[
              { to: "/", label: "ホーム" },
              { to: "/about", label: "しょうかい" },
              { to: "/animal", label: "ずかん" },
              { to: "/news", label: "ミニゲーム" },
              { to: "/question", label: "よくある質問" },
              { to: "/goods", label: "グッズ" },
              { to: "/inf", label: "お問い合わせ" },
            ].map(({ to, label }) => (
              <Typography
                key={to}
                component={Link}
                to={to}
                sx={{
                  fontFamily: "Hanazome",
                  textDecoration: "none",
                  color: "black",
                  fontSize: {
                    xs: "10px",
                    sm: "15px",
                    md: "20px",
                    lg: "24px",
                  },
                  fontWeight: "bold",
                  "&:hover": { color: "blue" },
                }}
              >
                {label}
              </Typography>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
