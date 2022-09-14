import { ActivityIndicator, View } from 'react-native';
import { THEME } from '../../theme';
// Styles //
import { styles } from './styles';

export function Loading() {
  return (
    <View style={styles.container}>
        <ActivityIndicator color={`${THEME.COLORS.PRIMARY}`} size={32}/>
    </View>
  );
}