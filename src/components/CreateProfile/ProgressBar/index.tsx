import * as Progress from 'react-native-progress';
import {Metrics} from '../../../theme';
import {styles} from './styles';

const MAX_STEPS: number = 3;

interface IProgressBar {
  steps: number;
}

const ProgressBar: React.FC<IProgressBar> = ({steps}) => {
  let progress = (100 / MAX_STEPS / 100) * steps;

  return (
    <Progress.Bar
      progress={progress}
      width={Metrics.screenWidth * 0.5}
      borderRadius={8}
      style={styles.container}
      useNativeDriver
      color={'black'}
      unfilledColor={'gray'}
      borderColor={'white'}
    />
  );
};

export default ProgressBar;
