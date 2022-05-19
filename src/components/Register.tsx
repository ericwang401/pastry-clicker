import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import api from '@/util/api'

export default function Register() {
  const [open, setOpen] = React.useState(false);
  const [username, setUsername] = React.useState('');
    const [password, setPassword] = React.useState('');

  const register = async () => {
    const { user, session, error } = await api.auth.signUp({
        email: username,
        password: password,
      })
      console.log(user, session, error)
  }

  return (
    <div>
      <Button variant="outlined" onClick={() => setOpen(true)}>
        Register
      </Button>
      <Dialog open={open} onClose={() => setOpen(false)}>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Save you pasteries ! also this app is kinda bad lmao
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <TextField
            autoFocus
            margin="dense"
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={() => setOpen(false)}>Cancel</Button>
          <Button onClick={register}>Subscribe</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}