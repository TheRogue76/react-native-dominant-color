import { NativeModules } from 'react-native';

type DominantColorType = {
  multiply(a: number, b: number): Promise<number>;
};

const { DominantColor } = NativeModules;

export default DominantColor as DominantColorType;
