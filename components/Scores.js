import { Text, Stack, Button, VStack } from "@react-native-material/core";
import ImageBlurShadow from 'react-native-image-blur-shadow';
import { Ionicons } from '@expo/vector-icons';
import just_zero from './img/just_zero.png'
import less_than_three from './img/less_than_three.png'
import less_than_five from './img/less_than_five.png'
import less_than_seven from './img/less_than_seven.png'
import from_seven_to_ten from './img/from_seven_to_ten.png'
import { styles } from './css/QuizStyles'

const Scores = ({ score, setFinished, setScore, setCurrentQuiz }) => {

    const reset = () => {
        setScore(0)
        setFinished(false)
        setCurrentQuiz(0)
    }

    const getIcon = (score) => {
        if (score === 0) {
            return just_zero
        } else if (score < 3) {
            return less_than_three
        } else if (score < 5) {
            return less_than_five
        } else if (score < 7) {
            return less_than_seven
        } else {
            return from_seven_to_ten
        }
    }

    return (
        <Stack style={styles.margins} fill center spacing={4}>
            <Text variant="h5">Has conseguido {score} puntos</Text>
            <Text variant="h5">El porcentaje de respuestas acertadas es {((score / 10) * 100).toFixed(2)}%</Text>
            <VStack style={styles.vstackForImageBlurShadow}>
                <ImageBlurShadow source={getIcon(score)} imageWidth={250} imageHeight={250} imageBorderRadius={12} shadowOffset={8} shadowBlurRadius={12} />
            </VStack>
            <Button title="Reiniciar" onPress={reset} trailing={props => <Ionicons name="color-wand-outline" {...props} />} />
        </Stack>
    )
}

export default Scores
