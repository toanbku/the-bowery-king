export interface SolanaTxn {
  Slot: number;
  Meta: Meta;
  Transaction: Transaction;
  BlockTime: number;
}

interface Transaction {
  Signatures: string[];
  Message: Message;
}

interface Message {
  Version: string;
  Header: Header;
  Accounts: string[];
  RecentBlockHash: string;
  Instructions: Instruction[];
  AddressLookupTables: any[];
}

interface Instruction {
  ProgramIDIndex: number;
  Accounts: number[];
  Data: string;
}

interface Header {
  NumRequireSignatures: number;
  NumReadonlySignedAccounts: number;
  NumReadonlyUnsignedAccounts: number;
}

interface Meta {
  Err?: any;
  Fee: number;
  PreBalances: number[];
  PostBalances: number[];
  PreTokenBalances: any[];
  PostTokenBalances: any[];
  LogMessages: string[];
  InnerInstructions: any[];
}

export interface NearTxn {
  info: Info;
  name: string;
}

interface Info {
  receipt_id: string;
}
