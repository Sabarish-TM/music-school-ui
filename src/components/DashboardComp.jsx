import * as React from 'react';
import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';

const Img = styled('img')({
  margin: 'auto',
  display: 'block',
  maxWidth: '100%',
  maxHeight: '100%',
});

export default function DashboardComp({data1,data2}) {
  return (
    <Paper
      sx={{
        p: 2,
        margin: 'auto',
        maxWidth: 500,
        flexGrow: 1,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
      }}
    >
      <Grid container spacing={2} alignItems="center">
        <Grid item>
          <Avatar src="/broken-image.jpg" />
        </Grid>
        <Grid item xs={12} sm container alignItems="center">
          <Grid item xs container direction="column" spacing={2}>
            <Grid item>
              <Typography gutterBottom variant="subtitle1" component="div">
                {data1}
              </Typography>
              <Typography variant="body2" gutterBottom sx={{ color: '#8c918d', whiteSpace: 'nowrap' }}>
               {data2}
              </Typography>
            </Grid>
          </Grid>
          <Grid item>
            <Typography
              variant="subtitle1"
              component="div"
              color="red"
              sx={{ color: '#8c918d', whiteSpace: 'nowrap',mt: 10 }}
            >
              view
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Paper>
  );
}