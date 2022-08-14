import React from 'react';
import {SafeAreaView, View, Text, Button} from 'react-native';
import Box from './components/Box';
import Greeting from './components/Greeting';

const App = () => {
  // 훅 사용 규칙
  // 1. 컴포넌트의 최상위 레벨에서 사용
  // 2. Custom Hook 사용 가능
  // 3. 클래스에선 사용 불가
  const [visible, setVisible] = React.useState(true);
  const onPress = () => {
    setVisible(!visible);
  };

  return (
    <SafeAreaView>
      <Button title="토글" onPress={onPress} />
      {/* <Greeting name="Props" /> */}
      {visible && <Box rounded size="large" color="blue" />}
    </SafeAreaView>
  );
};

export default App;
