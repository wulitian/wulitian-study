!(function () {
    class weakLightState {
        constructor(light) {
            this.light = light;
        }

        buttonWasPressed() {
            console.log("弱光");
            this.light.setState(this.light.weakLightState);
        }
    }

    class strongLightState {
        constructor(light) {
            this.light = light;
        }

        buttonWasPressed() {
            console.log("强光");
            this.light.setState(this.light.strongLightState);
        }
    }

    class Light {
        constructor() {
            this.weakLightState = new weakLightState(this);
            this.strongLightState = new strongLightState(this);
        }

        setState(state) {
            this.state = state;
        }

        getState() {
            console.log("状态为"+this.state)
            return this.state;
        }

        init() {
            this.state = this.strongLightState;
            this.state.buttonWasPressed();
        }
    }

    let light = new Light()
    light.init();

    let light2 = new Light()
    let weakLightState1 = new weakLightState(light2);
    weakLightState1.buttonWasPressed();
    light2.getState();

})()

!(function () {
    const light = {
        'yellow': function () {
            console.log("黄灯")
        },
        'red': function () {
            console.log("红灯")
        },
        'green': function () {
            console.log("绿灯")
        }
    }
    light['red'] && light['red']();
})()
