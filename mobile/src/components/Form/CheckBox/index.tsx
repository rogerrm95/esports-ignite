import { ColorValue, View, Pressable, Text, PressableProps } from 'react-native'
import { useState } from 'react'
// Icon //
import Check from '@expo/vector-icons/FontAwesome'
// Styles //
import { styles } from './styles'

interface CheckBoxProps extends PressableProps {
    label: string
    backgroundCheckbox?: ColorValue,
    iconColor?: ColorValue,
    textColor?: ColorValue,
    onValueChange: (initialValue: boolean) => void
}

export function CheckBox({ label, backgroundCheckbox = '#FFF', textColor = '#FFF', iconColor = '#000', onValueChange, ...rest }: CheckBoxProps) {
    const [initialValue, setInitialValue] = useState(false)

    function handleCheckedBox() {
        onValueChange(!initialValue)
        setInitialValue(!initialValue)
    }

    return (
        <Pressable onPress={() => handleCheckedBox()} {...rest}>
            <View style={[styles.checkBox, { backgroundColor: backgroundCheckbox }]}>
                {
                    initialValue && (
                        <Check name='check' size={12} color={iconColor} />
                    )
                }
            </View>

            <Text style={[styles.label, { color: textColor }]}>
                {
                    label
                }
            </Text>
        </Pressable>
    )
}