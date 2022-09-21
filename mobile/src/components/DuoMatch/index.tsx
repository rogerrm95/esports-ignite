import { View, Modal, ModalProps, Text, TouchableOpacity } from 'react-native';
// Icons //
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { CheckCircle } from 'phosphor-react-native'
// Styles //
import { styles } from './styles';
import { THEME } from '../../theme';
import { Heading } from '../Heading';

interface Props extends ModalProps {
    discord: string,
    onClose: () => void
}

export function DuoMatch({ discord, onClose, ...rest }: Props) {
    return (
        <Modal transparent statusBarTranslucent animationType='fade' {...rest}>
            <View style={styles.container}>
                <View style={styles.content}>
                    <TouchableOpacity style={styles.closeIcon} onPress={onClose}>
                        <MaterialIcons name='close' size={20} color={THEME.COLORS.CAPTION_500} />
                    </TouchableOpacity>

                    <CheckCircle size={64} color={THEME.COLORS.SUCCESS} weight="bold" />

                    <Heading title='Lets play!' subtitle='Agora é só começar a jogar!' style={{ alignItems: 'center', marginTop: 24 }} />

                    <Text style={styles.label}>
                        Adicione seu discord
                    </Text>

                    <TouchableOpacity style={styles.discordButton}>
                        <Text style={styles.discord}>
                            {discord}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}