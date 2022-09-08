module.exports={
    offSession : (req,res,next)=>{
        if (typeof req.session.user === "undefined") {
            res.redirect("/denied")
        }else{
            next()
        }
    },
    inSession : (req, res, next)=>{
        if (req.session.user) {
            res.redirect("/user/info")
        }else{
            next()
        }
    }
    
}

