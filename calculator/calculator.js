function calculate(input) {

    // checks if input is blank and throws error if so
    if (input === "") {
        throw new Error("input cannot be empty");
    }

    // check if input has invalid characters
    function validInput(input) {
        const validChars = new Set('0123456789()[]{}+-*/^ ');
        for (let i = 0; i < input.length; ++i) {
            if (!validChars.has(input[i])) {
                return false;
            }
        }
        return true;
    }

    // checks if input has valid parentheses
    function validParentheses(input) {
        let stack = [];
        for (let i = 0; i < input.length; ++i) {
            if (input[i] === '(' || input[i] === '[' || input[i] === '{') {
                stack.push(input[i]);
            }
            else if (input[i] === ')') {
                if (stack.empty || stack.pop() !== '(') {
                    return false;
                }
                stack.pop();
            }
            else if (input[i] === ']') {
                if (stack.empty || stack.pop() !== '[') {
                    return false;
                }
                stack.pop();
            }
            else if (input[i] === '}') {
                if (stack.empty || stack.pop() !== '{') {
                    return false;
                }
                stack.pop();
            }
        }
        return true;
    }

    // for prioritizing multiplication over addition
    function pemdas(operator) {
        if (operator === '+' || operator === '-') return 1;
        if (operator === '*' || operator === '/') return 2;
        if (operator === '^') return 3;
        return 0;
    }

    // input two numbers and operator, outputs number
    function applyOperator(operator, b, a) {
        switch (operator) {
            case '+': return a + b;
            case '-': return a - b;
            case '*': return a * b;
            case '/': return a / b;
            case '^': return a ** b;
        }
    }
    
    // main function
    function evaluate(input) {
        let values = [];
        let operators = [];
        let i = 0;
        while (i < input.length) {
            // eliminating white space
            if (input[i] === ' ') {
                ++i;
                continue;
            }
            // returns val of current number
            if ('0' <= input[i] && input[i] <= '9') {
                let val = 0;
                while (i < input.length && '0' <= input[i] && input[i] <= '9') {
                    val = (val * 10) + (input[i] - '0');
                    ++i;
                }
                values.push(val);
                --i;
            }
            else if (input[i] === '(') {
                operators.push(input[i]);
            }
            // calculates expression inside parentheses
            else if (input[i] === ')') {
                while (operators.length && operators[operators.length - 1] !== '(') {
                    values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
                }
                operators.pop();
            }
            // same thing, for []
            else if (input[i] === '[') {
                operators.push(input[i]);
            }
            else if (input[i] === ']') {
                while (operators.length && operators[operators.length - 1] !== '[') {
                    values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
                }
                operators.pop();
            }
            // same thing, for {}
            else if (input[i] === '{') {
                operators.push(input[i]);
            }
            else if (input[i] === '}') {
                while (operators.length && operators[operators.length - 1] !== '{') {
                    values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
                }
                operators.pop();
            }
            // does multiplication before adding to operator stack
            else {
                while (operators.length && pemdas(operators[operators.length - 1]) >= pemdas(input[i])) {
                    values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
                }
                operators.push(input[i]);
            }
            ++i;
        }
        // calculates remaining elements in stacks
        while (operators.length) {
            values.push(applyOperator(operators.pop(), values.pop(), values.pop()));
        }
        // last element in value stack is answer
        return values.pop();
    }

    // throws error if input has invalid characters
    if (!validInput(input)) {
        throw new Error("input has invalid characters");
    }

    // throws error if input has invalid parentheses
    if (!validParentheses(input)) {
        throw new Error("input has invalid parentheses");
    }

    return evaluate(input);
}

const input = "2+3+3+3+3+3"
const answer = calculate(input);

const input = document.getElementById("input").value;
document.getElementById("answer").textContent = `Result: ${calculate(string)}`;
