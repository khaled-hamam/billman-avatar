import React from 'react';
import { Layout } from 'react-native';

const Avatar = ({ size, icon }) => {
  const avatarStyle = {
    height: size,
    width: size,
    borderRadius: size / 2,
    alignItems: 'center',
    justifyContent: 'center',
  };

  return <Layout style={avatarStyle}></Layout>;
};

module.exports = Avatar;