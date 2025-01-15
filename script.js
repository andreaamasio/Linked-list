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
    return current
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
  pop() {
    let secondToLastIndex = this.size - 1
    let secondToLast = this.at(secondToLastIndex)
    secondToLast.next = null
    this.size--
  }
  contains(value) {
    let current = this.head
    while (current) {
      if (current.value === value) {
        return true
      }
      current = current.next
    }
    return false
  }
  find(value) {
    let current = this.head
    let index = 1
    while (current) {
      if (current.value === value) {
        return index
      }
      current = current.next
      index++
    }
    return null
  }
  insertAt(value, index) {
    if (index > this.size) {
      return console.log("index is too big, consider using list.append()")
    }
    let nodeAtIndex = this.at(index)
    nodeAtIndex.next = new Node(nodeAtIndex.value, nodeAtIndex.next)
    nodeAtIndex.value = value
    this.size++
  }
  removeAt(index) {
    let nodePreviousTheIndex = this.at(index - 1)
    nodePreviousTheIndex.next = nodePreviousTheIndex.next.next
    this.size--
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

console.log(list.removeAt(4))
console.log(list.toString())
