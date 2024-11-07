{

   class bankAccount {
    readonly  id: number;
      bankName: string;
    private  _balance: number;
      constructor(id: number, bankName: string, _balance: number) {
         this.id = id;
         this.bankName = bankName;
         this._balance = _balance;
         
      }
      addBalance(neB: number) {
   this._balance = this._balance + neB
         
      } 

      getBalance() {
        return this._balance;
      }
   }
   const gb = new bankAccount(21, 'ewe', 32);
   gb.addBalance(5)
   const o = gb.getBalance();
   
   



}