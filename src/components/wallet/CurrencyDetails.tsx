'use client'

import { coinsWalletProps } from "@/@types/types";
import { Currency } from "./currencys";

type CurrencyDetailsProps = {
  coin: coinsWalletProps
}

const CurrencyDetails = ({ coin }: CurrencyDetailsProps) => {

  return (
    <Currency.RootDetails>
      <Currency.RootDividerDetails>
        <Currency.AllTimeContributed totalContributed={coin.totalContributed} />
        <Currency.BuyingAmount buyingAmount={coin.contributed} />
        <Currency.SellingAmount sellingAmount={coin.totalSellings} />
      </Currency.RootDividerDetails>
      <Currency.RootDividerDetails>
        <Currency.Cryptos cryptos={coin.cryptos} />
        <Currency.AvaregePrice avaregePrice={coin.avaregePrice} />
        <Currency.Profit balance={coin.balance} contributed={coin.contributed} />
      </Currency.RootDividerDetails>
    </Currency.RootDetails>
  );
}

export default CurrencyDetails;