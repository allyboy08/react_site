import r2d2 from '../../assets/sgif.gif'

import classes from './Loader.module.css';

const LoadingSpinner = () => {
  return <div className={classes.spinner}>
        <img src={r2d2} alt="okay" />
      </div>;
}

export default LoadingSpinner;