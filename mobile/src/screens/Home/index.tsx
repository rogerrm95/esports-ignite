import { View, Image, FlatList } from 'react-native';
// Utils //
import { GAMES } from '../../utils/games'
// LOGO //
import logoIMG from '../../assets/logo-nlw-esports.png'
import { GameCard } from '../../components/GameCard';
import { Heading } from '../../components/Heading';
// Styles //
import { styles } from './styles';

export function Home() {
    return (
        <View style={styles.container}>
            <Image source={logoIMG} style={styles.logo} />

            <Heading
                title="Encontre seu duo!"
                subtitle="Selecione o game que deseja jogar..." />

            {/* LISTA DOS GAMES */}
            <FlatList
                data={GAMES}
                keyExtractor={(item) => item.id}
                horizontal
                showsHorizontalScrollIndicator={false}
                renderItem={({ item }) => (<GameCard data={item} />)}
                contentContainerStyle={styles.contentList}
            />

        </View>
    );
}