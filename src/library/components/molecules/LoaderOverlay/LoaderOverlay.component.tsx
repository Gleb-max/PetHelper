import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';

//animations
import Animated from 'react-native-reanimated';
import {useOverlayAnimations} from './LoaderOverlay.animations';

//components
import {Loader} from 'library/components/atoms';

//styles
import styles from './LoaderOverlay.styles';

//types
import {AnimationConfig} from 'library/animations';

type LoaderOverlayProps = {
  isLoading?: boolean;
  fadeColor?: string;
  duration?: keyof typeof AnimationConfig.Duration;
  style?: StyleProp<ViewStyle>;
};

export const LoaderOverlay: React.FC<LoaderOverlayProps> = ({
  isLoading,
  fadeColor,
  duration = 'regular',
  style,
}) => {
  //animation
  const overlayAnimation = useOverlayAnimations(duration);

  //effects
  React.useEffect(() => {
    if (isLoading) {
      overlayAnimation.fadeIn();
    } else {
      overlayAnimation.fadeOut();
    }
  }, [isLoading]); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <Animated.View
      pointerEvents="none"
      style={[
        styles.container,
        {
          backgroundColor: fadeColor,
        },
        overlayAnimation.animatedOverlay,
        style,
      ]}>
      <Loader />
    </Animated.View>
  );
};
