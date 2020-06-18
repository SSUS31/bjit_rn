/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import styles from './App.style';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './src/screens/Homne/Home';
import AboutScreen from './src/screens/About/About';
import UsersScreen from './src/screens/Users/Users';

const { container,
        titleStyle
 } = styles

const Stack = createStackNavigator();

class App extends React.Component {
  render(){
    return(

      <NavigationContainer>
        <Stack.Navigator 
          initialRouteName="welcome"
          screenOptions={{headerStyle:{backgroundColor:'pink'}}}
        >

          <Stack.Screen 
            name="welcome"
            component={HomeScreen}
            options={{title:'Welcome RN'}}
          />
          <Stack.Screen 
            name="about"
            component={AboutScreen} 
            options={{title:'About'}}
          // options={({ navigation }) => ({
          //   title:'About',
          //   headerLeft:() => (
          //     <Text>Back</Text>
          //   ),
          // })}
            />
            <Stack.Screen 
            name="users"
            component={UsersScreen} 
            options={{title:'Users'}}
            />
        </Stack.Navigator>
      </NavigationContainer>
            // <View style={container}>
            //   <Text style={[titleStyle,styles.colorBackground]}>Home Screen1 </Text>
            //   <Text style={[titleStyle,{backgroundColor:'orange'}]}>Home Screen 2</Text>
            // </View>
    )
            
  }
}

// const App: () => React$Node = () => {
//   return (
//     <>
//       <StatusBar barStyle="dark-content" />
//       <SafeAreaView>
//         <ScrollView
//           contentInsetAdjustmentBehavior="automatic"
//           style={styles.scrollView}>
//           <Header />
//           {global.HermesInternal == null ? null : (
//             <View style={styles.engine}>
//               <Text style={styles.footer}>Engine: Hermes</Text>
//             </View>
//           )}
//           <View style={styles.body}>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Step One</Text>
//               <Text style={styles.sectionDescription}>
//                 Edit <Text style={styles.highlight}>App.js</Text> to change this
//                 screen and then come back to see your edits.
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>See Your Changes</Text>
//               <Text style={styles.sectionDescription}>
//                 <ReloadInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Debug</Text>
//               <Text style={styles.sectionDescription}>
//                 <DebugInstructions />
//               </Text>
//             </View>
//             <View style={styles.sectionContainer}>
//               <Text style={styles.sectionTitle}>Learn More</Text>
//               <Text style={styles.sectionDescription}>
//                 Read the docs to discover what to do next:
//               </Text>
//             </View>
//             <LearnMoreLinks />
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </>
//   );
// };



export default App;
