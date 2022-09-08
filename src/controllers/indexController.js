

const controller = {
    index: (req, res) => {
		return res.render("index",{title : "Home",session : req.session.user})		
	},
    services: (req, res) => {
		return res.render("service",{title : "Services",session : req.session.user})		
	},
    desing: (req, res) => {
		return res.render("desing",{title : "Services | Desing",session : req.session.user})		
	},
    denied: (req, res) => {
		return res.render("denied",{title : "No tienes los privilegios para ingresar",session : req.session.user})		
	}
    
}
module.exports = controller;