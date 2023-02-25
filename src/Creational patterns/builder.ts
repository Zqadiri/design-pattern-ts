class User {
    constructor(
      public username: string,
      public sex: string,
      public age: number,
      public photo: string,
      public email: string
    ) {}
}

/*
    const bytefer = new User(
    "username",
    "female",
    30,
    "https://",
    "email@gmail.com"
    );
*/

class UserBuilder {
  public username!: string;
  public sex!: string;
  public age!: number;
  public photo!: string;
  public email!: string;

  setUserName(name: string) {
    this.username = name;
    return this;
  }

  setSex(sex: string) {
    this.sex = sex;
    return this;
  }

  setAge(age: number) {
    this.age = age;
    return this;
  }

  setPhoto(photo: string) {
    this.photo = photo;
    return this;
  }

  setEmail(email: string) {
    this.email = email;
    return this;
  }

  build() {
    return new User(this.username, this.sex, this.age, this.photo, this.email);
  }
}

const user = new UserBuilder()
  .setAge(50)
  .setSex("female")
  .setEmail("email@gmail.com")
  .setPhoto("https://")
  .setUserName("username")
  .build();

console.log(user);
