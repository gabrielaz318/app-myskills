import { genericTypeAnnotation } from '@babel/types'
import React, { useState, useEffect } from 'react'
import { 
    View, 
    Text, 
    StyleSheet, 
    TextInput, 
    Platform,
    FlatList,
} from 'react-native'

import { Button } from '../components/Button'
import { SkillCard } from '../components/SkillCard'

export function Home() {
    const [newSkill, setNewSkill] = useState('')
    const [mySkills, setMySkills] = useState([])
    const [greeting, setGreeting] = useState('')

    function handleAddNewSkill() {
        //* Consigo recuperar o estado atual e adicionar um novo elemento no vetor
        setMySkills(oldState => [...oldState, newSkill])
    }

    useEffect(() => {
        const currentHour = new Date().getHours()

        if(currentHour < 12) {
            setGreeting('Good morning')
        } else if (currentHour < 19) {     
            setGreeting('Good afternoon')
        } else {
            setGreeting('Good night')
        }

    }, [greeting])

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome, Gabriel</Text>

            <Text style={styles.greetings}>
                {greeting}
            </Text>

            <TextInput 
                style={styles.input}
                placeholder="New skill"
                placeholderTextColor="#555"
                onChangeText={setNewSkill}
            />

            <Button onPress={handleAddNewSkill} />

            <Text style={[styles.title, { marginVertical: 50 }]}>
                My Skills
            </Text>

            <FlatList 
                data={mySkills}
                key={item => String(item)}
                renderItem={({ item })=> <SkillCard  skill={item} />}
                showsVerticalScrollIndicator={false}
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: { 
        flex: 1, 
        backgroundColor: '#121015',
        paddingHorizontal: 30,
        paddingVertical: 70,
    },
    title: {
        color: '#FFF',
        fontSize: 24,
        fontWeight: 'bold',
    },
    input: {
        backgroundColor: '#1F1E25',
        color: '#FFF',
        padding: Platform.OS === 'ios' ? 15 : 10,
        marginTop: 30,
        borderRadius: 7,
    },
    greetings: {
        color: '#FFF',
    },  
})