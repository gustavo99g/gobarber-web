
const DatePickerTheme = {

  
  '.rdp-months':{
    w:'full',
    display:'block'
  },
  '.rdp-month':{
    display:'flex',
    flexDirection:'column',
  },
 

  '.rdp-caption': {
    fontSize: '2xl',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
    bg:'shape',
    py:2,
    roundedTop:'lg',
  },
  '.rdp-caption_label':{
    fontWeight:'medium',
    textTransform:'capitalize',
  },
  '.rdp-button:hover:not([disabled]):not(.rdp-day_selected)':{
    bg:'orange',
  },
  '.rdp-nav_button_next':{
    position:'absolute',
    right:0,
    top:1.5,
  },
  '.rdp-nav_button_previous':{
    position:'absolute',
    left:0,
    top:1,
},

  '.rdp-table':{
    w:'full',
    p:5,
    display:'contents'
  },
  '.rdp-head_row':{
    display:'grid',
    w:'full',
    h:'auto',
    gridTemplateColumns:'repeat(7,1fr)',
    bg:'blackMedium',

    gap:4,
    py:2,
    px:4
  },
  '.rdp-head_cell':{
    h:'auto',
    fontSize:'md',
    fontWeight:'medium',
    color:'gray',
  },
  '.rdp-tbody':{
    display:'block',
    bg:'blackMedium',
    roundedBottom:'lg',
    p:3
  },
  '.rdp-row':{
    display:'grid',
    w:'full',
    gridTemplateColumns:'repeat(7,1fr)',
    gap:6,
    py:3,
    px:2
  },
  '.rdp-cell':{
    w:5,
    h:5,
    color:'white',
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    
  },
  '.rdp-day':{
    w:5,
    fontSize:'lg',
    fontWeight:'regular',
    h:5,
    p:4,
    bg:'shape',
    rounded:'lg',
    color:'white',
    cursor:'pointer',

    _hover:{
      bg:'orange',
      color:'inputs'
    }

  },
  '.rdp-day_selected, .rdp-day_selected:focus-visible, .rdp-day_selected:hover':{
    bg:'orange',
    color:'inputs',
  },
  '.rdp-day_outside':{
    display:'none',
    cursor:'not-allowed',
  },
  '.rdp-day_disabled':{
    bg:'transparent',
    color:'grayHard',
    _hover:{
      bg:'transparent',
      color:'grayHard',
    }
  }
}

export {DatePickerTheme}