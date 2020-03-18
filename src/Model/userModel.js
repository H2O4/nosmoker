class userModel {
  constructor (userID) {
      this.ID = userID;
      this.data = {
        wantedResult:null,
        median:null,
        today:0,
        statistic:{
          atDay:0,
          atMonth:0,
          atYear:0
        }
      };
      this.isSetupComplete = false

  }
}
module.exports = userModel;
