class AddonEventTarget extends EventTarget {
  constructor() {
    super();
  }

  public add(addon: any) {
    this.dispatchEvent(new CustomEvent('addon', { detail: addon }));
  }
}
