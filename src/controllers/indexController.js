

const controller = {
    index: (req, res) => {
		return res.render("index",{title : "Home"})		
	},
    services: (req, res) => {
		return res.render("service",{title : "Services"})		
	},
    admin: (req, res) => {
		return res.render("admin",{title : req.query.user})		
	},
    desing: (req, res) => {
		return res.render("desing",{title : "Services | Desing"})		
	},
    login: (req, res) => {
		return res.render("login",{title : "Iniciar Sesion"})		
	},
    denied: (req, res) => {
		return res.render("denied",{title : "No tienes los privilegios para ingresar"})		
	}
    
}
module.exports = controller;