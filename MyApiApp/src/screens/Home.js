import { useState, useEffect } from 'react';
import { View } from 'react-native';
import { Card, Button, Text, ActivityIndicator } from 'react-native-paper';

export default function Home({ navigation }) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function fetchPost() {
    setLoading(true);
    setError(null);
    try {
      const id = Math.floor(Math.random() * 100) + 1;
      const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error(`Status ${res.status}`);
      const p = await res.json();
      setData({ title: p.title, body: p.body });
    } catch (err) {
      console.error('fetchPost error:', err);
      setError(err.message || 'Erro desconhecido');
      setData({ title: 'Erro', body: 'Não foi possível carregar o post.' });
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchPost();
  }, []);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Card>
        <Card.Title title="Post Aleatório" />
        <Card.Content>
          {loading && <ActivityIndicator animating={true} />}
          {!loading && error && <Text style={{ color: 'red' }}>Erro: {error}</Text>}
          {!loading && !error && <Text>{data ? data.title : 'Carregando...'}</Text>}
        </Card.Content>
        <Card.Actions>
          <Button onPress={() => navigation.navigate('Details', { item: data })} disabled={!data || !!error}>
            Detalhes
          </Button>
          <Button onPress={fetchPost}>Tentar novamente</Button>
        </Card.Actions>
      </Card>
    </View>
  );
}
