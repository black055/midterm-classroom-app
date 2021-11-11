import React from "react";
import { Box, Card, Grid, IconButton, TextField, Typography } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";

export default function InvitationCard() {
  return (
    <Card>
      <Grid sx={{ width: "90%", mx: "auto", my: "2rem" }} container rowGap={2}>
        <Grid item xs={12}>
          <Typography variant="h4" color="primary">
            Invite someone to join this class
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" color="secondary">
            Invite a teacher assistant
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField fullWidth label="Email" />
            <IconButton color="secondary" onClick={() => {}}>
              <SendIcon />
            </IconButton>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" color="secondary">
            Invite a student
          </Typography>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <TextField fullWidth label="Email" />
            <IconButton color="secondary" onClick={() => {}}>
              <SendIcon />
            </IconButton>
          </Box>
        </Grid>
      </Grid>
    </Card>
  );
}
