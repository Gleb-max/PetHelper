import {ViewStyle} from 'react-native';

import {
  useSharedValue,
  useAnimatedStyle,
  withSpring,
} from 'react-native-reanimated';

import {AnimationConfig} from './AnimationConfig';

export const useTabsAnimation = (
  tabWidth: number,
  tabsAmount: number,
  cursorOffset = 0,
  initialIndex = 0,
) => {
  const positions: number[] = [];
  const cursorWidth = tabWidth - cursorOffset * 2; //left and rigth offset

  for (let i = 0; i < tabsAmount; ++i) {
    const nextPosition = i * tabWidth + cursorOffset;
    positions.push(nextPosition);
  }

  const cursorTranslateX = useSharedValue(positions[initialIndex]);

  const cursorStyle = useAnimatedStyle<ViewStyle>(() => {
    return {
      width: cursorWidth,
      transform: [
        {
          translateX: withSpring(
            cursorTranslateX.value,
            AnimationConfig.spring,
          ),
        },
      ],
    };
  });

  const moveToIndex = (index: number) => {
    cursorTranslateX.value = positions[index];
  };

  return {
    cursorStyle,
    moveToIndex,
  };
};
