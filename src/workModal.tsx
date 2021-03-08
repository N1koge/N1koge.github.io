import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
    },
    container: {
      outline: 'none',
    },
    paper: {
      padding: theme.spacing(2),
    },
    title: {},
    description: {},
  })
);

interface Props {
  title: string;
  subtitle: string;
  desc: string[];
  sampleImages: {
    src: string;
    title: string;
  }[];
  open: boolean;
  handleClose: () => void;
}

const WorkModal = (props: Props) => {
  const classes = useStyles();
  const { title, subtitle, desc, sampleImages, open, handleClose } = props;

  return (
    <Modal className={classes.modal} open={open} onClose={handleClose}>
      <Container className={classes.container} maxWidth="md">
        <Paper className={classes.paper}>
          <h2 className={classes.title}>{title}</h2>
          <p>{subtitle}</p>
          <div>
            <p>
              <Link href="https://github.com/N1koge/ba-stats-n-lib-portfolio">
                github
              </Link>
              ,{' '}
              <Link href="https://stats-app-portfolio.vercel.app/">
                sample project
              </Link>
            </p>
          </div>
          {desc.map((line) => (
            <p key={line.substring(0, 3)}>{line}</p>
          ))}
          <GridList cols={3}>
            {sampleImages.map((sampleImage) => (
              <GridListTile key={sampleImage.src}>
                <img
                  src={sampleImage.src}
                  alt={sampleImage.title}
                  height="180"
                ></img>
                <GridListTileBar title={sampleImage.title}></GridListTileBar>
              </GridListTile>
            ))}
          </GridList>
        </Paper>
      </Container>
    </Modal>
  );
};

export default WorkModal;
