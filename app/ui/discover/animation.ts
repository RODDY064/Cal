import { delay } from "framer-motion"

export const Swing = {
    show:{
        y:0,
        scale:1,
        transition:{
            type:'spring' ,damping:12, stiffness:150 
        }
    },
    hide:{
        y: 120, scale:0.9
    }
}


export const Expand = {
   show:{
    width:'-30rem' ,
    transition:{
         type:'tween',
         duration:4,
         delay:2

    }
   },

   hide:{
    width:'0%',
    transition:{
         type:'tween',
         duration:4,
         delay:2    
    }
   }
}


 export const Leave = {
    show:{
        opacity:0,
        transition:{
            type:'tween',
            duration:2,        
       }
    },
    hide:{
        opacity:1,
        transition:{
            type:'tween',
            duration:2,        
       }
    }
}