import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

import WorkModal from './workModal';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    media: {
      height: 140,
    },
    title: {},
    description: {},
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      padding: theme.spacing(2),
    },
  })
);

interface Props {
  src: string;
  title: string;
  simpleDesc: string;
  desc: string[];
  sampleImages: {
    src: string;
    title: string;
  }[];
}

const WorkCard = (props: Props) => {
  const classes = useStyles();
  const { src, title, simpleDesc, desc, sampleImages } = props;

  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Card className={classes.root}>
      <CardActionArea onClick={handleOpen}>
        <CardMedia
          className={classes.media}
          image={src}
          title={title}
        ></CardMedia>
        <CardContent>
          <Typography className={classes.title} gutterBottom variant="h6">
            {title}
          </Typography>
          <Typography className={classes.description} variant="body2">
            {simpleDesc}
          </Typography>
        </CardContent>
      </CardActionArea>
      <WorkModal
        title={title}
        subtitle={simpleDesc}
        desc={desc}
        sampleImages={sampleImages}
        open={open}
        handleClose={handleClose}
      ></WorkModal>
    </Card>
  );
};

export default WorkCard;
