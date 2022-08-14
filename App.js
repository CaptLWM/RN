import React from 'react';
import {SafeAreaView, View, Text} from 'react-native';
import Box from './components/Box';
import Greeting from './components/Greeting';

const App = () => {
  return (
    <SafeAreaView>
      <View>
        {/* <Greeting name="Props" /> */}
        <Box rounded size="large" color="blue" />
      </View>
    </SafeAreaView>
  );
};

export default App;
