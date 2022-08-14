import React from 'react';
import {SafeAreaView, View, Text, Button, StyleSheet} from 'react-native';
import Box from './components/Box';
import Counter from './components/Counter';
import Greeting from './components/Greeting';

const App = () => {
  const [count, setCount] = React.useState(0);

  const onIncrease = () => {
    setCount(count + 1);
  };
  const onDecrease = () => {
    setCount(count - 1);
  };

  return (
    <SafeAreaView style={styles.full}>
      <Counter count={count} onIncrease={onIncrease} onDecrease={onDecrease} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  full: {
    flex: 1,
    // flex :1 => 자신이 위치한 곳의 영역을 모두 차지하겠다는 의미
  },
});

export default App;
