import {StyleSheet} from 'react-native';
import colors from './Colors';
// import {textScale} from './responsiveSize';

const commonStyles = StyleSheet.create({
  rowCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  rowAlignCen: {flexDirection: 'row', alignItems: 'center'},
  rowSpaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rowSpaceBetweenCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  rowCenterCenter: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centerCenter: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  // regular monstearrat
  montserratRegular12white: {
    // fontFamily: fontFamily.montserratRegular,
    // fontSize: textScale(12),/
    color: colors,
  },
  Regular12: {
    fontWeight:"400",
    fontSize: 12,
    color: colors.black,
  },
  Regular13: {
    fontWeight:"400",
    fontSize: 13,
    color: colors.black,
  },
  Regular14: {
    fontWeight:"400",
    fontSize: 14,
    color: colors.black,
  },
  Regular15: {
    fontWeight:"400",
    fontSize: 15,
    color: colors.black,
  },
  Regular16: {
    fontWeight:"400",
    fontSize: 16,
    color: colors.black,
  },
  Regular18: {
    fontWeight:"400",
    fontSize: 18,
    color: colors.black,
  },
  Regular20: {
    fontWeight:"400",
    fontSize: 20,
    color: colors.black,
  },
  Regular24: {
    fontWeight:"400",
    fontSize: 24,
    color: colors.black,
  },
  
  medium11: {
    fontWeight:"500",
    fontSize: 11,
    color: colors.black,
  },
  medium12: {
    fontWeight:"500",
    fontSize: 12,
    color: colors.black,
  },
  medium13: {
    fontWeight:"500",
    fontSize: 13,
    color: colors.black,
  },
  medium14: {
    fontWeight:"500",
    fontSize: 14,
    color: colors.black,
  },
  medium15: {
    fontWeight:"500",
    fontSize: 15,
    color: colors.black,
  },
  medium16: {
    fontWeight:"500",
    fontSize: 16,
    color: colors.black,
  },
  medium18: {
    fontWeight:"500",
    fontSize: 18,
    color: colors.black,
  },
  medium20: {
    fontWeight:"500",
    fontSize: 20,
    color: colors.black,
  },
  medium24: {
    fontWeight:"500",
    fontSize: 24,
    color: colors.black,
  },

  semiBold12: {
    fontWeight:"600",
    fontSize: 12,
    color: colors.black,
  },
  semiBold13: {
    fontWeight:"600",
    fontSize: 13,
    color: colors.black,
  },
  semiBold14: {
    fontWeight:"600",
    fontSize: 14,
    color: colors.black,
  },
  semiBold15: {
    fontWeight:"600",
    fontSize: 15,
    color: colors.black,
  },
  semiBold16: {
    fontWeight:"600",
    fontSize: 16,
    color: colors.black,
  },
  semiBold18: {
    fontWeight:"600",
    fontSize: 18,
    color: colors.black,
  },
  semiBold20: {
    fontWeight:"600",
    fontSize: 20,
    color: colors.black,
  },
  semiBold24: {
    fontWeight:"600",
    fontSize: 24,
    color: colors.black,
  },

  bold12: {
    fontWeight:"700",
    fontSize: 12,
    color: colors.black,
  },
  bold13: {
    fontWeight:"700",
    fontSize: 13,
    color: colors.black,
  },
  bold14: {
    fontWeight:"700",
    fontSize: 14,
    color: colors.black,
  },
  bold15: {
    fontWeight:"700",
    fontSize: 15,
    color: colors.black,
  },
  bold16: {
    fontWeight:"700",
    fontSize: 16,
    color: colors.black,
  },
  bold18: {
    fontWeight:"700",
    fontSize: 18,
    color: colors.black,
  },
  bold20: {
    fontWeight:"700",
    fontSize: 20,
    color: colors.black,
  },
  bold24: {
    fontWeight:"700",
    fontSize: 24,
    color: colors.black,
  },
});

export default commonStyles;