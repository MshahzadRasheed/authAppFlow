import {SafeAreaView, View, Text, Button} from 'react-native';
import {useState} from 'react';
import ProgressBar from '../../../components/CreateProfile/ProgressBar';
import Title from '../../../components/CreateProfile/Title';
import {styles} from './styles';
import {CustomNavbar} from '../../../components';

const ProfileSetup = () => {
  const [steps, setSteps] = useState(0);

  const incrementSteps = () => {
    if (steps < 3) setSteps(steps + 1);
  };

  const decrementSteps = () => {
    if (steps > 0) setSteps(steps - 1);
  };

  const getStepTtitle = () => {
    switch (steps) {
      case 0:
        return 'Upload your image';
      case 1:
        return 'Your Profile Image';
      case 2:
        return 'Personal Information';
      case 3:
        return 'Bio';
      default:
        return '';
    }
  };

  const renderSteps = () => {
    switch (steps) {
      case 0:
        return <Text>Step 1</Text>;
      case 1:
        return <Text>Step 2</Text>;
      case 2:
        return <Text>Step 3</Text>;
      case 3:
        return <Text>Step 4</Text>;
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <CustomNavbar title="Profile Setup" leftBtnPress={() => alert('sooon')} />
      <ProgressBar steps={steps} />
      <Title title={getStepTtitle()} />
      {renderSteps()}
      <Button title="Increment" onPress={incrementSteps} />
      <Button title="Decrement" onPress={decrementSteps} />
    </SafeAreaView>
  );
};

export default ProfileSetup;
