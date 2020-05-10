import * as React from 'react';

/**
 * Default preset interface. Can be extended using declaration merging.
 * @see https://www.typescriptlang.org/docs/handbook/declaration-merging.html
 * @example
 * declare module 'react-preset' {
 *   export interface DefaultPreset extends Partial<typeof PRESETS> {}
 * }
 */
export interface DefaultPreset {}
export const PresetContext = React.createContext<DefaultPreset>({});
export function usePreset() {
  return React.useContext(PresetContext);
}
export type WithPresetProps<T extends keyof DefaultPreset> = {
  preset?: keyof DefaultPreset[T];
};
export function withPreset<
  T extends keyof DefaultPreset,
  P extends WithPresetProps<T>
>(group: T) {
  return <OriginalProps extends {}>(
    ComposedComponent: React.ComponentType<OriginalProps>
  ): React.ComponentType<OriginalProps & P> => {
    function WithPresetWrapper(props: any) {
      const { preset, ...rest } = props;
      const presets = usePreset();
      const propsWithPresets = {
        ...((preset ? presets?.[group]?.[preset] : {}) as P),
        ...rest,
      };
      return <ComposedComponent {...propsWithPresets} />;
    }

    return WithPresetWrapper;
  };
}
