const preset = {
  button: {
    save: {
      iconBefore: 'archive',
      children: 'Save',
      appearance: 'primary',
      intent: 'success',
    },
    cancel: {
      children: 'Cancel',
      appearance: 'minimal',
    },
  },
};

declare module '../dist' {
  export interface DefaultPreset extends Required<typeof preset> {}
}

export default preset;
