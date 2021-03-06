import React, { useState } from 'react'
import TextField from '@material-ui/core/TextField';
import styled from 'styled-components';
import ExchangeRate from '../exchangeRate/ExchangeRate';

const TradeBuy = () => {
    const dataCoin = [
        {
            name: "Bitcoin",
            value: 'tr'
        },
        {
            name: "ETh",
            value: 'ds'
        },
        {
            name: "Bitcoin",
            value: '34'
        }
    ]
    const dataPayment = [
        {
            name: "Debit Card",
            value: 'fds'
        },
        {
            name: "PayPal",
            value: 'fdsa'
        },
        {
            name: "Credit Cards",
            value: 'dfss'
        }
    ]
    const [coin, setCoin] = useState(`${dataCoin[0].value}`)
    const handleChange = event => {
        setCoin(event.target.value);
    };
    const [payment, setPayment] = useState(`${dataPayment[0].value}`)
    const handleChangePay = event => {
        setPayment(event.target.value);
    };
    return (
        <form>
            <Wrap>
                <ExchangeRate
                    inputLabel="Choose Currency"
                    dataSelect={dataCoin}
                    value={coin}
                    handleChange={handleChange}
                />
                <span style={{ marginBottom: 30 }} />

                <ExchangeRate
                    inputLabel="Payment Method"
                    dataSelect={dataPayment}
                    value={payment}
                    handleChange={handleChangePay}
                />
                <span style={{ marginBottom: 30 }} />
                <TextField
                    id="outlined-helperText"
                    label="Select Amount"
                    defaultValue={300}
                    type="number"
                    variant="outlined"
                />
                <span style={{ marginBottom: 30 }} />
                <TextField
                    id="outlined-helperText"
                    label="Wallet Address"
                    defaultValue="AXB35H24ISDJHCISDT"
                    type="text"
                    variant="outlined"
                />
                <span style={{ marginBottom: 30 }} />
                <Text>Total amount is 200 $ </Text>
                <span style={{ marginBottom: 10 }} />
                <WrapButton>
                    <Button type="submit">
                        Purchase
                </Button>
                    <span style={{ marginRight: 5 }} />
                    <Text>Transaction successfull</Text>
                </WrapButton>
            </Wrap>

        </form>
    )
}

export default TradeBuy
const Wrap = styled.div`
    background:#fff;
    display:flex;
    flex-flow:column;
    .MuiOutlinedInput-input{
        padding:14px;
    }
`
const Text = styled.div`
    color:#43a047;
    text-align:left;
`
const WrapButton = styled.div`
    display:flex;
    align-items:center;
`
const Button = styled.button`
color:#fff;
       background-color: #1565c0;
       box-shadow: 0 3px 1px -2px rgba(0,0,0,.2), 0 2px 2px 0 rgba(0,0,0,.14), 0 1px 5px 0 rgba(0,0,0,.12);
       box-sizing: border-box;
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    cursor: pointer;
    outline: 0;
    border: none;
    -webkit-tap-highlight-color: transparent;
    display: inline-block;
    white-space: nowrap;
    text-decoration: none;
    vertical-align: baseline;
    text-align: center;
    margin: 0;
    min-width: 64px;
    line-height: 36px;
    padding: 0 16px;
    border-radius: 4px;
    overflow: visible;
    transform: translate3d(0,0,0);
    font-size:14px;
`