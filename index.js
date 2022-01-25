function User(name, surname, age, isMale, email, isSubscribed) {
  this.firstName = name;
  this.lastName = surname;
  this.age = age;
  this.isMale = isMale;
  this.email = email;
  this.isSubscribed = isSubscribed;
}

const users = [];

for (let i = 0; i < 20; i++) {
  const user = new User(
    `Username${i}`,
    `Usersurname${i}`,
    Math.floor(Math.random() * 90),
    Math.random() > 0.5,
    `useremail${i}@gmail.com`,
    Math.random() > 0.5
  );
  users.push(user);
}

//1
console.group('Prototype')
User.prototype = {
  getFullName: function () {
    for (let i = 0; i < users.length; i++) {
      console.log(`${users[i].firstName} ${users[i].lastName}`);
    }
  },
};
User.prototype.getFullName()
console.groupEnd()

//2
console.log(
  users.filter((item) => !item.isMale && item.age >= 6 && item.age <= 18)
);

//3
console.log(users);
console.log(
  "useremail99@gmail.com :>> ",
  users.some((user) => user.email === "useremail99@gmail.com")
);

//4
console.log(
  "is Subscribed :>> ",
  users.every((user) => user.isSubscribed)
);

