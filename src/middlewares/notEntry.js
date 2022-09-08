module.exports={
    offSession : (req,res,next)=>{
        if (typeof req.session.user === "undefined") {
            res.redirect("/denied")
        }else{
            next()
        }
    }
    
}

