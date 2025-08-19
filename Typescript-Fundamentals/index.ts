function getRandomKeyValuePair<T extends object>(obj: T): {
    key: keyof T;
    value: T[keyof T];
  } {
    const keys = Object.keys(obj) as (keyof T)[];
    const randKey = keys[Math.floor(Math.random() * keys.length)];
    return { key: randKey, value: obj[randKey] };
  }
  