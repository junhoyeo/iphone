import React from 'react';

import { DivComponent } from '@/types/html';

import classes from './symbols.module.scss';

const Symbols: DivComponent = (props) => {
  return (
    <div className={classes.wrapper} {...props}>
      <div className={classes.container}>
        <div className={classes.cellularList}>
          <div className={`${classes.cellularItem} ${classes.cellularOne}`} />
          <div className={`${classes.cellularItem} ${classes.cellularTwo}`} />
          <div className={`${classes.cellularItem} ${classes.cellularThree}`} />
          <div className={`${classes.cellularItem} ${classes.cellularFour}`} />
        </div>

        <div className={classes.wifiWrapper}>
          <div className={classes.wifi}>
            <div className={classes.wifi}>
              <div className={classes.wifi} style={{ padding: 0 }} />
            </div>
          </div>
        </div>

        <div className={classes.batteryWrapper}>
          <div className={classes.batteryContainer}>
            <div className={classes.battery} />
          </div>
          <div className={classes.batteryElectrode} />
        </div>
      </div>
    </div>
  );
};

export default Symbols;
