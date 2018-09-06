(function() {
  'use strict';

  // 使用函数表达式生命方法
  var Animal = function(name, age) {
    this.name = name;
    this.age = age;
  };
  Animal.prototype.say = function() {
    console.log(this.name + '  ' + this.age);
  };

  // 寄生组合继承
  var Cat = function(name, age) {
    // Animal.apply(this, arguments);
    Animal.call(this, name, age);
  };
  Cat.prototype = Object.create(Animal.prototype); // create 浅克隆 区分 new Animal()
  // 重写say方法
  Cat.prototype.say = function() {
    var obj = {
      name: '父类',
      age: 8
    };
    Animal.prototype.say.call(obj);

    console.log('这是子猫的名字' + this.name + this.age);
  };

  var cat2 = new Cat('子猫', 5);
  cat2.say();

  //   var cat = new Animal('小猫', 3);
  //   cat.say();

  //   // 寄生组合继承
  //   // call(), apply() 调用一个对象的方法，用另一个对象替代当前对象
  //   Animal.prototype.say.call(cat);

  //   var params = {
  //     name: '小猫2',
  //     age: 4
  //   };
  //   cat.say.call(params);
})();
