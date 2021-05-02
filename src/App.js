import { useState, useEffect } from 'react';
import { Select, MenuItem, Typography, Slider, Container, Button, Checkbox, FormControlLabel, TextField, DialogActions, DialogContent, DialogContentText, DialogTitle, Dialog } from '@material-ui/core'; 
import { withStyles, makeStyles } from '@material-ui/core/styles';



  
const useStyles = makeStyles({
  tekstikentta : {
                  marginTop : 10,
                  marginBottom : 10
                 }
});

function App() {

  const [mokki, setMokki] = useState("");
  const [aika, setAika] = useState(1);
  const [siivous, setSiivous] = useState(false);
  const [nimi, setNimi] = useState("");
  const [paiva, setPaiva] = useState("");
  const tyylit = useStyles();
  const [open, setOpen] = useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const asetaAika = (e, kesto) => { setAika(kesto) };

  return (
<Container>

<Typography variant="h1" className={tyylit.tekstikentta} >
        LOMAMÖKKI OY
      </Typography>
     
<Typography variant="h5">
        Valitse mökki
      </Typography>
  <Select
            fullWidth={true}
            onChange={ (e) => { setMokki(e.target.value) } } 
            >

          <MenuItem value={10} >Rantakartano 10e</MenuItem>
          <MenuItem value={20} >Vuoristomaja 20e</MenuItem>
          <MenuItem value={30} >Karavaani 30e</MenuItem>
  </Select>

  <Typography variant="h5" className={tyylit.tekstikentta}>
        Valitse päivien määrä
        </Typography>

      <Slider 
        defaultValue={1}
        aria-labelledby="paivat"
        step={1}
        marks
        
        min={1}
        max={14}
        valueLabelDisplay="auto"
        className={tyylit.tekstikentta}
        onChange={ asetaAika }
      />
     
<FormControlLabel 
        control={<Checkbox
          onChange={ (e) => { setSiivous(e.target.checked) } }
          />}
        label="Loppusiivous 100e"
        className={tyylit.tekstikentta}
      />

<Typography variant="h4" >Yhteissumma: 
{(siivous) ? mokki * aika + 100
: mokki * aika
} 
</Typography>

<TextField 
        variant="outlined"
        label="Nimi"
        placeholder="Etunimi Sukunimi"
        fullWidth={true}
        className={tyylit.tekstikentta}
        onChange={ (e) => { setNimi(e.target.value) } }
      />
     
      <TextField 
        variant="outlined"
        label="Saapumispäivä"
        placeholder=""
        type="date"
        fullWidth={true}
        defaultValue="01-01-2021"
        className={tyylit.tekstikentta}
        onChange={ (e) => { setPaiva(e.target.value) } }
      />

<Button
        variant="contained"
        color="primary"
        fullWidth={true}
        size="large"
        onClick={handleClickOpen}
      >Varaa mökki</Button>

<Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="mokkivaraus"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="mokkivaraus">{"Yhteenveto"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Yhteissumma: {(siivous) ? mokki * aika + 100
                          : mokki * aika
                          } €
                        <br/>
            Saapumispäivä: { paiva }
            <br/>
            Varaajannimi: { nimi }
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Peru
          </Button>
          <Button onClick={handleClose} color="primary" autoFocus>
            Varaa
          </Button>
        </DialogActions>
      </Dialog>
  </Container>
  );
}

export default App;
