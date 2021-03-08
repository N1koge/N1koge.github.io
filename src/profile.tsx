import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import GithubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import Link from 'next/link';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {},
    desc: {},
    contact: {
      marginRight: 8,
    },
    divider: {
      margin: theme.spacing(1, 0),
    },
  })
);

const bio = require('../public/bio.json');

const Profile = () => {
  const classes = useStyles();

  const getAge = (birth: number): number => {
    const now = new Date();
    const bd = new Date(birth);
    var age;

    age = now.getFullYear() - bd.getFullYear();
    if (now.getMonth() - bd.getMonth() < 0) age--;
    if (now.getMonth() - bd.getMonth() == 0) {
      if (now.getDate() - bd.getDate() < 0) age--;
    }

    return age;
  };

  return (
    <div>
      <p>About me</p>
      <Typography variant="h5">{bio.name}</Typography>
      <Typography variant="subtitle2">
        Age: {getAge(new Date(bio.birth).getTime())}
      </Typography>
      <Divider className={classes.divider}></Divider>
      <div className={classes.desc}>
        {bio.desc.map((line) => (
          <Typography key={line.substring(0, 3)} variant="body2">
            {line}
          </Typography>
        ))}
      </div>
      <Divider className={classes.divider}></Divider>
      <div>
        <span className={classes.contact}>
          github:{' '}
          <Link href={bio.github}>
            <a>
              <GithubIcon></GithubIcon>
            </a>
          </Link>
        </span>
        <span className={classes.contact}>
          twitter:{' '}
          <Link href={bio.twitter}>
            <a>
              <TwitterIcon></TwitterIcon>
            </a>
          </Link>
        </span>
      </div>
    </div>
  );
};

export default Profile;
