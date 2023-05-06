type ActionCreate<T> = (...args: any) => { type: string; payload: T };
