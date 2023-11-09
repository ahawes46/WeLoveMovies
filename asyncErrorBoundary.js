function asyncErrorBoundary(del,defaultStatus){
  return(req,res,next)=>{
    Promise.resolve()
    .then(()=>del(req,res,next))
    .catch((error)=>{
      const {status=defaultStatus,message=error}=error;
      next({
        status,
        message,
      });
    });
  };
}

module.exports=asyncErrorBoundary;