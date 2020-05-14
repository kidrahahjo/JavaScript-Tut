const o = new Object()
o.firstName = "Hardik"
o.lastName = "Ojha"
o.isStudent = true
o.greet = function(){
	console.log("hello")
}

const o2 = {} //Another Way to define object on js
const key = "isStudent"
o2.firstName = "Hardik"
o2['lastName'] = "Ojha"
o2[key] = true
o['greet'] = function(){
	console.log("hello")
}

const o3 = {
	firstName: "Hardik",
	lastName: "Ojha",
	isStudent: true,
	greet: function(){
		console.log("Hello")
	},
	address: {
		street: "Laxmi Nagar",
		postalCode: 342010,
	},
}

console.log(o.firstName)
console.log(o2['lastName'])
console.log(o3.address['postalCode'])

