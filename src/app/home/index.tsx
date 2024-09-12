import { Alert,View, SectionList } from 'react-native'
import { Feather } from '@expo/vector-icons'
import { useState, useEffect } from 'react'
import { styles } from './styles'
import { Input } from '@/app/components/input'
import * as Contacts from 'expo-contacts'
import { theme } from '@/theme'
import { Contact, ContactProps } from '@/app/components/contact'

type SectionListDataProps = {
    title: string
    data: ContactProps
}

const [contacts, setContacts] = useState<SectionListDataProps[]>([])

export function Home(){
    const [contacts, setContacts] =useState<SectionListDataProps[]>([])
    const [name, setName] = useState("")

    async function fetchContacts() {
        try {
            const { status } = await Contacts.requestPermissionsAsync()
            if (status === Contacts.PermissionStatus.GRANTED){
                const { data } = await Contacts.getContactByIdAsync()
                console.log(data)
            }
        } catch(error){
            console.log(error)
            Alert.alert("Contatos", "Não foi possível carregar os contatos...")
        }
        
    }
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Input style={styles.Input}>
                    <Feather name= "search" size={16}
                    color={theme.colors.gray_300}></Feather>
                    <Input.Field
                    placeholder="Pesquisar pelo nome..." onChangeText={setName} value={name}/>
                    <Feather name="x" size={16} color={theme.colors.gray_300}
                    onPress={() => setName("")}>
                    </Feather>
                </Input>
            </View>
            <SectionList
                sections={[{title: "R", data: [{id: "1", name: "Heloísa"}] }]}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Contact contact={{
                        name: "Pedroso",
                        image: require("@/assets/avatar.jpeg")
                    }} 
                    />
                )}
                renderSectionHeader= {({ section }) =>
                    (<Text style={styles.section}>{section.title}</Text>)}
                contentContainerStyle = {styles.contentList}
                />
            </View>
    )
}