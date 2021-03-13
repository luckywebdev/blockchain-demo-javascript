export interface Transaction {
  fromAddress: string;
  toAddress: string;
  amount: number;
  signature?: any;
  timestamp: number;
}
