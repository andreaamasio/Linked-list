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

  tail = () => {}
  at(index) {}
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
list.prepend(300)
console.log(list.toString())
console.log(list.head)
console.log(list.tail)
console.log(list.size)
//console.log(list.next.next)
