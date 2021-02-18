import {StyleSheet} from 'react-native';
import {AppColors} from '../Colors';
import {AppFonts} from '../Fonts';

// Font family buat contohnya aja klo file ttf fontnya udah ada begini cara manggilnya, buat sekarang masih belum berfungsi
export const TextStyle = StyleSheet.create({
  headerLight: {
    fontSize: 16,
    color: AppColors.text.primary.light,
    fontFamily: AppFonts.primary[900],
    fontWeight: 'bold',
  },
  headerDark: {
    fontSize: 16,
    color: AppColors.text.primary.dark,
    fontFamily: AppFonts.primary[900],
    fontWeight: 'bold',
  },
  contentLight: {
    fontSize: 14,
    color: AppColors.text.primary.light,
    fontFamily: AppFonts.primary[600],
    fontWeight: 'normal',
  },
  contentDark: {
    fontSize: 14,
    color: AppColors.text.primary.dark,
    fontFamily: AppFonts.primary[600],
    fontWeight: 'normal',
  },
});
export const ContainerStyle = StyleSheet.create({
  scrollview: {
    width: '100%',
    padding: 10,
  },
});
