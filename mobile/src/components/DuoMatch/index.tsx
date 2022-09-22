import { View, Modal, ModalProps, Text, TouchableOpacity, Alert, ActivityIndicator } from 'react-native';
import * as Clipboard from 'expo-clipboard'
// Icons //
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import { CheckCircle } from 'phosphor-react-native'
// Components //
import { Heading } from '../Heading';
// Styles //
import { styles } from './styles';
import { THEME } from '../../theme';
import { useState } from 'react';

interface DuoMatchProps extends ModalProps {
    discord: string,
    onClose: () => void
}

export function DuoMatch({ discord, onClose, ...rest }: DuoMatchProps) {
    const [isCopping, setIsCopping] = useState(false)

    async function handleCopyDiscordUserToClipboard() {
        setIsCopping(true)
        await Clipboard.setStringAsync(discord).then(_ => setIsCopping(false))
        Alert.alert('Discord Copiado!', 'Nome de usuário copiado com sucesso')
    }
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

                    <TouchableOpacity
                        style={styles.discordButton}
                        disabled={isCopping}
                        onPress={handleCopyDiscordUserToClipboard}>
                        <Text style={styles.discord}>
                            {isCopping ? <ActivityIndicator color={THEME.COLORS.PRIMARY} /> : discord}
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}

// Aula parada: 25:20 //