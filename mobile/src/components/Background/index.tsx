import { ImageBackground } from 'react-native';
// Image //
import galaxyBackground from '../../assets/background-galaxy.png'

import { styles } from './styles';

interface BackgroundProps {
    children: React.ReactNode
}

export function Background({ children }: BackgroundProps) {
    return (
        <ImageBackground
            style={styles.container}
            source={galaxyBackground}
            defaultSource={galaxyBackground}
            resizeMode='cover'>

            {children}

        </ImageBackground>
    );
}