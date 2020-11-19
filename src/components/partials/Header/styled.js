import styled from 'styled-components';

export const HeaderArea = styled.header`
  height: 60px;
  background-color: #FFF;
  border-bottom: 1px solid #CCC;  

.container{
    max-width: 1000px;
    margin: auto;
    display: flex;
}

a{
    text-decoration: none;
}

.logo{
    flex:1;
    display: flex;
    align-items: center;
    height: 60px;

    .logo1,
    .logo2,
    .logo3{
        font-size: 27px;
        font-weight: bold;
    }

    .logo1{color: #FF0000};
    .logo2{color: #00FF00};
    .logo3{color: #0000FF};
}

nav{
    margin-top: 10px;
    margin-bottom:10px;

    ul{
        display: flex;
        list-style: none;
        height: 40px;
    }

    li{
        margin-left: 20px;
        margin-right: 20px;
        

        a,button{
            color: #242424;
            font-size: 14px;
            font-weight: 400;
            border: none;
            background: none;
            cursor: pointer;
            outline:0;

            &:hover{
                color:#999;
            }

            &.button{
                background-color: #FF8100;
                border-radius: 4px;
                color: #FFF;
                padding: 5px 10px;
            }

            &.button:hover{
                background-color: #E57706;
            }
        }
    }
}
`;