import Color from 'color';

export const rgba2rgb = (
  rgbaColor: Color,
  rgbBackground: Color,
  isDark: boolean,
) => {
  const alpha = rgbaColor.alpha();
  return Color.rgb(
    (isDark ? alpha : 1 - alpha) * rgbBackground.red() +
      alpha * rgbaColor.red(),
    (isDark ? alpha : 1 - alpha) * rgbBackground.green() +
      alpha * rgbaColor.green(),
    (isDark ? alpha : 1 - alpha) * rgbBackground.blue() +
      alpha * rgbaColor.blue(),
  );
};
