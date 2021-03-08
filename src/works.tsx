import Grid from '@material-ui/core/Grid';
import WorkCard from '../src/workCard';

const works = require('../public/works/works.json');

const Works = () => {
  return (
    <div>
      <p>My Works</p>
      <Grid container spacing={3}>
        {works.map((work) => {
          const { src, title, simpleDesc, desc, sampleImages } = work;

          return (
            <Grid key={title} item xs={12} sm={6} md={4}>
              <WorkCard
                src={src}
                title={title}
                simpleDesc={simpleDesc}
                desc={desc}
                sampleImages={sampleImages}
              ></WorkCard>
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
};

export default Works;
