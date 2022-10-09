import { StyleSheet } from 'react-native';
import { THEME } from '../../../theme';

export const styles = StyleSheet.create({
    checkBox: {
        height: 24,
        width: 24,
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 2,
        borderRadius: 6
    },

    label: {
        fontSize: THEME.FONT_SIZE.SM,
        fontFamily: THEME.FONT_FAMILY.REGULAR,
        marginLeft: 8
    }
});