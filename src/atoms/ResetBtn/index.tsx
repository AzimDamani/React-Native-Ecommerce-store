import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import IMAGES from '../../images';

type Props = {
  onPress: () => void;
}


const Refreshbtn = ({ onPress }: Props) => {
  return (
    <View style={styles.Container}>
      <Text style={styles.txt}>Refresh</Text>
      <TouchableOpacity onPress={onPress}>
        <Image source={IMAGES.RESET} style={styles.Icon} />
      </TouchableOpacity>
    </View>
  );
};

export default Refreshbtn;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignItems:'center',
  },
  txt: {
    color: 'white',
    fontWeight: 200,
    marginRight: 5,
  },
  Icon: { height: 25, width: 30, tintColor: 'white' },
});
