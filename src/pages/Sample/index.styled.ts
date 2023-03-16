import styled from 'styled-components';

export const HelloContainer = styled.div`
  height: 100vh;
  width: 100vw;
  padding: 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background: url('/uploads/Turuchic.png');
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  color: ${({ theme }) => theme.colors.white} !important;
  font-weight: bold;
  font-family: 'Poppins', sans-serif;
  @media (max-width: 990px){
    padding: 3rem;
    background-position: left;
  }
  @media (max-width: 480px){
    padding: 3rem 1rem;
  }
`;


export const Logo = styled.div`
  margin-left: auto;
  width: 100%;
  font-family: 'Inter', sans-serif;
  font-weight: 700;
  font-size: 64px;
  @media (max-width: 990px){
    font-size: 48px;
  }
  @media (max-width: 480px){
    font-size: 32px;
  }
`;

export const SubscribeContainer = styled.div`
text-align:center;
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
  @media (max-width: 990px){
   h1{
    font-size: 64px;
   }
   p{
    font-size: 20px;
   }
  }
  @media (max-width: 768px){
   h1{
    font-size: 48px;
   }
   p{
    font-size: 16px;
   }
  }
  @media (max-width: 480px){
    h1{
      font-size: 40px;
     }
     p{
      font-size: 16px;
     }
  }
`;

export const SocialsContainer = styled.div`
  width: 100%;
  text-align:right;
  p{
    font-weight: 400;
    font-size: 20px;
  }
  @media (max-width: 768px){
    p{
     font-size: 16px;
    }
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
    width: 60%;
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