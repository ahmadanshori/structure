// import React from 'react';
// import {View, Text, TouchableOpacity, Image} from 'react-native';
// import EStyleSheet from 'react-native-extended-stylesheet';
// import Icon from 'react-native-vector-icons/AntDesign';

// const InputButton = ({title, placeholder, data, onPress}) => {
//   return (
//     <View style={styles.container}>
//       <Text style={EStyleSheet.value('$black12')}>{title}</Text>
//       <TouchableOpacity
//         style={styles.button}
//         onPress={onPress}
//         activeOpacity={EStyleSheet.value('$opacity')}>
//         <Text
//           style={
//             data
//               ? EStyleSheet.value('$black14')
//               : EStyleSheet.value('$placeholder14')
//           }>
//           {data || placeholder}
//         </Text>

//         <View>
//           <Icon name="caretup" size={10} />
//           <Icon name="caretdown" size={10} />
//         </View>
//       </TouchableOpacity>
//     </View>
//   );
// };

// const styles = EStyleSheet.create({
//   container: {
//     marginTop: 16,
//   },
//   button: {
//     height: 45,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     marginTop: 8,
//     paddingHorizontal: 15,
//     borderWidth: 1,
//     borderColor: '$lightGray',
//     borderRadius: 8,
//   },
//   image: {
//     width: 14,
//     height: 28,
//   },
// });

// export default InputButton;
