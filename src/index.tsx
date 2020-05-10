import React, { createContext, useContext, ComponentType } from 'react';

/**
 * Default preset interface. Can be extended using declaration merging.
 * @see https://www.typescriptlang.org/docs/handbook/declaration-merging.html
 * @example
 * declare module 'react-preset' {
 *   export interface DefaultPreset extends Partial<typeof PRESETS> {}
 * }
 */
export interface DefaultPreset {}
export const PresetContext = createContext<DefaultPreset>({});
export function usePreset() {
  return useContext(PresetContext);
}
export function withPreset<T extends keyof DefaultPreset>(group: T) {
  return <TOriginalProps extends {}>(
    Component: ComponentType<TOriginalProps>
  ) => {
    type ResultProps = TOriginalProps & { preset?: keyof DefaultPreset[T] };
    const WithPreset = ({ preset, ...props }: ResultProps) => {
      const presets = usePreset();
      const propsWithPresets = {
        ...((preset ? presets?.[group]?.[preset] : {}) as TOriginalProps),
        ...props,
      };
      return <Component {...propsWithPresets} />;
    };
    return WithPreset;
  };
}
