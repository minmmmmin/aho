import * as React from "react";
import {
  AppBar,
  Toolbar,
  Box,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import { useTheme, useMediaQuery } from "@mui/material";

const menuItems = [
  { to: "/", label: "ホーム" },
  { to: "/about", label: "しょうかい" },
  { to: "/animal", label: "ずかん" },
  { to: "/news", label: "ミニゲーム" },
  { to: "/question", label: "よくある質問" },
  { to: "/goods", label: "グッズ" },
  { to: "/inf", label: "お問い合わせ" },
];

export default function Header() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [open, setOpen] = React.useState(false);

  return (
    <Box>
      {/* 一番上：タイトル（スマホは左にハンバーガー） */}
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          px: 2,
          py: 2,
          borderBottom: "1px solid #eee",
        }}
      >
        {/* 左：ハンバーガー or 空 */}
        <Box sx={{ width: 48 }}>
          {isMobile && (
            <IconButton onClick={() => setOpen(true)}>
              <MenuIcon />
            </IconButton>
          )}
        </Box>

        {/* 中央：タイトル */}
        <Typography
          component={Link}
          to="/"
          sx={{
            fontFamily: "Hanazome",
            textDecoration: "none",
            color: "black",
            fontSize: { xs: "24px", sm: "32px" },
            fontWeight: "bold",
            mx: "auto",
          }}
        >
          あほっこ動物
        </Typography>

        {/* 右：空（左と同じ幅） */}
        <Box sx={{ width: 48 }} />
      </Box>

      {/* ヘッダー画像 */}
      <Box
        component="img"
        src="/images/aho.png"
        alt="Header Image"
        sx={{
          width: "100%",
          height: { xs: "150px", sm: "200px", md: "250px" },
          objectFit: "cover",
        }}
      />

      {/* ナビゲーション（PCのみ表示） */}
      {!isMobile && (
        <AppBar
          position="static"
          sx={{
            backgroundColor: "#fff",
            boxShadow: "none",
            borderBottom: "1px solid #ddd",
          }}
        >
          <Toolbar sx={{ justifyContent: "center" }}>
            <Box sx={{ display: "flex", gap: "32px" }}>
              {menuItems.map(({ to, label }) => (
                <Typography
                  key={to}
                  component={Link}
                  to={to}
                  sx={{
                    fontFamily: "Hanazome",
                    textDecoration: "none",
                    color: "black",
                    fontSize: "18px",
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
      )}

      {/* ドロワー（スマホ） */}
      <Drawer anchor="left" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 250 }}>
          <List>
            {menuItems.map((item) => (
              <ListItem key={item.to} disablePadding>
                <ListItemButton
                  component={Link}
                  to={item.to}
                  onClick={() => setOpen(false)}
                >
                  <ListItemText
                    primary={item.label}
                    primaryTypographyProps={{
                      fontFamily: "Hanazome",
                      fontSize: "18px",
                    }}
                  />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </Box>
  );
}
