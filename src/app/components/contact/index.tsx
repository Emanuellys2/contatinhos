import { ImageProps, Text, TouchableOpacity } from 'react-native'
import { styles } from './styles'
import { Avatar } from '../avatar'
import { TouchableOpacityProps } from 'react-native-gesture-handler'
import { View } from 'react-native-reanimated/lib/typescript/Animated'

export type ContactProps = {
    name: string
    image?: ImageProps
}

type Props = TouchableOpacityProps & {
    contact: ContactProps
}

export function Contact({ contact, ...rest} : Props)
{
    return <TouchableOpacity style={styles.container}>

        <Avatar name="Pedroso" image={contact.image} />
        <Text style={styles.name}>{contact.name}
        </Text>
    </TouchableOpacity>


}
