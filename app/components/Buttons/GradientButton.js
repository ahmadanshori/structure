// import React from 'react';
// import {Text, TouchableOpacity} from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';
// import LinearGradient from 'react-native-linear-gradient';

// const GradientButton = ({title, style = {}, buttonStyle = {}, onPress}) => {
//   return (
//     <TouchableOpacity
//       onPress={onPress}
//       style={[styles.button, buttonStyle]}
//       activeOpacity={EStyleSheet.value('$opacity')}>
//       <LinearGradient
//         start={{x: 0, y: 0}}
//         end={{x: 1, y: 0}}
//         style={[styles.gradient, style]}
//         colors={[
//           EStyleSheet.value('$orange'),
//           EStyleSheet.value('$lightOrange'),
//         ]}>
//         <Text style={EStyleSheet.value('$whiteMedium14')}>{title}</Text>
//       </LinearGradient>
//     </TouchableOpacity>
//   );
// };

// const styles = EStyleSheet.create({
//   button: {
//     width: '100%',
//   },
//   gradient: {
//     borderRadius: 25,
//     paddingVertical: 12,
//     justifyContent: 'center',
//     alignItems: 'center',
//   },
// });

// export default GradientButton;
