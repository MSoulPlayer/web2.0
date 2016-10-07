var expression = "";
var result = "";
var leftBraceNumber = 0;
var rightBraceNumber = 0;


function warning() {
	//首尾异常处理
	if (expression[0] == '+' || expression[0] == '-' || expression[0] == '*' || expression[0] == '/' || expression[0] == '.' || expression[0] == ')') return false;
	if (expression[expression.length-1] == '+' || expression[expression.length-1] == '-' || expression[expression.length-1] == '*' || expression[expression.length-1] == '/' || expression[expression.length-1] == '.' || expression[expression.length-1] == '(') return false;
	//遍历expression
	for (var i = 1; i <= expression.length-1; i++) {
		//加减乘除旁边只能有对应括号或者数字
		if (expression[i] == '+' || expression[i] == '-' || expression[i] == '*' || expression[i] == '/') {
			if (expression[i-1] == '+' || expression[i-1] == '-' || expression[i-1] == '*' || expression[i-1] == '/') return false;
			if (expression[i+1] == '+' || expression[i+1] == '-' || expression[i+1] == '*' || expression[i+1] == '/') return false;
			if (expression[i-1] == '.' || expression[i+1] == '.') return false;
			if (expression[i-1] == '(') return false;
			if (expression[i+1] == ')') return false;
		}
		//小数点两边只能有数字
		if (expression[i] == '.') {
			if (expression[i-1] > '9' || expression[i-1] < '0') return false;
			if (expression[i+1] > '9' || expression[i-1] < '0') return false;
		}

		if (expression[i] == '(') {
			leftbrace++;
			//至少还有一个右括号没读取，所以左括号数一定大于右括号数
			if (rightBraceNumber >= leftBraceNumber) return false;
			//左括号左边只能有加减乘除
			if (expression[i-1] == '.') return false;
			if (expression[i-1] == ')') return false;
			if (expression[i-1] > '0' && expression[i-1] < '9') return false;
			//左括号右边只能有数字
			if (expression[i+1] == '.') return false;
			if (expression[i+1] == ')') return false;
			if (expression[i+1] == '+' || expression[i+1] == '-' || expression[i+1] == '*' || expression[i+1] == '/') return false;
		}
		if (expression[i] == ')') {
			rightBraceNumber++;
			//右括号数小于等于左括号数，因为可能还有右括号没读完
			if (rightBraceNumber > leftBraceNumber) return false;
			//右括号左边只能有数字
			if (expression[i-1] == '+' || expression[i-1] == '-' || expression[i-1] == '*' || expression[i-1] == '/') return false;
			if (expression[i-1] == '.') return false;
			if (expression[i-1] == '(') return false;
			//右括号右边只能有加减乘除
			if (expression[i+1] > '0' && expression[i+1] < '9') return false;
			if (expression[i+1] == '.') return false;
			if (expression[i+1] == '(') return false;
		}
	}
	//左右括号数量要相等
	if (leftBraceNumber != rightBraceNumber) return false;
	return true;
}


window.onload = function() {
	//点击数字，先让数字出现在上方的expression里面
	document.getElementById("zero").onclick = function() {
		expression += 0;
		document.getElementById("expression").value = expression;
	}
	document.getElementById("one").onclick = function() {
		expression += 1;
		document.getElementById("expression").value = expression;
	}
	document.getElementById("two").onclick = function() {
		expression += 2;
		document.getElementById("expression").value = expression;
	}
	document.getElementById("three").onclick = function() {
		expression += 3;
		document.getElementById("expression").value = expression;
	}
	document.getElementById("four").onclick = function() {
		expression += 4;
		document.getElementById("expression").value = expression;
	}
	document.getElementById("five").onclick = function() {
		expression += 5;
		document.getElementById("expression").value = expression;
	}
	document.getElementById("six").onclick = function() {
		expression += 6;
		document.getElementById("expression").value = expression;
	}
	document.getElementById("seven").onclick = function() {
		expression += 7;
		document.getElementById("expression").value = expression;
	}
	document.getElementById("eight").onclick = function() {
		expression += 8;
		document.getElementById("expression").value = expression;
	}
	document.getElementById("nine").onclick = function() {
		expression += 9;
		document.getElementById("expression").value = expression;
	}
	//可以将一次运算后的结果当作一个操作数继续使用,且可以进行连续运算
	document.getElementById("plus").onclick = function() {
		if (result != "") {
			expression = result;
			result = "";
		}
		expression += "+";
		document.getElementById("result").value = result;
		document.getElementById("expression").value = expression;
	}
	document.getElementById("subtract").onclick = function() {
		if (result != "") {
			expression = result;
			result = "";
		}
		expression += "-";
		document.getElementById("result").value = result;
		document.getElementById("expression").value = expression;
	}
	document.getElementById("multiply").onclick = function() {
		if (result != "") {
			expression = result;
			result = "";
		}
		expression += "*";
		document.getElementById("result").value = result;
		document.getElementById("expression").value = expression;
	}
	document.getElementById("divide").onclick = function() {
		if (result != "") {
			expression = result;
			result = "";
		}
		expression += "/";
		document.getElementById("result").value = result;
		document.getElementById("expression").value = expression;
	}
	document.getElementById("dot").onclick = function() {
		expression += ".";
		document.getElementById("expression").value = expression;
	}
	document.getElementById("delete").onclick = function() {
		expression = expression.substring(0, expression.length - 1);
		document.getElementById("expression").value = expression;
	}
	document.getElementById("leftbrace").onclick = function() {
		expression += "(";
		document.getElementById("expression").value = expression;
	}
	document.getElementById("rightbrace").onclick = function() {
		expression += ")";
		document.getElementById("expression").value = expression;
	}
	document.getElementById("clear").onclick = function() {
		result = expression = "";
		document.getElementById("expression").value = "";
		document.getElementById("result").value = "";
	}
	document.getElementById("equal").onclick = function() {
		if (!warning()) {
			//运算表达式错误的话给出提示，并清空输入
			alert("invalid input! please input the right expresion");
			expression = "";
			document.getElementById("expression").value = expression;
		} else {
		eval("result = "+expression);
		document.getElementById("result").value = result;
		}
	}
}
