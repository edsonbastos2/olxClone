import styled from 'styled-components';


export const PageArea = styled.div`

    form{
        background-color: #FFF;
        box-shadow: 0 0 3px #999;
        padding: 10px;
        border-radius: 4px;


        .area{
            display: flex;
            align-items: center;
            padding 10px;
            max-width: 500px;

            .area--title{
                width: 200px;
                text-align: right;
                padding-right: 20px;
                font-weight: bold;
                font-size: 14px;
            }
            .area--input{
                flex: 1;

                input[type="email"], input[type="password"]{
                    width: 100%;
                    font-size: 14px;
                    padding: 5px;
                    border: 1px solid #ddd;
                    border-radius: 3px;
                    outline:0;
                    transition: all ease .4s;

                    &:focus{
                        border: 1px solid #333;
                        color: #333;
                    }
                }

                button{
                    background-color: #0089ff;
                    border: 0;
                    outline: 0;
                    color: #FFF;
                    padding: 5px 10px;
                    cursor pointer;
                    font-size: 14px;
                    border-radius: 4px;

                    &:hover{
                        background-color: #006fce;
                    }
                }
            }
        }
    }
`;