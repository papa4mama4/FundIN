import algosdk from "algosdk";
import * as bkr from "beaker-ts";
export class FundIN extends bkr.ApplicationClient {
    desc: string = "";
    override appSchema: bkr.Schema = { declared: { name: { type: bkr.AVMType.bytes, key: "name", desc: "", static: false }, imageURL: { type: bkr.AVMType.bytes, key: "imageURL", desc: "", static: false }, description: { type: bkr.AVMType.bytes, key: "description", desc: "", static: false }, date: { type: bkr.AVMType.uint64, key: "date", desc: "", static: false }, amountNeeded: { type: bkr.AVMType.uint64, key: "amountNeeded", desc: "", static: false }, amountRaised: { type: bkr.AVMType.uint64, key: "amountRaised", desc: "", static: false } }, reserved: {} };
    override acctSchema: bkr.Schema = { declared: {}, reserved: {} };
    override approvalProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDgKaW50Y2Jsb2NrIDAgMQpieXRlY2Jsb2NrIDB4NjE2ZDZmNzU2ZTc0NTI2MTY5NzM2NTY0IDB4IDB4NjE2ZDZmNzU2ZTc0NGU2NTY1NjQ2NTY0IDB4NmU2MTZkNjUgMHg2OTZkNjE2NzY1NTU1MjRjIDB4NjQ2NTczNjM3MjY5NzA3NDY5NmY2ZSAweDY0NjE3NDY1CnR4bmEgQXBwbGljYXRpb25BcmdzIDAKcHVzaGJ5dGVzIDB4NWY2MmM0YzEgLy8gImNyZWF0ZShzdHJpbmcsc3RyaW5nLHN0cmluZyx1aW50NjQpdm9pZCIKPT0KYm56IG1haW5fbDYKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMApwdXNoYnl0ZXMgMHhlYjI4NjQyMSAvLyAiZG9uYXRlKHBheSl2b2lkIgo9PQpibnogbWFpbl9sNQp0eG5hIEFwcGxpY2F0aW9uQXJncyAwCnB1c2hieXRlcyAweDg1NzFiN2Q4IC8vICJlZGl0QXBwbGljYXRpb24oc3RyaW5nLHN0cmluZyxzdHJpbmcsdWludDY0LHVpbnQ2NCl2b2lkIgo9PQpibnogbWFpbl9sNAplcnIKbWFpbl9sNDoKdHhuIE9uQ29tcGxldGlvbgppbnRjXzAgLy8gTm9PcAo9PQp0eG4gQXBwbGljYXRpb25JRAppbnRjXzAgLy8gMAohPQomJgphc3NlcnQKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMQpzdG9yZSA1CnR4bmEgQXBwbGljYXRpb25BcmdzIDIKc3RvcmUgNgp0eG5hIEFwcGxpY2F0aW9uQXJncyAzCnN0b3JlIDcKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgNApidG9pCnN0b3JlIDgKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgNQpidG9pCnN0b3JlIDkKbG9hZCA1CmxvYWQgNgpsb2FkIDcKbG9hZCA4CmxvYWQgOQpjYWxsc3ViIGVkaXRBcHBsaWNhdGlvbl8zCmludGNfMSAvLyAxCnJldHVybgptYWluX2w1Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCiE9CiYmCmFzc2VydAp0eG4gR3JvdXBJbmRleAppbnRjXzEgLy8gMQotCnN0b3JlIDQKbG9hZCA0Cmd0eG5zIFR5cGVFbnVtCmludGNfMSAvLyBwYXkKPT0KYXNzZXJ0CmxvYWQgNApjYWxsc3ViIGRvbmF0ZV8yCmludGNfMSAvLyAxCnJldHVybgptYWluX2w2Ogp0eG4gT25Db21wbGV0aW9uCmludGNfMCAvLyBOb09wCj09CnR4biBBcHBsaWNhdGlvbklECmludGNfMCAvLyAwCj09CiYmCmFzc2VydAp0eG5hIEFwcGxpY2F0aW9uQXJncyAxCnN0b3JlIDAKdHhuYSBBcHBsaWNhdGlvbkFyZ3MgMgpzdG9yZSAxCnR4bmEgQXBwbGljYXRpb25BcmdzIDMKc3RvcmUgMgp0eG5hIEFwcGxpY2F0aW9uQXJncyA0CmJ0b2kKc3RvcmUgMwpsb2FkIDAKbG9hZCAxCmxvYWQgMgpsb2FkIDMKY2FsbHN1YiBjcmVhdGVfMQppbnRjXzEgLy8gMQpyZXR1cm4KCi8vIGF1dGhfb25seQphdXRob25seV8wOgpnbG9iYWwgQ3JlYXRvckFkZHJlc3MKPT0KcmV0c3ViCgovLyBjcmVhdGUKY3JlYXRlXzE6CnN0b3JlIDEzCnN0b3JlIDEyCnN0b3JlIDExCnN0b3JlIDEwCmxvYWQgMTAKZXh0cmFjdCAyIDAKYnl0ZWNfMSAvLyAiIgohPQphc3NlcnQKbG9hZCAxMQpleHRyYWN0IDIgMApieXRlY18xIC8vICIiCiE9CmFzc2VydApsb2FkIDEyCmV4dHJhY3QgMiAwCmJ5dGVjXzEgLy8gIiIKIT0KYXNzZXJ0CmxvYWQgMTMKaW50Y18wIC8vIDAKPgphc3NlcnQKdHhuIE5vdGUKcHVzaGJ5dGVzIDB4NDY3NTZlNjQ0OTRlNDY1NTZlNjQ0OTRlM2EyMDc1NzYzMSAvLyAiRnVuZElORlVuZElOOiB1djEiCj09CmFzc2VydApieXRlY18zIC8vICJuYW1lIgpsb2FkIDEwCmV4dHJhY3QgMiAwCmFwcF9nbG9iYWxfcHV0CmJ5dGVjIDQgLy8gImltYWdlVVJMIgpsb2FkIDExCmV4dHJhY3QgMiAwCmFwcF9nbG9iYWxfcHV0CmJ5dGVjIDUgLy8gImRlc2NyaXB0aW9uIgpsb2FkIDEyCmV4dHJhY3QgMiAwCmFwcF9nbG9iYWxfcHV0CmJ5dGVjIDYgLy8gImRhdGUiCmJ5dGVjIDYgLy8gImRhdGUiCmFwcF9nbG9iYWxfZ2V0Cmdsb2JhbCBMYXRlc3RUaW1lc3RhbXAKKwphcHBfZ2xvYmFsX3B1dApieXRlY18yIC8vICJhbW91bnROZWVkZWQiCmxvYWQgMTMKYXBwX2dsb2JhbF9wdXQKcmV0c3ViCgovLyBkb25hdGUKZG9uYXRlXzI6CnN0b3JlIDE0CmJ5dGVjXzIgLy8gImFtb3VudE5lZWRlZCIKYXBwX2dsb2JhbF9nZXQKYnl0ZWNfMCAvLyAiYW1vdW50UmFpc2VkIgphcHBfZ2xvYmFsX2dldAo8CmFzc2VydApsb2FkIDE0Cmd0eG5zIEFtb3VudAppbnRjXzAgLy8gMAo+CmFzc2VydApsb2FkIDE0Cmd0eG5zIFJlY2VpdmVyCmdsb2JhbCBDdXJyZW50QXBwbGljYXRpb25BZGRyZXNzCj09CmFzc2VydApieXRlY18wIC8vICJhbW91bnRSYWlzZWQiCmJ5dGVjXzAgLy8gImFtb3VudFJhaXNlZCIKYXBwX2dsb2JhbF9nZXQKbG9hZCAxNApndHhucyBBbW91bnQKKwphcHBfZ2xvYmFsX3B1dApyZXRzdWIKCi8vIGVkaXRBcHBsaWNhdGlvbgplZGl0QXBwbGljYXRpb25fMzoKc3RvcmUgMTkKc3RvcmUgMTgKc3RvcmUgMTcKc3RvcmUgMTYKc3RvcmUgMTUKdHhuIFNlbmRlcgpjYWxsc3ViIGF1dGhvbmx5XzAKLy8gdW5hdXRob3JpemVkCmFzc2VydApieXRlY18zIC8vICJuYW1lIgpsb2FkIDE1CmV4dHJhY3QgMiAwCmFwcF9nbG9iYWxfcHV0CmJ5dGVjIDQgLy8gImltYWdlVVJMIgpsb2FkIDE2CmV4dHJhY3QgMiAwCmFwcF9nbG9iYWxfcHV0CmJ5dGVjIDUgLy8gImRlc2NyaXB0aW9uIgpsb2FkIDE3CmV4dHJhY3QgMiAwCmFwcF9nbG9iYWxfcHV0CmJ5dGVjXzIgLy8gImFtb3VudE5lZWRlZCIKbG9hZCAxOAphcHBfZ2xvYmFsX3B1dApieXRlY18wIC8vICJhbW91bnRSYWlzZWQiCmxvYWQgMTkKYXBwX2dsb2JhbF9wdXQKcmV0c3Vi";
    override clearProgram: string = "I3ByYWdtYSB2ZXJzaW9uIDgKcHVzaGludCAwIC8vIDAKcmV0dXJu";
    override methods: algosdk.ABIMethod[] = [
        new algosdk.ABIMethod({ name: "create", desc: "", args: [{ type: "string", name: "name", desc: "" }, { type: "string", name: "imageURL", desc: "" }, { type: "string", name: "description", desc: "" }, { type: "uint64", name: "amountNeeded", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "donate", desc: "", args: [{ type: "pay", name: "paymentTxn", desc: "" }], returns: { type: "void", desc: "" } }),
        new algosdk.ABIMethod({ name: "editApplication", desc: "", args: [{ type: "string", name: "name", desc: "" }, { type: "string", name: "imageURL", desc: "" }, { type: "string", name: "description", desc: "" }, { type: "uint64", name: "amountNeeded", desc: "" }, { type: "uint64", name: "amountRaised", desc: "" }], returns: { type: "void", desc: "" } })
    ];
    // @ts-ignore
    async create(args: {
        name: string;
        imageURL: string;
        description: string;
        amountNeeded: bigint;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.create({ name: args.name, imageURL: args.imageURL, description: args.description, amountNeeded: args.amountNeeded }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async donate(args: {
        paymentTxn: algosdk.TransactionWithSigner | algosdk.Transaction;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.donate({ paymentTxn: args.paymentTxn }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    async editApplication(args: {
        name: string;
        imageURL: string;
        description: string;
        amountNeeded: bigint;
        amountRaised: bigint;
    }, txnParams?: bkr.TransactionOverrides): Promise<bkr.ABIResult<void>> {
        const result = await this.execute(await this.compose.editApplication({ name: args.name, imageURL: args.imageURL, description: args.description, amountNeeded: args.amountNeeded, amountRaised: args.amountRaised }, txnParams));
        return new bkr.ABIResult<void>(result);
    }
    compose = {
        create: async (args: {
            name: string;
            imageURL: string;
            description: string;
            amountNeeded: bigint;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "create"), { name: args.name, imageURL: args.imageURL, description: args.description, amountNeeded: args.amountNeeded }, txnParams, atc);
        },
        donate: async (args: {
            paymentTxn: algosdk.TransactionWithSigner | algosdk.Transaction;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "donate"), { paymentTxn: args.paymentTxn }, txnParams, atc);
        },
        editApplication: async (args: {
            name: string;
            imageURL: string;
            description: string;
            amountNeeded: bigint;
            amountRaised: bigint;
        }, txnParams?: bkr.TransactionOverrides, atc?: algosdk.AtomicTransactionComposer): Promise<algosdk.AtomicTransactionComposer> => {
            return this.addMethodCall(algosdk.getMethodByName(this.methods, "editApplication"), { name: args.name, imageURL: args.imageURL, description: args.description, amountNeeded: args.amountNeeded, amountRaised: args.amountRaised }, txnParams, atc);
        }
    };
}
