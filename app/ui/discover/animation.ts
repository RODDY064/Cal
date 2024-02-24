
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
    width:['30%','70%','30%'],
    transition:{
         type:'tween',
         duration:6,
         repeat:Infinity,
         delay:2,
         times:[0,0.3,1]

    }
   },

   hide:{
    width:['70%','30%','70%'],
    transition:{
         type:'tween',
         duration:6,
         delay:2,
         repeat:Infinity,
         times:[0,0.3,1]
         
    }
   }
}