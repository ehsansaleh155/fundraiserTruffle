//const FundraiserContract = artifacts.require("Fundraiser");
contract("Fundraiser", function () {
  describe("initialization", () => {
    let testRan = 0;
    beforeEach(async () => {
      testRan++;
      console.log("Initialising... Test " + testRan);
    });
    it("gets the beneficiary name", async () => {
      assert.equal(1, 2, "names should match");
    });
    it("gets the beneficiary url", async () => {
      assert.equal(1, 1, "url should match");
    });
  });

  describe("setBeneficiary", () => {
    it("updated beneficiary when called by owner account", async () => {
      assert.equal(1, 1, "beneficiaries should match");
    });
  });

  describe("withdrawing funds", () => {
    let testRan2 = 0;
    beforeEach(async () => {
      testRan2++;
      console.log("ayyyy... Test " + testRan2);
    });
    describe("access controls", () => {
      it("throws an error when called from a non-owner account", async () => {
        assert.equal(1, 1, "should not be permitted");
      });
    });
  });
});
