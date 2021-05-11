import React from "react";
// {}, import 대상이 default가 아님(export default)
import { Typography, AppBar, Card, CardActions, CardContent, CardMedia,CssBaseline, Grid, Toolbar, Container} from '@material-ui/core';
//  icon
import { PhotoCamera } from '@material-ui/icons';

const App = () => {
  return (
    <>
    {/* provide default styling */}
      <CssBaseline />
      {/* navigation bar */}
      <AppBar position="relative">
        {/* 도구모음, 파란선 */}
        <Toolbar>
          <PhotoCamera />
          <Typography variant="h6">
            Photo Album
          </Typography>
        </Toolbar>
      </AppBar>
      <main>
        <div>
          <Container maxWidth="sm">
            {/* 제목 부분 */}
            <Typography variant="h2" align="center" color="textPrimary" gutterBottom>
              Photo Album
            </Typography>
            {/* 설명 */}
            <Typography variant="h5" align="center" color="textSecondary" paragraph>
              Hello everyone This is a photo album adn i'm trying to make this sentence as long as possible so we can see how does it look like on the screen
            </Typography>
            <div>
              <Grid container spacing={2} >

              </Grid>
            </div>
          </Container>
        </div>
      </main>
    </>
  )
}

export default App;

// meterial-ui.com
// 데모, 소스, 가이드 : component
// 구성요소 참조 docs : component api