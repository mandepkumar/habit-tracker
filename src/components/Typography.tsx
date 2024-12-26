interface TypographyProps{
    children:React.ReactNode
}

export const H1:React.FC<TypographyProps>=({children})=>{
    return (
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl text-primary">
         {children}
        </h1>
      )
}

export const H2:React.FC<TypographyProps>=({children})=>{
    return (
        <h2 className="scroll-m-20 border-b pb-2 text-3xl font-semibold tracking-tight first:mt-0 text-primary">
         {children}
        </h2>
      )
}

export const H3:React.FC<TypographyProps>=({children})=>{
    return (
        <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
         {children}
        </h3>
      )
}

export const H4:React.FC<TypographyProps>=({children})=>{
    return (
        <h4 className="scroll-m-20 text-xl font-semibold tracking-tight">
         {children}
        </h4>
      )
}


export const H5:React.FC<TypographyProps>=({children})=>{
    return (
        <h5 className="scroll-m-20 text-l font-semibold tracking-tight">
         {children}
        </h5>
      )
}

export const H6:React.FC<TypographyProps>=({children})=>{
    return (
        <h6 className="scroll-m-20 text-l font-semibold">
         {children}
        </h6>
      )
}

export const P:React.FC<TypographyProps>=({children})=>{
    return (
        <p className="leading-7 [&:not(:first-child)]:mt-6">
         {children}
        </p>
      )
}