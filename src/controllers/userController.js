const { validationResult } = require("express-validator")

module.exports ={
    login: (req, res) => {
        return res.render("login",{title : "Iniciar Sesion",session : req.session.user})		
    },
    saveUser: (req, res)=>{
        let errors = validationResult(req);
            if (errors.isEmpty()) {
                let {name, color , email, edad} = req.body
                newUser ={
                name,
                color,
                email,
                edad
            }

            req.session.user ={
                name, color, email, edad
            }
            if (req.body.remember) {
                res.cookie('cookie', req.session.userLogin, { maxAge: 1000 * 60 * 10 })
            }

            res.locals.user = req.session.user;
            return res.redirect("/user/info")
            .catch(errors => console.log(errors))
        
            }else{

                return res.render("login",{
                    title : "Iniciar Sesion",
                    errors : errors.mapped()
                })
            }
            
            
        
    },

    user: (req, res) => {
		return res.render("user",{title : "Verificando datos", session : req.session.user})		
	}
}
