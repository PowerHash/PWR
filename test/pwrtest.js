var PWR = artifacts.require("PWR");

contract('PWR', function(accounts) {
    it("should be deployable with a truthy address", function() {
        PWR.deployed().then(pwr => {
            console.log(pwr.address);
            assert.ok(pwr.address);
        });
    });
    it("should put 18,666,666,667 PWR in the first account", function() {
        PWR.deployed().then(pwr => {
            console.log(pwr.getBalance);
            pwr.getBalance(accounts[0]).then(result => {
                console.log(result);
            });
        });
    })
  /*it("should put 18,666,666,667 PWR in the first account", function() {
    return PWR.deployed().then(function(instance) {
        assert.ok(instance.address);
      return instance.getBalance(accounts[0]);
    }).then(function(balance) {
      assert.equal(balance.valueOf(), 18666666667, "18666666667 wasn't in the first account");
    });
  });
  it("should send coin correctly", function() {
    var meta;

    // Get initial balances of first and second account.
    var account_one = accounts[0];
    var account_two = accounts[1];

    var account_one_starting_balance;
    var account_two_starting_balance;
    var account_one_ending_balance;
    var account_two_ending_balance;

    var amount = 10;

    return PWR.deployed().then(function(instance) {
      pwr = instance;
      return pwr.getBalance.call(account_one);
    }).then(function(balance) {
      account_one_starting_balance = balance.toNumber();
      return pwr.getBalance.call(account_two);
    }).then(function(balance) {
      account_two_starting_balance = balance.toNumber();
      return pwr.sendCoin(account_two, amount, {from: account_one});
    }).then(function() {
      return pwr.getBalance.call(account_one);
    }).then(function(balance) {
      account_one_ending_balance = balance.toNumber();
      return pwr.getBalance.call(account_two);
    }).then(function(balance) {
      account_two_ending_balance = balance.toNumber();

      assert.equal(account_one_ending_balance, account_one_starting_balance - amount, "Amount wasn't correctly taken from the sender");
      assert.equal(account_two_ending_balance, account_two_starting_balance + amount, "Amount wasn't correctly sent to the receiver");
    });
  });*/
});