import {ViewStyle} from 'react-native';

import {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';

//types
import {AnimationConfig} from 'library/animations';

export const useOverlayAnimations = (
  duration: keyof typeof AnimationConfig.Duration,
) => {
  const START_OPACITY = 0;
  const END_OPACITY = 1;

  const animationDuration = AnimationConfig.Duration[duration];
  const animationConfig = {
    ...AnimationConfig.opacity,
    duration: animationDuration,
  };

  const overlayOpacity = useSharedValue(START_OPACITY);

  const animatedOverlay = useAnimatedStyle<ViewStyle>(() => {
    return {
      opacity: withTiming(overlayOpacity.value, animationConfig),
    };
  });

  const fadeIn = () => {
    overlayOpacity.value = END_OPACITY;
  };

  const fadeOut = () => {
    overlayOpacity.value = START_OPACITY;
  };

  return {
    animatedOverlay,
    fadeIn,
    fadeOut,
  };
};
