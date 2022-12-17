import classes from './pagination.module.scss';

export const Pagination: React.FC = () => {
  return (
    <div className={classes.wrapper}>
      {/* <div className={classes.paginationCircle} /> */}
      <div className={`${classes.paginationCircle} selected`} />
    </div>
  );
};
