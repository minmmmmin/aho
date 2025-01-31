import React, { useEffect, useState } from "react";
import { Grid, Typography } from "@mui/material";

export default function Animal() {
  const [imagePaths, setImagePaths] = useState([]); // JSONデータを保存するためのstate

  // animals.jsonを読み込む
  useEffect(() => {
    const loadImagePaths = async () => {
      try {
        const response = await fetch("aho.json");
        const data = await response.json();
        setImagePaths(data.imagePaths); // 画像パスとキャプションをステートにセット
      } catch (err) {
        console.error("画像データの読み込みに失敗しました:", err);
      }
    };

    loadImagePaths();
  }, []);

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
            marginBottom: "50px", // 下部の余白を追加
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
