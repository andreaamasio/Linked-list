class Node {
  constructor(value = null, next = null) {
    this.value = value
    this.next = next
  }
}
class LinkedList {
  constructor(name) {
    this.name = name
    this.size = 0
    this.head = null
    this.tail = null
  }
  append(value) {
    if (this.head === null) {
      this.head = new Node(value)
    } else {
      let current = this.head
      while (current.next) {
        current = current.next
      }
      current.next = new Node(value)
      this.tail = current.next
    }
    this.size++
  }
  prepend(value) {
    this.head = new Node(value, this.head)
    this.size++
  }

  at(index) {
    let current = this.head
    for (let i = 1; i < index; i++) {
      current = current.next
    }
    return current.value
  }
  toString() {
    let string = ""
    let current = this.head
    while (current) {
      string += `(${current.value}) -> `
      current = current.next
    }
    string += `null`
    return string
  }
}
let list = new LinkedList("MyList")
list.append(100)
list.append(200)
list.append(300)
list.append(400)
list.append(500)
list.append(600)
console.log(list.toString())

console.log(list.size)
console.log(list.at(5))
//console.log(list.next.next)
