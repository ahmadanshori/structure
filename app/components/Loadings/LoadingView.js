// import React from 'react';
// import {View, ActivityIndicator, Modal, Alert} from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';

// const LoadingView = ({backgroundColor, style = {}, visible}) => {
//   const containerStyles = [[styles.container, style]];
//   if (backgroundColor) {
//     containerStyles.push({backgroundColor});
//   }

//   return (
//     <Modal animationType="fade" transparent={true} visible={visible}>
//       <View style={containerStyles}>
//         <ActivityIndicator size="large" color={EStyleSheet.value('$orange')} />
//       </View>
//     </Modal>
//   );
// };

// const styles = EStyleSheet.create({
//   container: {
//     alignItems: 'center',
//     justifyContent: 'center',
//     height: '$screenHeight',
//     width: '$screenWidth',
//     backgroundColor: '$blackShadow',
//   },
// });

// export default LoadingView;
