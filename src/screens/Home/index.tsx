import {
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ScrollView,
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
    console.log("Você clicou no botão de adicionar participante");
  };

  const handleParticipantRemove = (name: string) => {
    console.log(`Você clicou no botão de remover participante ${name}.`);
  };

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

      <ScrollView showsVerticalScrollIndicator={false}>
        {participants.map((participant) => (
          <Participant
            key={participant}
            name={participant}
            onRemove={() => handleParticipantRemove("Welbert")}
          />
        ))}
      </ScrollView>
    </View>
  );
}
