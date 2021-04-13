import { makeStyles } from "@material-ui/core/styles";
export const useStyles = makeStyles((theme) => ({
  paper: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  image: {
    width: 128,
    height: 128
  },
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  bagComponent:{
    width: '95%',
    margin: 'auto',
    marginBottom:'50px',
    paddingTop: '30px',
  },
  bagHeader:{
    textAlign: 'center',
    borderBottom: '1px solid white',
    color:'white'
  },
  leftContent:{
    width: '57%',
    borderRight: '1px solid white',
    height: '600px',
    overflow: 'auto',
  },
  bagItems:{    width: '80%'},
  card:{
    width: '42%',
    margin: '0 auto'
  },
}));