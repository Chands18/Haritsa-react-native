import React from 'react';
import {StyleSheet, Text, View, ActivityIndicator} from 'react-native';
import {AppColors, AppFonts} from '../../../utils';

export const LoadingIndicator = ({
  text = 'Loading...',
  loadingColor = AppColors.text.primary.dark,
  textColor = AppColors.text.primary.dark,
}) => {
  return (
    <View style={styles.loading}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color={loadingColor} />
        <Text style={[styles.textLoading, {color: textColor}]}>{text}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  loading: {
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
    bottom: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
  },
  container: {
    padding: 35,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  textLoading: {
    marginTop: 5,
    fontSize: 14,
    fontFamily: AppFonts.primary[400],
  },
});
