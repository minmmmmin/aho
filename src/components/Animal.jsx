import React from "react";
import { Grid, Typography } from "@mui/material";

export default function Animal() {
  const imagePaths = [
    { src: "images/mouse.PNG", caption: "ねずみ" },
    { src: "images/usi.PNG", caption: "うし" },
    { src: "images/tora.PNG", caption: "とらくん" },
    { src: "images/usagi.PNG", caption: "うきうきらびっと" },
    { src: "images/tatu.PNG", caption: "たつ" },
    { src: "images/hebi.PNG", caption: "へび" },
    { src: "images/uma.PNG", caption: "うま" },
    { src: "images/hituji.PNG", caption: "ひつじ" },
    { src: "images/monkey.PNG", caption: "うきうきもんきー" },
    { src: "images/piyo.PNG", caption: "piyo" },
    { src: "images/inu.PNG", caption: "いぬ" },
    { src: "images/inoshishi.PNG", caption: "いのしし" },
    { src: "images/mogumogurisu.png", caption: "もぐもぐりす" },
    { src: "images/kumasan.png", caption: "くまさん" },
    { src: "images/pig.png", caption: "ぶた" },
    { src: "images/tanuki.png", caption: "たぬき" },
  ];

  return (
    <Grid
      container
      spacing={2}
      style={{
        paddingLeft: "16px",
        paddingRight: "16px",
        margin: "0 auto", // 中央揃え
        maxWidth: "1200px", // 全体の幅を制限
      }}
    >
      {imagePaths.map((image, index) => (
        <Grid
          item
          xs={12}
          sm={3}
          key={index}
          style={{
            textAlign: "center",
            marginBottom: "20px", // 下部の余白を追加
          }}
        >
          <img
            src={image.src}
            alt={image.caption}
            style={{
              width: "70%", // 画像の幅を指定
              height: "auto", // アスペクト比を維持
            }}
          />
          <Typography
            variant="body1"
            fontFamily="Hanazome"
            style={{
              marginTop: "5px",
              fontSize: "1.5rem",
            }}
          >
            {image.caption}
          </Typography>
        </Grid>
      ))}
    </Grid>
  );
}
