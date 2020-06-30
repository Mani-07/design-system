import * as React from 'react';
import classNames from 'classnames';

export interface ProgressBarProps {
  /**
   * Specifies how much of the task that has been completed. Value should lie between 0 to max,
   */
  value: number;
  /**
   * Describes how much work the task indicated by the `Progress Bar` requires
   * @default 100
   */
  max?: number;
}

export const ProgressBar = (props: ProgressBarProps) => {
  const {
    max = 100,
    value,
  } = props;

  const style = {
    width: value > 0 ? `${Math.min(value, max) * 100 / max}%` : '0',
  };

  const ProgressBarClass = classNames({
    ProgressBar: true,
  });

  return (
    <div className={ProgressBarClass}>
      <div className={'ProgressBar-indicator'} style={style} />
    </div>
  );
};

ProgressBar.displayName = 'ProgressBar';

export default ProgressBar;
