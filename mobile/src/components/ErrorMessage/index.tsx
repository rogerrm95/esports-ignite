import { Text, View, ViewProps } from "react-native";
import { WarningCircle } from "phosphor-react-native";
// Styles //
import { styles } from "./styles";
import { THEME } from "../../theme";

interface ErrorMessageProps extends ViewProps {
    message: string | undefined | null,
}

export function ErrorMessage({ message = '', ...rest }: ErrorMessageProps) {
    return (
        <View style={styles.container} {...rest}>
            <WarningCircle size={14} color={THEME.COLORS.ALERT}/>

            <Text style={styles.message}>
                {message}
            </Text>
        </View>
    )
}