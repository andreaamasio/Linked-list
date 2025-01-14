// factory function for LinkedList
function Node(value = null, nextNode = null) {
  return { value, nextNode }
}
function LinkedList(name) {
  let nextNode = Node("head")
  function append(value, beginning = nextNode) {
    if (beginning.nextNode === null) {
      beginning.nextNode = Node(value)
    } else {
      append(value, beginning.nextNode)
    }
  }
  function prepend(value) {
    this.nextNode.nextNode = Node(value, this.nextNode.nextNode)
  }
  return { name, nextNode, append, prepend }
}

let list = LinkedList("myLinkedList")
list.append("Andrea")
list.append("Kasia")
list.prepend("primo")
console.log(list.nextNode.nextNode)
