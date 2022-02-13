!(function () {
    class Command {
        constructor() {
            this.commandList = [];
        }

        add(command) {
            this.commandList.push(command);
        }

        execute() {
            for (const command of this.commandList) {
                command.execute();
            }
        }
    }
    class Select {
        execute() {
            console.log('查询');
        }
    }
    class Add {
        execute() {
            console.log('添加');
        }
    }
    const command = new Command();
    const select = new Select();
    const add = new Add();
    command.add(select);
    command.add(add);
    command.execute();
})()
