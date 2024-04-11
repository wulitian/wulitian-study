!(function () {
    //有个服装厂，生产了男女服装各10种款式，为了推销需要找模特来拍照，正常可能会找男女模特各10个，每个模特分别穿一种服装拍一组照片
    // const Model = function (name, sex, clothes) {
    //     this.name = name;
    //     this.sex = sex;
    //     this.clothes = clothes;
    // };
    // Model.prototype.takePhoto = function (i) {
    //     console.log(this.sex + this.name + '穿' + this.clothes + '拍照');
    // };
    // for (let i = 0; i < 10; i++) {
    //     let manModel = new Model(i, '男', '服装' + i);
    //     let womanModel = new Model(i, '女', '服装' + i);
    //     manModel.takePhoto();
    //     womanModel.takePhoto();
    // }
    // 使用享元模式
    class Modal {
        constructor(name, sex) {
            this.name = name;
            this.sex = sex;
        }
    }

    class ModalFactory {
        static create(name, sex) {
            if (!this[sex]) {
                this[sex] = new Modal(name, sex);
            }
            return this[sex];
        }
    }

    class TakeClothesManager {
        static addClothes(name, sex, clothes) {
            const modal = ModalFactory.create(name, sex)
            this[name] = {
                modal,
                clothes
            }
        }
        static takePhoto(name) {
            const obj = this[name]
            console.log(`${obj.modal.sex}模特${obj.modal.name}穿${obj.clothes}拍了张照`)
        }
    }

    for (let i = 0; i < 10; i++) {
        TakeClothesManager.addClothes(i, '男', '服装' + i);
        TakeClothesManager.takePhoto(i);
    }
    for (let i = 0; i < 10; i++) {
        TakeClothesManager.addClothes(i, '女', '服装' + i);
        TakeClothesManager.takePhoto(i);
    }
})()
