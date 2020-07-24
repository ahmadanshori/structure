import React from 'react';
import EStyleSheet from 'react-native-extended-stylesheet';
import {Text, View, TouchableOpacity, SafeAreaView} from 'react-native';
import IconArrowBaack from 'react-native-vector-icons/FontAwesome5';

const HeaderTitle = ({onPressBack, title, back}) => {
  return (
    <SafeAreaView style={styles.header}>
      <View style={styles.iconWrapper}>
        {back && (
          <TouchableOpacity
            style={styles.button}
            onPress={onPressBack}
            activeOpacity={EStyleSheet.value('$opacity')}>
            <IconArrowBaack name="arrow-left" size={16} />
          </TouchableOpacity>
        )}
        <View style={back ? styles.inputWrapper : styles.titleWrapper}>
          <Text
            style={[EStyleSheet.value('$blackBold16'), {marginVertical: 16}]}>
            {title}
          </Text>
        </View>
        <View style={{width: '20%'}} />
      </View>
    </SafeAreaView>
  );
};

const styles = EStyleSheet.create({
  header: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '$white',
    shadowColor: '$blackShadow',
    shadowOffset: {height: 0, width: 2},
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
    zIndex: 99,
  },
  iconWrapper: {
    flexDirection: 'row',
    width: '100%',
  },
  button: {
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 16,
  },
  inputWrapper: {
    width: '60%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleWrapper: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
  },
  iconBack: {
    height: 30,
    width: 30,
  },
});

export default HeaderTitle;
