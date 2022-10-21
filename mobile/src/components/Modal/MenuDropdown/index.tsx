import React from 'react';
import { View, Modal, ModalProps, Text, TouchableOpacity, GestureResponderEvent } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useUser } from '../../../hooks/useUser';
// ICONS //
import { DiscordLogo, SignOut } from 'phosphor-react-native';
// STYLES //
import { styles } from './styles';
import { THEME } from '../../../theme';

interface MenuDropdownProps extends ModalProps {
    onPressOutModal: () => void,
}

export function MenuDropdown({ onPressOutModal, ...rest }: MenuDropdownProps) {
    const { removeUserToAsyncStorage } = useUser()
    const { navigate } = useNavigation()

    function handlePressOutModal(event: GestureResponderEvent) {
        if (event.target === event.currentTarget) {
            onPressOutModal()
        }

    }

    function handleSignOut() {
        removeUserToAsyncStorage()
        navigate('login')
    }

    return (
        <Modal {...rest}>
            <View style={styles.overlay} onTouchStart={handlePressOutModal}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.menuItem} activeOpacity={0.5}>
                        <Text style={styles.menuText}>Discord</Text>
                        <DiscordLogo size={16} color={THEME.COLORS.TEXT} weight='bold' />
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.menuItem, { marginTop: 20 }]} activeOpacity={0.5} onPress={handleSignOut}>
                        <Text style={styles.menuTextExit}>Sair</Text>
                        <SignOut size={16} color={THEME.COLORS.ALERT} weight='bold' />
                    </TouchableOpacity>
                </View>
            </View>
        </Modal>
    );
}
