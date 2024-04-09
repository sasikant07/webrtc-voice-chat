class UserDto {
  id;
  phone;
  activated;
  createdAt;

  constructor(user) {
    this.id = user._id;
    this.phone = user.phone;
    this.activated = user.phone;
    this.createdAt = user.createdAt;
  }
}

module.exports = UserDto;
