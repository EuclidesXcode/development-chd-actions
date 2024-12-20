import React, { useState } from 'react';
import { Box, Tabs, Tab, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button, Modal, Stack } from '@mui/material';
import axios from 'axios';

function Home() {
  const [tabIndex, setTabIndex] = useState(0);
  const [userName, setUserName] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [profile, setProfile] = useState("admin-internal");
  const [env, setEnv] = useState("https://1uc3pve92e.execute-api.us-east-2.amazonaws.com/dev/public/users/v1/userTypes/GMF/sailpoint/users/");
  const [open, setOpen] = useState(false);
  const [proposalStatus, setProposalStatus] = useState("");
  const [proposal, setProposal] = useState("");
  const [status, setStatus] = useState("");

  const handleTabChange = (event, newValue) => {
    setTabIndex(newValue);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const call = axios.create({
        baseURL: env,
        headers: {
          'Content-Type': 'application/json',
          'x-api-key': env === 'https://m6fbbabmvi.execute-api.us-east-1.amazonaws.com/pp/public/users/v1/userTypes/GMF/sailpoint/users/' ? 'e2BwlxKPQUaTW2XuWOKF98E8FkfGLyGaaizu0Qev' : 'COr8UcK1ggPV5hG9bGam9dMq14A6Hvv8VVNHhZXg',
        },
        timeout: 30000,
      })
      const payload = {
        username: userName,
        name: name,
        email: email,
        profile: profile,
      };
      const response = await call.put(
        payload.username,
        payload
      );
      console.log("SUCESSO: ", response?.data);
      setOpen(true);
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleSubmitProposal = async (event) => {
    setStatus("Em desenvolvimento!")
  }

  const handleModalClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
      <Tabs value={tabIndex} onChange={handleTabChange} centered sx={{
        bgcolor: '#fff',
        borderBottom: '1px solid #e0e0e0',
        width: '100%',
        maxWidth: 548,        
      }}>
        <Tab label="Editar usuário" />
        <Tab label="Aprovar proposta" />
      </Tabs>
      {tabIndex === 0 && (
        <Box
          component="form"
          onSubmit={handleSubmit}
          sx={{ p: 3, maxWidth: 500, mx: "auto", bgcolor: "#fff", boxShadow: 3 }}
        >
          <Typography variant="h5" color={"#c1c1c1"} gutterBottom>
            Edite seu perfil de usuário OKTA
          </Typography>

          <FormControl fullWidth margin="normal">
            <InputLabel id="env-label">Selecione o Ambiente</InputLabel>
            <Select
              labelId="env-label"
              value={env}
              onChange={(e) => setEnv(e.target.value)}
              label="Ambiente"
              required
            >
              <MenuItem value="https://1uc3pve92e.execute-api.us-east-2.amazonaws.com/dev/public/users/v1/userTypes/GMF/sailpoint/users/">DEV</MenuItem>
              <MenuItem value="https://m6fbbabmvi.execute-api.us-east-1.amazonaws.com/pp/public/users/v1/userTypes/GMF/sailpoint/users/">PP</MenuItem>
              <MenuItem value="https://1uc3pve92e.execute-api.us-east-2.amazonaws.com/dev-fenix/public/users/v1/userTypes/GMF/sailpoint/users/">DEV 2</MenuItem>
              <MenuItem value="https://1uc3pve92e.execute-api.us-east-2.amazonaws.com/dev-ta/public/users/v1/userTypes/GMF/sailpoint/users/">AUTOMAÇÃO</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="User Name"
            type="text"
            fullWidth
            margin="normal"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            required
          />

          <TextField
            label="Name"
            type="text"
            fullWidth
            margin="normal"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <TextField
            label="Email"
            type="email"
            fullWidth
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <FormControl fullWidth margin="normal">
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              value={profile}
              onChange={(e) => setProfile(e.target.value)}
              label="Status"
              required
            >
              <MenuItem value="admin-internal">admin-internal</MenuItem>
              <MenuItem value="bit">bit</MenuItem>
              <MenuItem value="crm">crm</MenuItem>
              <MenuItem value="finance">finance</MenuItem>
              <MenuItem value="insurance">insurance</MenuItem>
              <MenuItem value="ofertas">ofertas</MenuItem>
              <MenuItem value="provisioning">provisioning</MenuItem>
              <MenuItem value="service-desk">service-desk</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Enviar
          </Button>

          <Modal open={open} onClose={handleModalClose}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "#fff",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography variant="h6" gutterBottom>
                Sucesso
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="contained" onClick={handleModalClose}>
                  Ok
                </Button>
              </Stack>
            </Box>
          </Modal>
        </Box>
      )}
      {tabIndex === 1 && (
        <Box
          component="form"
          onSubmit={handleSubmitProposal}
          sx={{ p: 3, width: 500, mx: "auto", bgcolor: "#fff", boxShadow: 3 }}
        >
          <Typography variant="h5" color={"#c1c1c1"} gutterBottom>
            Edite o Status da sua Proposta
          </Typography>

          <FormControl fullWidth margin="normal">
            <InputLabel id="env-label">Selecione o Ambiente</InputLabel>
            <Select
              labelId="env-label"
              value={env}
              onChange={(e) => setEnv(e.target.value)}
              label="Ambiente"
              required
            >
              <MenuItem value="teste">DEV</MenuItem>
              <MenuItem value="teste">PP</MenuItem>
              <MenuItem value="teste">DEV 2</MenuItem>
              <MenuItem value="teste">AUTOMAÇÃO</MenuItem>
            </Select>
          </FormControl>

          <TextField
            label="Número da Proposta"
            type="number"
            fullWidth
            margin="normal"
            value={proposal}
            onChange={(e) => setProposal(e.target.value)}
            required
          />

          <FormControl fullWidth margin="normal">
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              value={proposalStatus}
              onChange={(e) => setProposalStatus(e.target.value)}
              label="Status"
              required
            >
              <MenuItem value="approved">APPROVED</MenuItem>
              <MenuItem value="denied">DENIED</MenuItem>
            </Select>
          </FormControl>

          <Button type="submit" variant="contained" color="primary" fullWidth>
            Enviar
          </Button>

          <Modal open={open} onClose={handleModalClose}>
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "50%",
                transform: "translate(-50%, -50%)",
                width: 400,
                bgcolor: "#fff",
                border: "2px solid #000",
                boxShadow: 24,
                p: 4,
              }}
            >
              <Typography variant="h6" gutterBottom>
                {status}
              </Typography>
              <Stack direction="row" spacing={2} justifyContent="center">
                <Button variant="contained" onClick={handleModalClose}>
                  Ok
                </Button>
              </Stack>
            </Box>
          </Modal>
        </Box>
      )}
    </Box>
  );
}

export default Home;