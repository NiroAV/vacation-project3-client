import { useEffect, useState } from "react";

interface FadeProp{
    title: string,
    text: string
}

function Fade(props: FadeProp): JSX.Element {

    const [fade, setFade] = useState({fade:'fade-out'})

        useEffect(() => {
            const timeout = setInterval(()=>{
                if(fade.fade === 'fade-out'){
                    setFade({fade: 'fade-in'}) 
                }
            }, 300)
            return () => clearInterval(timeout)
        },[fade])


    return (
   
           <div className={fade.fade}>
            
            <h1>{props.title}</h1>
            <p>{props.text}</p>

           </div>
            
        
    );

   
}

export default Fade;
