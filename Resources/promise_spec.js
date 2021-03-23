describe("Promise", function () {
    it("should catch rejections after then()", function () {
        return Promise.reject( new Error("test error"))
                .then( () => Ti.API.info("execution shouldn't get here")) // adding any then() calls before the catch() triggers the error
                .catch( (err) => Ti.API.info(`caught error ${err}`));
    })
});