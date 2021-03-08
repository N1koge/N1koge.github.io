import classes from '*.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubHeader from '@material-ui/core/ListSubheader';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  listItem: {
    paddingTop: 0,
    paddingBottom: 0,
  },
  list: {
    margin: '3px',
  },
  end: {
    textAlign: 'right',
  },
});

const skills = require('../public/skills.json');

const Skills = () => {
  const classes = useStyles();
  const { languages, others } = skills;
  const tlsAndFws = skills.toolsAndFrameworks;

  const listComponent = (title: string, list: any) => {
    return (
      <List
        className={classes.list}
        subheader={<ListSubHeader color="inherit">{title}</ListSubHeader>}
      >
        <Divider variant="middle"></Divider>
        {list.map((item) => {
          const term = new Date().getFullYear() - item.from;
          return (
            <ListItem className={classes.listItem}>
              <ListItemText>{item.name}</ListItemText>
              <ListItemText className={classes.end}>
                {term} ~ {term + 1} year
              </ListItemText>
            </ListItem>
          );
        })}
      </List>
    );
  };

  return (
    <div className={classes.root}>
      <p>Skills</p>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6} md={4}>
          {listComponent('Languages', languages)}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {listComponent('Tools and Frameworks', tlsAndFws)}
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          {listComponent('Others', others)}
        </Grid>
      </Grid>
    </div>
  );
};

export default Skills;
