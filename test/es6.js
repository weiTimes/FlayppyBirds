/*
 * @Author: 叶威 
 * @Date: 2018-09-06 14:52:35 
 * @Last Modified by:   叶威 
 * @Last Modified time: 2018-09-06 14:52:35 
 * 
 * 类的继承
 */

class Animal {
  constructor(name = '无姓名', age = 0) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log(this.name + ',' + this.age);
  }
}

class Cat extends Animal {
  constructor(name, age) {
    super(name, age);
  }

  /**
   * 重写父类的say
   *
   * @memberof Cat
   */
  say() {
    super.say();
    console.log('这是子类的say');
  }
}

const cat = new Cat('小猫hah', 2);
cat.say();
