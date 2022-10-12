import { LinearGradient } from 'expo-linear-gradient';
import { View, TouchableOpacity, TouchableOpacityProps, ImageBackground, ImageSourcePropType, Text } from 'react-native';
import { THEME } from '../../theme';

import { styles } from './styles';

export interface GameCardData {
    id: string,
    title: string,
    bannerUrl: string,
    _count: {
        Ads: number
    }
}

interface GameCardProps extends TouchableOpacityProps {
    data: GameCardData
}

export function GameCard({ data, ...rest }: GameCardProps) {
    // Variável auxiliar //
    const hasAdsRegistered = data._count.Ads === 0

    return (
        <TouchableOpacity style={[styles.container, hasAdsRegistered && styles.containerDisabled]} disabled={hasAdsRegistered} {...rest}>
            <ImageBackground style={styles.cover} source={{ uri: data.bannerUrl }}>

                <LinearGradient colors={THEME.COLORS.FOOTER} style={styles.footer}>
                    <Text style={styles.name}>
                        {data.title}
                    </Text>

                    <Text style={styles.ads}>
                        {data._count.Ads} anúncio(s)
                    </Text>
                </LinearGradient>

            </ImageBackground>
        </TouchableOpacity>
    );
}