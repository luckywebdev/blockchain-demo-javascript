export interface Block {
  previousHash: string; 
  timestamp: number;
  transactions: any;
  hash: string;
  nonce: number;
}
