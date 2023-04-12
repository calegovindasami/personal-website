import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Alert from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_elex9ho",
        "template_gj9qniq",
        form.current,
        "1smH57YKlZzEm5rCW"
      )
      .then(
        (result) => {
          console.log(result.text);
          setOpen(true);
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const [open, setOpen] = React.useState(false);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  return (
    <form autoComplete="off" ref={form} onSubmit={sendEmail}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",

          alignItems: "stretch",
          gap: 2,
        }}
      >
        <Typography textAlign="left" variant="h4" fontWeight="bolder">
          Tell me something!
        </Typography>

        <TextField
          type="text"
          name="email_address"
          required
          label="Email Address"
        />

        <Box
          sx={{
            display: "flex",
            gap: 1,
          }}
        >
          <TextField
            sx={{
              width: "50%",
            }}
            variant="outlined"
            type="text"
            name="first_name"
            required
            label="First Name"
          />
          <TextField
            sx={{
              width: "50%",
            }}
            type="text"
            name="last_name"
            required
            label="Last Name"
          />
        </Box>

        <TextField type="text" name="company_name" required label="Company" />
        <TextField
          rows={5}
          name="message"
          multiline
          defaultValue=""
          label="Message"
          required
        />
        <Button
          type="submit"
          sx={{
            fontSize: 16,
            fontWeight: "Bold",
            maxWidth: "30%",
            bgcolor: "primary.dark",
          }}
          variant="contained"
          size="large"
        >
          SUBMIT
        </Button>
      </Box>
      <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
        <Alert onClose={handleClose} severity="success" sx={{ width: "100%" }}>
          Message has been sent!
        </Alert>
      </Snackbar>
    </form>
  );
};
