export default class HolbertonClass {
  constructor(size, location) {
    this._size = size;
    this._location = location;
  }

  // convert to primitive value
  valueOf() {
    return `${this._size}`;
  }

  // return the location
  toString() {
    return `${this._location}`;
  }
}
