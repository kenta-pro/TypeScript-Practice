
  // autobind decorator
  export function autobind(_: any, _2: string, descriptor: PropertyDescriptor) {
    const origiinalMethod = descriptor.value;
    const adjDescriptor: PropertyDescriptor = {
      configurable: true,
      get() {
        const boundFn = origiinalMethod.bind(this);
        return boundFn;
      },
    };
    return adjDescriptor;
  }

