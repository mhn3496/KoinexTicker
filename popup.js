const RESPONSE_DONE = 4;
const STATUS_OK = 200;
document.addEventListener('DOMContentLoaded', () => {
    var main  = document.getElementById("main");
    getPricesKoinex(function(koinexRetVal)
    {

        var prices  = JSON.parse(koinexRetVal).prices.inr;
        main.innerText = "BTC: " + prices.BTC.toString() + " ETH: " + prices.ETH.toString() + " XRP: "+ prices.XRP.toString() +
            " LTC: "+ prices.LTC.toString();
    });



}
)

function getPricesKoinex(callback)
{
    var xhr = new XMLHttpRequest();
    xhr.open("GET", "https://koinex.in/api/ticker", true);

    xhr.onreadystatechange = function () {
        if (xhr.readyState == RESPONSE_DONE) {
            if (xhr.status == STATUS_OK) {
                console.log(xhr.responseText);
                callback(xhr.responseText);
            }

        }

    }

    xhr.send(data = null);
}