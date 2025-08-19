# function uniqueDataTypeFunc<T>(item: T, defaultValue: T): [T, T] {
#     return [item, defaultValue]
# }

# const num = uniqueDataTypeFunc<number>(42, 0)
# console.log(num)


function uniqueDataTypeFunc<Type>(
  item: Type,
  defaultValue: Type
): [Type, Type] {
  return [item, defaultValue];
}

// Example usage
const num = uniqueDataTypeFunc<number>(42, 0);
console.log(num); // Outputs: [42, 0]