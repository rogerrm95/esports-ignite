import { Fragment, useState } from 'react'
import { CaretDown } from 'phosphor-react-native';
import { View, Text, Image, TouchableOpacity, TouchableOpacityProps, Modal } from 'react-native';
// Styles //
import { styles } from './styles';
import { MenuDropdown } from '../Modal/MenuDropdown';

type User = {
    id: string
    avatar: string,
    username: string,
    discriminator: string,
}

interface ProfileProps extends TouchableOpacityProps {
    data: User
}

export function Profile({ data, ...rest }: ProfileProps) {
    const [isModalOpen, setIsModalOpen] = useState(false)

    return (
        <Fragment>
            <TouchableOpacity style={styles.container} onPress={() => setIsModalOpen(true)} {...rest}>

                <View style={styles.userInfo}>
                    <Text style={styles.username} numberOfLines={1}>
                        {data.username}
                    </Text>

                    <Text style={styles.discriminator}>
                        #{data.discriminator}
                    </Text>
                </View>

                <Image
                    style={styles.avatar}
                    source={{ uri: `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}` }}
                />

                <CaretDown size={16} color='#FFF' weight="bold" />

            </TouchableOpacity>

            <MenuDropdown transparent onRequestClose={() => setIsModalOpen(false)} onPressOutModal={() => setIsModalOpen(false)} visible={isModalOpen}/>
        </Fragment>
    );
}