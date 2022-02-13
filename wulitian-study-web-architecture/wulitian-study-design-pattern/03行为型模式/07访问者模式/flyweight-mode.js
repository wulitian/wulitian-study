!(function () {
    const Model = function (sex) {
        this.sex = sex;
    };

    Model.prototype.takePhoto = function () {
        console.log(this.sex + '模特');
    };

    let manModel = new Model('男');
    let womanModel = new Model('女');
    for (let i = 0; i < 20; i++) {
        manModel.takePhoto();
        womanModel.takePhoto();
    }
})()
