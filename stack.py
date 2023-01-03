# A stack is a liner data structure that follows the principle of Last In First
# Out (LIFO). This means that the last element inserted the stack is removed first

# Creating an empty stack
def create_stack():
    stack = []
    return stack

# Creating an empty stack
def check_empty(stack):
    return len(stack) == 0

# Adding items into the stack
def push(stack, item):
    stack.append(item)
    print('Pushed item: ' + item)

# Removing an element from the stack
def pop(stack):
    if (check_empty(stack)):
        return 'Stack is empty'

    return stack.pop()

stack = create_stack()
push(stack, str(1))
push(stack, str(2))
push(stack, str(3))
push(stack, str(4))
print('Popped item: ' + pop(stack))
print('Stack after popping an element: ' + str(stack))