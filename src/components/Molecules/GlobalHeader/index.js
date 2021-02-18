import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppColors, AppFonts, TextStyle} from '../../../utils';

export const GlobalHeader = ({
  children,
  title = '',
  right = null,
  left = null,
  height = '8%',
  fontSize = 16,
  textAlign = 'left',
  color = AppColors.text.primary.light,
  style = {},
  upperCase = false,
}) => {
  return (
    <View style={[styles.container, {height: height}, style]}>
      {left != null || right != null ? (
        <View style={styles.left}>{left}</View>
      ) : null}

      {title != '' ? (
        <Text
          style={[
            styles.title,
            {fontSize: fontSize, textAlign: textAlign, color: color},
          ]}>
          {upperCase ? title.toUpperCase() : title}
        </Text>
      ) : (
        <View style={styles.children}>{children}</View>
      )}
      {left != null || right != null ? (
        <View style={styles.right}>{right}</View>
      ) : null}
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    padding: 10,
    backgroundColor: AppColors.soft,
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  left: {
    width: '20%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    //   ... ini buat destruct ngambil isinya aja, awalnya misal headerLight:{fontSize:16}, pas masuk ke style ini yg keambil jadi fontSize:16 nya aja
    ...TextStyle.headerLight,
  },
  children: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  right: {
    height: '100%',
    width: '20%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
