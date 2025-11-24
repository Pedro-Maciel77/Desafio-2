import { View } from 'react-native';
import { Card, Text } from 'react-native-paper';

export default function Details({route}){
    const {item}=route.params;
    return(
        <View style={{flex:1,padding:20}}>
            <Card>
                <Card.Title title="Detalhes"/>
                <Card.Content>
                    <Text>Título: {item.title}</Text>
                    <Text>Corpo: {item.body}</Text>
                </Card.Content>
            </Card>
        </View>
    );
}
