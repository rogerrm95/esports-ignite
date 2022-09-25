import { View, Text, Image, TouchableOpacity, TouchableOpacityProps } from 'react-native';
// Styles //
import { styles } from './styles';

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
    return (
        <TouchableOpacity style={styles.container} {...rest}>

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
                source={{ uri: `https://cdn.discordapp.com/avatars/${data.id}/${data.avatar}` }} />
        </TouchableOpacity>
    );
}