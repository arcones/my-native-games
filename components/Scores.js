import { Text, View, TouchableHighlight } from 'react-native';

const Scores = ({ score, setFinished, setScore, setCurrentQuiz }) => {


    const reset = () => {
        setScore(0)
        setFinished(false)
        setCurrentQuiz(0)
    }

    return (
        <View>
            <Text>Has conseguido {score} puntos</Text>
            <Text>El porcentaje de respuestas acertadas es {((score / 10) * 100).toFixed(2)}%</Text>
            <TouchableHighlight onPress={reset}>
                <Text>Reiniciar</Text>
            </TouchableHighlight>
        </View>
    )
}

export default Scores
