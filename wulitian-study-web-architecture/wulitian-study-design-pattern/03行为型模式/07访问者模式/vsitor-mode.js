!(function () {
    // 数组方法封装
    let Visitor = (function () {
        return {
            // 追加数据方法
            push(...args) {
                // 对第一个参数对象执行push方法
                return Array.prototype.push.apply(args[0], args.slice(1));
            },
            // 截取方法
            splice(...args) {
                // 对第一个参数对象执行splice方法
                return Array.prototype.splice.apply(args[0], args.slice(1));
            },
            // 弹出最后一次添加的元素
            pop(...args) {
                // 对第一个参数对象执行pop方法
                return Array.prototype.pop.apply(args[0]);
            }
        }
    })();

    let a = { name: 'Lee', age: 18 };
    console.log(Visitor.push(a, 1, 2, 3, 4));   // 4
    console.log(a);                             // {0: 1, 1: 2, 2: 3, 3: 4, name: 'Lee', age: 18, length: 4}
    console.log(Visitor.splice(a, 1, 2));       // (2) [2, 3]
    console.log(a);                             // {0: 1, 1: 4, name: 'Lee', age: 18, length: 2}
    console.log(Visitor.pop(a));                // 4
    console.log(a);                             // {0: 1, name: 'Lee', age: 18, length: 1}
    // 比如老师家访学生，不同科目的老师就是访问者，通过学生的描述，老师对同一个学生做出一个判断
    // 元素类
    class Student {
        constructor(name, chinese, math, english) {
            this.name = name
            this.chinese = chinese
            this.math = math
            this.english = english
        }

        accept(visitor) {
            visitor.visit(this)
        }
    }

    // 访问者类
    class ChineseTeacher {
        visit(student) {
            console.log(`语文${student.chinese}`)
        }
    }

    class MathTeacher {
        visit(student) {
            console.log(`数学${student.math}`)
        }
    }

    class EnglishTeacher {
        visit(student) {
            console.log(`英语${student.english}`)
        }
    }

    // 实例化元素类
    const student = new Student('张三', 90, 80, 60)
    // 实例化访问者类
    const chineseTeacher = new ChineseTeacher()
    const mathTeacher = new MathTeacher()
    const englishTeacher = new EnglishTeacher()
    // 接受访问
    student.accept(chineseTeacher)
    student.accept(mathTeacher)
    student.accept(englishTeacher)

})()
