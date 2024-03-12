'use client'

import useApiData from "@/hooks/useApiData";
import { Box, Divider } from "@mui/material";
import { useState } from "react";
import HeaderSearch from "../global/HeaderSearch";
import HeaderInfo from "./HeaderInfo";
import { Crypto } from "./crypto";
import useMediaQueryAdapted from "@/hooks/useMediaQueryAdapter";
import { FixedSizeList } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer"
import { rowListCryptosProps } from "@/@types/types";

const CryptoCurrency = () => {

  const [search, setSearch] = useState<string>("")
  const { data } = useApiData()
  const { sm, md, lg } = useMediaQueryAdapted()

  const searchCoins = data?.filter(coin => coin.name.toLowerCase().includes(search.toLowerCase()) ||
    coin.symbol.toLowerCase().includes(search.toLowerCase())
  )

  const maxHeight = lg ? '100vh' : '88vh'
  const marginTop = lg ? '70px' : '0px'

  const rowListCryptos = ({ index, style }: rowListCryptosProps) => {

    if (searchCoins) {
      const coin = searchCoins[index]

      return (
        <div key={coin.id} style={style}>
          <Crypto.Root>
            <Crypto.Rank value={coin.market_cap_rank} />
            <Crypto.Image text={coin.image} />
            <Crypto.Name text={coin.name} symbol={coin.symbol} />
            <Crypto.Price value={coin.current_price} />
            <Crypto.Porcent value={coin.price_change_percentage_24h} />
            {!md && <>
              <Crypto.Hight value={coin.high_24h} />
              <Crypto.Low value={coin.low_24h} />
            </>}
            {!sm && <Crypto.MarketCap value={coin.market_cap} />}
          </Crypto.Root>
          <Divider />
        </div>
      )
    }
  }

  return (
    <Box display='flex' flexDirection='column' width='100%' height={maxHeight} mt={marginTop}>
      <Box mb={2}>
        <HeaderSearch title="All Currencys" setSearch={setSearch} />
      </Box>
      <Divider />
      <HeaderInfo />
      <Divider />
      <Box
        width='100%'
        height='100vh'
      >
        <AutoSizer>
          {({ height, width }) => (
            searchCoins &&
            <FixedSizeList height={height} width={width} itemCount={searchCoins.length} itemSize={65}>
              {rowListCryptos}
            </FixedSizeList>
          )}
        </AutoSizer>
      </Box>
    </Box>
  );
}

export default CryptoCurrency;