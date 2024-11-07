{
   // Here function work like property
   class bankAccount {
      readonly id: number;
      bankName: string;
      private _balance: number;
      constructor(id: number, bankName: string, _balance: number) {
         this.id = id;
         this.bankName = bankName;
         this._balance = _balance;

      }
      // addBalance(neB: number) {
      //    this._balance = this._balance + neB

      // }
      set addBalance(amount: number) {
         this._balance = this._balance + amount;
   
}
      // getBalance() {
      //    return this._balance;
      // }

      get Balance() {
         return this._balance;
      }
   }
   const gb = new bankAccount(21, 'ewe', 32);
   gb.addBalance = 54
   const o = gb.Balance ;// function lieke property

}