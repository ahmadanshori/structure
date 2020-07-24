import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions, Linking} from 'react-native';
// import {Provider} from 'react-redux';
// import {PersistGate} from 'redux-persist/integration/react';

// import {AlertProvider} from './components/Alert';
// import store, {persistor} from './config/store';
// import AppNavigator from './config/routes';

import Home from './screens/HomeScreen';

EStyleSheet.build({
  $white: '#ffffff',
  $darkWhite: '#f8f8f8',
  $shadowWhite: 'rgba(255,255,255, 0.3)',
  $gray: '#b2b2b2',
  $lightGray: '#d6d6d6',
  $black: '#1d2021',
  $blackShadow: 'rgba(0,0,0, 0.8)',
  $screenWidth: Dimensions.get('window').width,
  $screenHeight: Dimensions.get('window').height,
  $width2: Dimensions.get('window').width / 2,
  $opacity: 0.7,
  //   $white12: {
  //     color: '#FFFFFF',
  //     fontSize: 12,
  //     letterSpacing: 0.34,
  //     fontFamily: 'OpenSans-Regular',
  //   },
  //   $white14: {
  //     color: '#FFFFFF',
  //     fontSize: 14,
  //     letterSpacing: 0.39,
  //     fontFamily: 'OpenSans-Regular',
  //   },
  //   $whiteBold16: {
  //     color: '#FFFFFF',
  //     fontSize: 16,
  //     fontFamily: 'OpenSans-Bold',
  //   },
});

// export default () => {
//   return (
//     <Provider store={store}>
//       <PersistGate persistor={persistor}>
//         <AlertProvider>
//           <AppNavigator />
//         </AlertProvider>
//       </PersistGate>
//     </Provider>
//   );
// };

export default () => <Home />;
