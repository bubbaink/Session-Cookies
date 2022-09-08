let admins = ["Greta","Ada","Vim","Tim"]

let soloAdmins = (req,res,next)=>{
    if(!req.query.user){
        return res.redirect("login")
    }
    if (admins.includes(req.query.user)) {
        next()
    }
    return res.redirect("/denied")
}

module.exports = soloAdmins