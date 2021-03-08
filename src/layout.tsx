import React from 'react';
import Container from '@material-ui/core/Container';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';

type Props = {
  children: React.ReactNode;
};

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      [theme.breakpoints.up('md')]: {
        width: theme.breakpoints.values.md,
      },
      [theme.breakpoints.down('md')]: {
        width: theme.breakpoints.values.sm,
      },
    },
  })
);

const Layout = ({ children }: Props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Container className={classes.root}>
        <main>{children}</main>
      </Container>
    </React.Fragment>
  );
};

export default Layout;
