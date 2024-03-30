import {  extendTheme, ThemeComponentProps, ThemeComponents } from "@chakra-ui/react";
import { h } from "vitest/dist/reporters-P7C2ytIv.js";

const theme = extendTheme({
  colors: {
    orange:'#FF9000',
    white:"#F4EDE8",
    gray:"#999591",
    grayHard:"#666360",
    shape:"#3E3B47",
    blackMedium:"#28262E",
    background:"#312E38",
    inputs:"#232129",

  },
  components:{
    Button:{
      baseStyle:{
        _hover:{
          filter:"brightness(0.9)"
        },
        _active:{
          filter:"brightness(0.9)"
        },
        _disabled:{
          filter:"brightness(0.5)",
          cursor:"not-allowed",
          
        }
      },
      variants:{
        default:{
          bg:"orange",
          color:"background",
          fontWeight:500,
        }
      },
      sizes: {
        full: {
          fontSize: 'lg',
          w:'full',
          rounded:'lg',
          px:4,
          py:5
        },
      },
      defaultProps: {
          variant:'default',
          size:'full'
        },
      
    },
    Input:{
      baseStyle:{
        field:{
          bg:'inputs',
          color:"white",
          fontWeight:500,
          _placeholder:{
            color:"grayHard"
          },
          py:5,
          px:8,
          rounded:'lg',
          h:'fit-content'
         }
      },

      
      // defaultProps:{
      //   variant:'default'
      // }
    },
    Text:{
      variants:{
        error:{
          color:"red.500",
          fontWeight:500,
          fontSize:'sm',
          textAlign:"left",
          alignSelf:"flex-start",
          px:2
        }
      }
    }
  } as ThemeComponents,
  
  styles:{
    global:()=>({
      body:{
        bg:"background",
        color:"white"
      }
    })
  },
   
  
})


export {theme}