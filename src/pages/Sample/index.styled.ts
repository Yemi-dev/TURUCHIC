import styled from 'styled-components';

export const HelloContainer = styled.div`
  height: 100vh;
  width: 100vw;
  position: relative;
  color: ${({ theme }) => theme.colors.white} !important;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  overflow:hidden;
  .image{
    height: 100vh;
    width: 100vw;
    object-fit: cover;
    object-position: center;
  }
  @media (max-width: 1200px){
   .image{
    object-position: left;
   }
  }
`;


export const Logo = styled.div`
position: absolute;
top: 3rem;
left: 5rem;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 64px;
  @media (max-width: 1200px){
    font-size: 48px;
  }
  @media (max-width: 768px){
    font-size: 40px;
    left: 3rem;
  }
  @media (max-width: 480px){
    left: 1rem;
    font-size: 32px;
  }
`;

export const SubscribeContainer = styled.div`
text-align:center;
position: absolute;
top:35%;
left: 0; 
right: 0; 
margin-left: auto; 
margin-right: auto; 
width: 700px;
.message{
  margin-top: 1rem;
}
  h1{
    font-weight: 400;
    font-size: 81.0762px;
  }
  p{
    font-weight: 400;
    font-size: 27.0254px;
  }
  @media (max-width: 1200px){
   h1{
    font-size: 64px;
   }
   p{
    font-size: 20px;
   }
  }
  @media (max-width: 768px){
    width: 500px;
   h1{
    font-size: 48px;
   }
   p{
    font-size: 16px;
   }
  }
  @media (max-width: 480px){
    width: 350px;
    h1{
      font-size: 40px;
     }
     p{
      font-size: 16px;
     }
  }
  @media (max-width: 360px){
    width: 280px;
    h1{
      font-size: 32px;
     }
     p{
      font-size: 14px;
     }
  }
`;

export const SocialsContainer = styled.div`
  width: 100%;
  text-align:right;
  position: absolute;
  bottom:3rem;
  right: 5rem;
  p{
    font-weight: 400;
    font-size: 20px;
  }
  @media (max-width: 768px){
    right: 2rem;
    p{
     font-size: 16px;
    }
   }
  @media (max-width: 480px){
    right: 1rem;
   }
`;

export const InputGroup = styled.form`
  display: flex;
  align-items:center;
  justify-content: center;
  margin-top: 1rem;
  input,button{
    padding:0.8rem 2rem;
    border-radius: 10px;
  }
  input{
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    background: rgba(180, 179, 177, 0.5);
    font-size: 24px;
    border:none;
    outline-color: black;
    &::placeholder{
      color: rgba(0, 0, 0, 0.6);
      font-weight: 400;
      font-size: 23.6472px;
    }
  }

  button{
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border:none;
    background: black;
    font-size: 27px;
    color: white;
    cursor: pointer;
    white-space: nowrap;
  }

  @media (max-width: 768px){
    input,button{
      padding:0.6rem 1rem;
    }
    input{
      font-size: 18px;
      &::placeholder{
        font-size: 18px;
      }
    }
    button{
      font-size: 18px;
    }
   }
  @media (max-width: 480px){

    input{
      font-size: 16px;
      &::placeholder{
        font-size: 14px;
      }
    }
    button{
      font-size: 14px;
    }
   }
`
export const SocialIcons= styled.div`
display: flex;
align-items:center;
justify-content: center;
gap: 10px;
width: fit-content;
margin-left: auto;
text-align: center;
padding-right:6rem;
margin-top:.5rem;
@media (max-width: 768px){
  padding-right:4rem;
 }
`