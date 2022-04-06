// import React from 'react';
// import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
// import Home from '../Home';
// import Guide from '../Guide';
// import Trip from '../Trip';
// import Search from '../Search';
// import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
// import SimpleLineIcons from 'react-native-vector-icons/SimpleLineIcons';

// const {Screen, Navigator} = createBottomTabNavigator();
// const Tab = () => {
//   return (
//     <Navigator
//     // screenOptions={{}}
//     // tabBarOptions={{
//     //   activeTintColor: '#fff',
//     //   inactiveTintColor: '#000',
//     //   activeBackgroundColor: '#ff005a',
//     //   inactiveBackgroundColor: '#fff',
//     //   // unmountOnBlur: true,??
//     //   iconStyle: {
//     //     display: 'flex',
//     //     justifyContent: 'center',
//     //     alignItems: 'center',
//     //   },
//     //   labelStyle: {},
//     //   showLabel: false,
//     //   style: {
//     //     flex: 1,
//     //     position: 'absolute',
//     //     backgroundColor: '#fff',
//     //     borderRadius: 50,
//     //     margin: 25,
//     //   },
//     //   tabStyle: {
//     //     marginVertical: 5,
//     //     marginHorizontal: 8,
//     //     borderRadius: 20,
//     //   },
//     // }}
//     >
//       <Screen
//         name="home"
//         component={Home}
//         options={{
//           tabBarIcon: ({color, focused, size}) => (
//             <MaterialIcons name="home" color={color} size={32} />
//           ),
//         }}
//       />
//       <Screen
//         name="search"
//         component={Search}
//         options={{
//           tabBarIcon: ({color, focused, size}) => (
//             <MaterialIcons name="search" color={color} size={32} />
//           ),
//         }}
//       />

//       <Screen
//         name="trip"
//         component={Trip}
//         options={{
//           tabBarIcon: ({color, focused, size}) => (
//             <MaterialIcons name="calendar-today" color={color} size={32} />
//           ),
//         }}
//       />
//       <Screen
//         name="guide"
//         component={Guide}
//         options={{
//           tabBarIcon: ({color, focused, size}) => (
//             <MaterialIcons name="map" color={color} size={32} />
//           ),
//         }}
//       />
//     </Navigator>
//   );
// };

// export default Tab;
