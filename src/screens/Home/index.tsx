import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  FlatList,
  Alert,
} from "react-native";

import { Participant } from "../../components/Participant";

import { styles } from "./styles";

export function Home() {
  const participants = [
    "Welbert",
    "João",
    "Maria",
    "Pedro",
    "Ana",
    "José",
    "Carlos",
    "Mariana",
    "Felipe",
    "Lucas",
    "Gabriel",
    "Rafael",
    "Fernanda",
    "Juliana",
    "Paula",
    "Ricardo",
    "Rodrigo",
    "Vitor",
    "Vinícius",
    "Gustavo",
  ];

  const handleParticipantAdd = () => {
    if(participants.includes("Welbert")) {
      return Alert.alert("Participante existe", "Já existe um participante com esse nome.")
    }
  };

  const handleParticipantRemove = (name: string) => {
    Alert.alert("Remover", `Remover o participante ${name}?`, [
      {
        text: "Não",
        style: "cancel"
      },
      {
        text: "Sim",
        onPress: () => Alert.alert("Deletado")
      },
    ])

  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>Nome do evento</Text>
      <Text style={styles.eventDate}>Sexta, 4 de Novembro de 2024</Text>

      <View style={styles.form}>
        <TextInput
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={"#6b6b6b"}
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <Participant
            key={item}
            name={item}
            onRemove={() => handleParticipantRemove(item)}
          />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <Text style={styles.listEmptyText}>
            Ninguém se inscreveu ainda. Seja o primeiro a se inscrever!
          </Text>
        )}
      />
    </View>
  )
}
