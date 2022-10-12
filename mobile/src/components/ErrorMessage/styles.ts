import { StyleSheet } from 'react-native';
import { THEME } from '../../theme';

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 12
    },

    message: {
        fontSize: THEME.FONT_SIZE.XS,
        color: THEME.COLORS.ALERT,
        marginLeft: 4
    }
});