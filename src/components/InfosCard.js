import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import '../styles/booking-card.css';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default function InfosCard({ bookingDetails : { 
  id_booking, 
  firstname, 
  lastname, 
  email, 
  phone, 
  message }, 
  handlePatch,
  handleClickOpen,
  handleClickDelete,
  handleClose,
  open}) {
  const classes = useStyles();


  return (
    <Card className={`${classes.root} card-container`}>
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          Demande de réservation
        </Typography>
        <Typography variant="h5" component="h4">
          {`${firstname} ${lastname}`}
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          <strong>Adresse e-mail:</strong> {email}.
          <br />
          <strong>Numéro de téléphone:</strong> {phone}.
        </Typography>
        <br />
        <Typography variant="body2" component="p">
          <strong>Message:</strong> 
          <br />
          {message}
        </Typography>
        <br />
      </CardContent>
      <CardActions className='actions-booking'>
        <Button size="small" className='validation-booking' onClick={() => handlePatch(id_booking)}>Valider la réservation</Button>
        <Button size="small" className='update-booking'>Modifier la réservation</Button>
        <Button size="small" className='delete-booking' onClick={handleClickOpen}>Supprimer la réservation</Button>
      </CardActions>
      <Dialog
          open={open}
          keepMounted
          onClose={handleClose}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">{"Êtes-vous sur de vouloir supprimer la réservation?"}</DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-slide-description">
              Toute suppression sera irréversible.
          </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose} color="primary">
              Annuler
          </Button>
            <Button onClick={() => handleClickDelete(id_booking)} color="primary">
              Supprimer
          </Button>
          </DialogActions>
        </Dialog>
    </Card>
  );
}