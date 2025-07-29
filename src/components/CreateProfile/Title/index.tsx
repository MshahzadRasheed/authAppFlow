import {View, Text} from 'react-native';
import {styles} from './styles';

interface ITitle {
  title: string;
}

const Title: React.FC<ITitle> = ({title}) => {
  return (
    <View style={{marginTop: 52}}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Title;
