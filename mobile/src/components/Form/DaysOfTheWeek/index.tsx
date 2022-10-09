import { useState } from 'react';
import { ScrollView, Text, View, Pressable } from 'react-native';
// Styles //
import { styles } from './styles';

interface DaysOfTheWeekProps {
    data: string[],
    onCheckedValue: (newList: string[]) => void
}

export function DaysOfTheWeek({ data, onCheckedValue }: DaysOfTheWeekProps) {

    function handleToggle(weekDayIndex: string) {
        if (data.includes(weekDayIndex)) {
            const newArray = data.filter(day => day !== weekDayIndex)
            onCheckedValue(newArray)
        } else {
            const newArray = [...data, weekDayIndex]
            onCheckedValue(newArray)
        }
    }

    return (
        <View style={styles.container}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                <Pressable style={[styles.button, data.includes('0') ? styles.buttonChecked : styles.buttonUnChecked]} onPress={() => handleToggle('0')}>
                    <Text style={styles.buttonText}>D</Text>
                </Pressable>

                <Pressable style={[styles.button, data.includes('1') ? styles.buttonChecked : styles.buttonUnChecked]} onPress={() => handleToggle('1')}>
                    <Text style={styles.buttonText}>S</Text>
                </Pressable>

                <Pressable style={[styles.button, data.includes('2') ? styles.buttonChecked : styles.buttonUnChecked]} onPress={() => handleToggle('2')}>
                    <Text style={styles.buttonText}>T</Text>
                </Pressable>

                <Pressable style={[styles.button, data.includes('3') ? styles.buttonChecked : styles.buttonUnChecked]} onPress={() => handleToggle('3')}>
                    <Text style={styles.buttonText}>Q</Text>
                </Pressable>

                <Pressable style={[styles.button, data.includes('4') ? styles.buttonChecked : styles.buttonUnChecked]} onPress={() => handleToggle('4')}>
                    <Text style={styles.buttonText}>Q</Text>
                </Pressable>

                <Pressable style={[styles.button, data.includes('5') ? styles.buttonChecked : styles.buttonUnChecked]} onPress={() => handleToggle('5')}>
                    <Text style={styles.buttonText}>S</Text>
                </Pressable>

                <Pressable style={[styles.button, data.includes('6') ? styles.buttonChecked : styles.buttonUnChecked]} onPress={() => handleToggle('6')}>
                    <Text style={styles.buttonText}>S</Text>
                </Pressable>
            </ScrollView>
        </View>
    );
}