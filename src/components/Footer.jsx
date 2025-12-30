import { Box, Typography, Container, Link } from '@mui/material';

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        bgcolor: 'gray',
        py: 3,
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            textAlign: 'center',
            mt: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          {/* 左側の画像 */}
          <Box
            component="img"
            src="/images/usagi.png"
            alt="usagi"
            sx={{ width: 24, height: 24, mx: 1 }}
          />

          <Link
            href="https://x.com/carrot__pyon_"
            color="inherit"
            target="_blank"
            sx={{ textDecoration: 'none', fontSize: '16px' }}
          >
            作者のX（旧Twitter）
          </Link>

          {/* 右側の画像 */}
          <Box
            component="img"
            src="/images/usagi.png"
            alt="usagi"
            sx={{ width: 24, height: 24, mx: 1 }}
          />
        </Box>

        <Typography
          variant="subtitle1"
          align="center"
          color="white"
          component="p"
          sx={{ mt: 3 }}
        >
          Copyright © 2024 min
        </Typography>
      </Container>
    </Box>
  );
}
