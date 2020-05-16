import React from 'react';
import { View } from 'react-native';

const Avatar = ({ size, icon }) => {
  const avatarStyle = {
    height: size,
    width: size,
    borderRadius: size / 2,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return (
    <View style={avatarStyle}>
      {icon}
    </View>
  );
};

module.exports = Avatar;