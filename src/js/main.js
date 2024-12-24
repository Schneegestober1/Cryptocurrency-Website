import "../css/style.scss";

const btc = document.getElementById('bitcoin');
const ethm = document.getElementById('ethereum');
const dgc = document.getElementById('dogecoin');

const apiUrl = 'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cdogecoin&vs_currencies=usd';

async function getDataCurrency() {
    const response = await fetch(apiUrl,
        {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },

        }
    );
    const data = await response.json();
    console.log(data)
    btc.innerHTML = data.bitcoin.usd;
    ethm.innerHTML = data.ethereum.usd;
    dgc.innerHTML = data.dogecoin.usd;
}

getDataCurrency()