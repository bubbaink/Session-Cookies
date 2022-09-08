

const controller = {
    index: (req, res) => {
		return res.render("index",{title : "Home"})		
	},
    services: (req, res) => {
		return res.render("service",{title : "Services"})		
	},
    desing: (req, res) => {
		return res.render("desing",{title : "Services | Desing"})		
	},
    denied: (req, res) => {
		return res.render("denied",{title : "No tienes los privilegios para ingresar"})		
	}
    
}
module.exports = controller;