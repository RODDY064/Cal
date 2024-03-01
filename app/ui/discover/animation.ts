// Description: This file contains the animation for the discover page.
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
    show: {
      height: '30rem',
      y:"-20rem",// Start expanding from the bottom
      transition: {
        type: 'tween',
        duration: 4,
        delay: 1.5,
      },
    },
    hide: {
      height: '10rem',
      y: 0, // Expand from bottom to top
      transition: {
        type: 'tween',
        duration: 4,
      },

      

    },
  };
  


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
            delay:1.5      
       }
    }
}

export const MoveDown = {
    show:{
        y:1000,
        transition:{
            type:'tween',
            duration:2,  
            delay:2.5      
       }
    },
    hide:{
        y:0,
        transition:{
            type:'tween',
            duration:2,
            delay:1.2     
       }
    }
}


export const MoveFromTop = {
  show:{
    y:0,
    transition:{
        type:'tween',
        duration:2,  
        delay:2.8   
   }
},
hide:{
    y:-1000,
    transition:{
        type:'tween',
        duration:2,
        delay:1.4    
   }
}
}