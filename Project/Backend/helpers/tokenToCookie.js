const tokenToCookie = (token,name, statusCode, res)=>{
    console.log(new Date(new Date().getTime()))
    return  res
    .status(statusCode)
    .cookie('token', token, {
        httpOnly:true,
        sameSite:"none",
        secure:true,
        path: '/',
        expires: new Date(new Date().getTime() + 100 * 1000 *10),
    })
    .json({ ok: true, name: name, token});

}

export {tokenToCookie} 