const o = {
	a: "a",
	b: "b",
}

const o2 = o

o.a = "new value"

console.log(o2.a)

const o3 = Object.assign({}, o)

o.a = "Hello"

console.log(o3.a) //prints new value

const o4 = {
	a: "a",
	b: "b",
	obj: {
		key: "abc",
	},
}

const o5 = Object.assign({}, o4)

o5.obj.key = 'new value'

console.log(o4.obj.key) //prints new value 
//that happened because obj is another object hence now passed by reference
// you need to use deepcopy


// Using deepcopy
//
function shallowCopy(obj) {
	// assume there is no object inside obj
	// Use concept of shallow copy
	return Object.assign({}, obj)
}

function deepcopy(obj){
	const keys = Object.keys(obj)
	const newObject = {}
	
	for (let i = 0; i < keys.length; i++){
		const key = keys[i]
		if (typeof obj[key] === 'object') {
			newObject[key] = deepcopy(obj[key])
		} else {
			newObject[key] = obj[key]
		}
	}

	return newObject
}

const o6 = deepcopy(o4)

o4.obj.key = 'hello world'

console.log(o6.obj.key)
