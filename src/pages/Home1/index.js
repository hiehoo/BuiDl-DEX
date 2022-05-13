import React from "react";

import { useGoogleLogin } from "react-google-login";
import { handleSectionNavigation } from "util";
import { Column } from "components/Column";
import { Stack } from "components/Stack";
import { Text } from "components/Text";
import { Row } from "components/Row";
import { Button } from "components/Button";
import { Image } from "components/Image";
import { Grid } from "components/Grid";
import { Line } from "components/Line";

const Home1Page = () => {
  const { signIn } = useGoogleLogin({
    onSuccess: (res) => {
      alert("Login successfull. 😍");
    },
    onFailure: (err) => {
      alert(err?.details ?? "Failed to login. 😢");
    },
    clientId: process.env.REACT_APP_GOOGLE_CLIENT_ID,
    accessType: "offline",
    cookiePolicy: "single_host_origin",
  });

  return (
    <>
      <Column className="bg-black_900 font-montserrat items-start justify-end mx-[auto] w-[100%]">
        <Stack className="lg:h-[1482px] xl:h-[1695px] h-[1905px] 2xl:h-[1907px] 3xl:h-[2288px] lg:ml-[54px] xl:ml-[62px] ml-[70px] 3xl:ml-[84px] lg:mr-[3px] xl:mr-[4px] mr-[5px] 3xl:mr-[6px] lg:mt-[51px] xl:mt-[58px] mt-[66px] 3xl:mt-[79px] w-[95%]">
          <Stack className="absolute lg:h-[1482px] xl:h-[1695px] h-[1905px] 2xl:h-[1907px] 3xl:h-[2288px] inset-[0] w-[100%]">
            <div className="absolute backdrop-opacity-[0.5] bg-green_A200_af blur-[139.00px] lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] right-[13%] rounded-radius50 top-[32%] lg:w-[192px] xl:w-[220px] w-[248px] 3xl:w-[297px]"></div>
            <div className="absolute backdrop-opacity-[0.5] bg-green_A200_7f blur-[139.00px] lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] left-[2%] rounded-radius50 top-[2%] lg:w-[192px] xl:w-[220px] w-[248px] 3xl:w-[297px]"></div>
            <Stack className="absolute lg:h-[381px] xl:h-[436px] h-[489px] 2xl:h-[490px] 3xl:h-[588px] top-[11%] w-[100%]">
              <Text className="absolute font-bold leading-lh left-[0] lg:text-fs58 xl:text-fs66 text-fs75 3xl:text-fs90 text-left text-white_A700 top-[0] w-[54%]">
                {
                  <>
                    {`Save, Buy and Sell`}
                    <br />
                    {`Your blockchain asset`}
                  </>
                }
              </Text>
              <Column className="absolute bottom-[0] left-[0] w-[41%]">
                <Text className="font-medium leading-lh lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-left text-white_A700 w-[100%]">
                  {
                    <>
                      {`The easy to manage and trade`}
                      <br />
                      {`your cryptocurency asset`}
                    </>
                  }
                </Text>
                <Column className="lg:mt-[52px] xl:mt-[60px] mt-[68px] 3xl:mt-[81px] w-[100%]">
                  <Row className="lg:gap-[47px] xl:gap-[54px] gap-[61px] 3xl:gap-[73px] grid grid-cols-2 items-center justify-between lg:pr-[24px] xl:pr-[28px] pr-[32px] 3xl:pr-[38px] w-[100%]">
                    <Button
                      className="common-pointer bg-cyan_100 border-bw font-bold xl:mt-[1px] lg:mt-[1px] mt-[2px] lg:px-[27px] xl:px-[31px] px-[35px] 3xl:px-[42px] lg:py-[14px] xl:py-[16px] py-[18.375px] 2xl:py-[18px] 3xl:py-[22px] rounded-radius20 text-black_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[100%]"
                      onClick={signIn}
                    >{`Connect Wallet`}</Button>
                    <Button className="bg-white_A700 border-bw font-bold xl:mb-[1px] lg:mb-[1px] mb-[2px] lg:px-[27px] xl:px-[31px] px-[35px] 3xl:px-[42px] lg:py-[14px] xl:py-[16px] py-[18.375px] 2xl:py-[18px] 3xl:py-[22px] rounded-radius20 text-black_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[100%]">{`Start Trading`}</Button>
                  </Row>
                </Column>
              </Column>
              <Image
                src="img_modern3dillus.png"
                className="absolute lg:h-[379px] xl:h-[434px] h-[487px] 2xl:h-[488px] 3xl:h-[585px] inset-y-[0] my-[auto] object-contain right-[0] w-[48%]"
                alt="Modern3dillus"
              />
            </Stack>
            <Column className="absolute bottom-[0] items-center justify-start left-[0] w-[95%]">
              <Stack className="lg:h-[238px] xl:h-[273px] h-[306px] 2xl:h-[307px] 3xl:h-[368px] mx-[auto] w-[76%]">
                <Text className="absolute bottom-[0] font-bold leading-lh right-[0] text-center lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-white_A700 w-[95%]">
                  {
                    <>
                      {`Global Decentralize currency based on`}
                      <br />
                      {`blockchain technology`}
                    </>
                  }
                </Text>
                <div className="absolute backdrop-opacity-[0.5] bg-green_A200_8e blur-[139.00px] lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] left-[0] rounded-radius50 top-[0] lg:w-[192px] xl:w-[220px] w-[248px] 3xl:w-[297px]"></div>
              </Stack>
              <Text className="font-medium mt-[11px] 3xl:mt-[13px] lg:mt-[8px] xl:mt-[9px] mx-[auto] text-center lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-green_A200">{`Web3 is the latest efficient technology`}</Text>
              <Stack className="lg:h-[445px] xl:h-[508px] h-[571px] 2xl:h-[572px] 3xl:h-[686px] lg:mt-[161px] xl:mt-[185px] mt-[208px] 3xl:mt-[249px] w-[100%]">
                <Stack className="absolute lg:h-[412px] xl:h-[471px] h-[529px] 2xl:h-[530px] 3xl:h-[636px] top-[0] w-[100%]">
                  <Stack className="absolute lg:h-[412px] xl:h-[471px] h-[529px] 2xl:h-[530px] 3xl:h-[636px] inset-[0] w-[100%]">
                    <Row
                      className="absolute items-start justify-between top-[0] w-[100%]"
                      id="block1"
                    >
                      <div className="backdrop-opacity-[0.5] bg-green_A200_8e blur-[139.00px] lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] lg:mt-[14px] xl:mt-[16px] mt-[18px] 3xl:mt-[21px] rounded-radius50 lg:w-[192px] xl:w-[220px] w-[248px] 3xl:w-[297px]"></div>
                      <Column className="bg-gradient  items-center justify-center lg:mb-[105px] xl:mb-[120px] mb-[135px] 3xl:mb-[162px] lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius10 w-[54%]">
                        <Text className="font-bold lg:mx-[29px] xl:mx-[33px] mx-[38px] 3xl:mx-[45px] lg:text-fs24 xl:text-fs28 text-fs32 3xl:text-fs38 text-left text-white_A700">{`Access Token Market`}</Text>
                        <Text className="font-medium leading-lh 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:mx-[49px] xl:mx-[56px] mx-[64px] 3xl:mx-[76px] text-black_900 text-center lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 w-[40%]">
                          {
                            <>
                              {`Buy and sell token anytime`}
                              <br />
                              {`and anywhere`}
                            </>
                          }
                        </Text>
                      </Column>
                    </Row>
                    <Image
                      src="img_illustration.png"
                      className="absolute bottom-[0] lg:h-[371px] xl:h-[425px] h-[477px] 2xl:h-[478px] 3xl:h-[573px] left-[0] object-contain w-[54%]"
                      alt="Illustration"
                    />
                  </Stack>
                  <Column className="absolute bg-gradient  bottom-[34%] justify-center right-[0] rounded-radius10 w-[54%]">
                    <Text className="font-bold lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] lg:mx-[30px] xl:mx-[34px] mx-[39px] 3xl:mx-[46px] lg:text-fs24 xl:text-fs28 text-fs32 3xl:text-fs38 text-left text-white_A700">{`User Friendly Interface`}</Text>
                    <Text className="font-medium lg:mb-[35px] xl:mb-[40px] mb-[45px] 3xl:mb-[54px] mt-[10px] 3xl:mt-[12px] lg:mt-[7px] xl:mt-[8px] xl:mx-[105px] mx-[119px] 3xl:mx-[142px] lg:mx-[92px] text-black_900 text-center lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24">{`Easy to navigate`}</Text>
                  </Column>
                </Stack>
                <Column className="absolute bg-gradient  bottom-[0] justify-start right-[0] rounded-radius10 w-[54%]">
                  <Text className="font-bold lg:mt-[12px] xl:mt-[14px] mt-[16px] 3xl:mt-[19px] lg:mx-[19px] xl:mx-[22px] mx-[25px] 3xl:mx-[30px] lg:text-fs24 xl:text-fs28 text-fs32 3xl:text-fs38 text-left text-white_A700">{`Ownership Token control`}</Text>
                  <Text className="font-medium leading-lh lg:mb-[13px] xl:mb-[15px] mb-[17px] 3xl:mb-[20px] xl:mt-[10px] mt-[12px] 3xl:mt-[14px] lg:mt-[9px] lg:mx-[49px] xl:mx-[56px] mx-[63px] 3xl:mx-[75px] text-black_900 text-center lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 w-[45%]">
                    {
                      <>
                        {`Be in control and own as many`}
                        <br />
                        {`asset as possible`}
                      </>
                    }
                  </Text>
                </Column>
              </Stack>
            </Column>
            <Row className="absolute items-center justify-between left-[0] top-[0] w-[55%]">
              <Row className="items-center justify-start w-[34%]">
                <Image
                  src="img_group2.svg"
                  className="lg:h-[46px] xl:h-[52px] h-[58px] 2xl:h-[59px] 3xl:h-[70px] object-contain lg:w-[45px] xl:w-[51px] w-[58px] 3xl:w-[69px]"
                  alt="Group2"
                />
                <Text className="font-bold lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:text-fs24 xl:text-fs28 text-fs32 3xl:text-fs38 text-left text-white_A700">{`Circlechain`}</Text>
              </Row>
              <Row className="items-center justify-between lg:mb-[11px] xl:mb-[13px] mb-[15px] 3xl:mb-[18px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] w-[55%]">
                <Text
                  className="common-pointer font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700"
                  onClick={() => handleSectionNavigation("block1")}
                >{`How it work`}</Text>
                <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`Blog`}</Text>
                <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`Support`}</Text>
              </Row>
            </Row>
          </Stack>
          <Image
            src="img_socialmedia.svg"
            className="absolute lg:h-[32px] xl:h-[37px] h-[41px] 2xl:h-[42px] 3xl:h-[50px] object-contain right-[5%] top-[0] w-[22%]"
            alt="SocialMedia"
          />
        </Stack>
        <Column className="lg:mt-[131px] xl:mt-[150px] mt-[169px] 3xl:mt-[202px] w-[100%]">
          <Column className="items-start justify-start w-[100%]">
            <Text className="font-bold 3xl:mx-[106px] lg:mx-[69px] xl:mx-[79px] mx-[89px] lg:text-fs37 xl:text-fs42 text-fs48 3xl:text-fs57 text-left text-white_A700">{`Market Trend`}</Text>
            <Column className="font-raleway items-center lg:mt-[42px] xl:mt-[48px] mt-[54px] 3xl:mt-[64px] w-[100%]">
              <Grid className="lg:gap-[18px] xl:gap-[21px] gap-[24px] 3xl:gap-[28px] grid grid-cols-4 mx-[auto] w-[88%]">
                <Column className="bg-black_900 border border-solid border-white_A700 items-center justify-start lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius18 shadow-bs w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[86%]">
                    <Row className="items-center justify-between w-[66%]">
                      <Image
                        src="img_bitcoinic2.png"
                        className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius50 w-[50px]"
                        alt="bitcoinic2"
                      />
                      <Text className="font-semibold lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`BTC`}</Text>
                      <Button className="bg-black_900 border-bw font-semibold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] lg:py-[3px] py-[4.86px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius4 text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-white_A700 w-[32%]">{`BITCOIN`}</Button>
                    </Row>
                    <Image
                      src="img_seemoreic.svg"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] my-[1px] object-contain lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      alt="seemoreic"
                    />
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] opacity-op5 w-[87%]" />
                  <Row className="font-roboto items-center justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] w-[85%]">
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`$56,623.54`}</Text>
                      <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`1.41%`}</Text>
                    </Column>
                    <Image
                      src="img_chartstate1.png"
                      className="lg:h-[42px] xl:h-[48px] h-[53.27px] 2xl:h-[54px] 3xl:h-[64px] mb-[6.37px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[6.36px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[40%]"
                      alt="chartstate1"
                    />
                  </Row>
                </Column>
                <Column className="bg-black_900 border border-black_900 border-solid items-center justify-start lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius18 shadow-bs w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[86%]">
                    <Row className="items-center justify-between w-[71%]">
                      <Image
                        src="img_bitcoinic2_1.png"
                        className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius50 w-[50px]"
                        alt="bitcoinic2"
                      />
                      <Text className="font-semibold lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`ETH`}</Text>
                      <Button className="bg-white_A700 border-bw font-semibold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] lg:py-[3px] py-[4.86px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius4 text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-white_A700 w-[37%]">{`ETHEREUM`}</Button>
                    </Row>
                    <Image
                      src="img_seemoreic_1.svg"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] my-[1px] object-contain lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      alt="seemoreic"
                    />
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] opacity-op5 w-[87%]" />
                  <Row className="font-roboto items-center justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] w-[85%]">
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`$4,267.90`}</Text>
                      <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`2.22%`}</Text>
                    </Column>
                    <Image
                      src="img_chartstate1_1.png"
                      className="lg:h-[42px] xl:h-[48px] h-[53.27px] 2xl:h-[54px] 3xl:h-[64px] mb-[6.37px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[6.36px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[40%]"
                      alt="chartstate1"
                    />
                  </Row>
                </Column>
                <Column className="bg-black_900 border border-solid border-white_A700 items-center justify-start lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius18 shadow-bs w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[86%]">
                    <Row className="items-center justify-between w-[69%]">
                      <Image
                        src="img_bitcoinic2_2.png"
                        className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius50 w-[50px]"
                        alt="bitcoinic2"
                      />
                      <Text className="font-semibold lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`BNB`}</Text>
                      <Button className="bg-gray_400_4c border-bw font-semibold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] lg:py-[3px] py-[4.86px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius4 text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-white_A700 w-[33%]">{`BINANCE`}</Button>
                    </Row>
                    <Image
                      src="img_seemoreic_2.svg"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] my-[1px] object-contain lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      alt="seemoreic"
                    />
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] opacity-op5 w-[87%]" />
                  <Row className="font-roboto items-center justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] w-[85%]">
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`$587.74`}</Text>
                      <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_600 text-left">{`0.82%`}</Text>
                    </Column>
                    <Image
                      src="img_chartstate1_2.png"
                      className="lg:h-[42px] xl:h-[48px] h-[53.27px] 2xl:h-[54px] 3xl:h-[64px] mb-[6.37px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[6.36px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[40%]"
                      alt="chartstate1"
                    />
                  </Row>
                </Column>
                <Column className="bg-black_900 border border-solid border-white_A700 items-center justify-start lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius18 shadow-bs w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[86%]">
                    <Row className="items-center justify-between w-[70%]">
                      <Image
                        src="img_bitcoinic2_3.png"
                        className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius50 w-[50px]"
                        alt="bitcoinic2"
                      />
                      <Text className="font-semibold lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`USDT`}</Text>
                      <Button className="bg-gray_400_4c border-bw font-semibold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] lg:py-[3px] py-[4.86px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius4 text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-white_A700 w-[29%]">{`TETHER`}</Button>
                    </Row>
                    <Image
                      src="img_seemoreic_2.svg"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] my-[1px] object-contain lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      alt="seemoreic"
                    />
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] opacity-op5 w-[87%]" />
                  <Row className="font-roboto items-center justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] w-[85%]">
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`$0.9998`}</Text>
                      <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`0,03%`}</Text>
                    </Column>
                    <Image
                      src="img_chartstate1_3.png"
                      className="lg:h-[42px] xl:h-[48px] h-[53.27px] 2xl:h-[54px] 3xl:h-[64px] mb-[6.37px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[6.36px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[40%]"
                      alt="chartstate1"
                    />
                  </Row>
                </Column>
                <Column className="bg-black_900 border border-solid border-white_A700 items-center justify-start lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius18 shadow-bs w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[86%]">
                    <Row className="items-center justify-between w-[66%]">
                      <Image
                        src="img_bitcoinic2.png"
                        className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius50 w-[50px]"
                        alt="bitcoinic2"
                      />
                      <Text className="font-semibold lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`BTC`}</Text>
                      <Button className="bg-black_900 border-bw font-semibold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] lg:py-[3px] py-[4.86px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius4 text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-white_A700 w-[32%]">{`BITCOIN`}</Button>
                    </Row>
                    <Image
                      src="img_seemoreic.svg"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] my-[1px] object-contain lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      alt="seemoreic"
                    />
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] opacity-op5 w-[87%]" />
                  <Row className="font-roboto items-center justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] w-[85%]">
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`$56,623.54`}</Text>
                      <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`1.41%`}</Text>
                    </Column>
                    <Image
                      src="img_chartstate1.png"
                      className="lg:h-[42px] xl:h-[48px] h-[53.27px] 2xl:h-[54px] 3xl:h-[64px] mb-[6.37px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[6.36px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[40%]"
                      alt="chartstate1"
                    />
                  </Row>
                </Column>
                <Column className="bg-black_900 border border-black_900 border-solid items-center justify-start lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius18 shadow-bs w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[86%]">
                    <Row className="items-center justify-between w-[71%]">
                      <Image
                        src="img_bitcoinic2_1.png"
                        className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius50 w-[50px]"
                        alt="bitcoinic2"
                      />
                      <Text className="font-semibold lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`ETH`}</Text>
                      <Button className="bg-white_A700 border-bw font-semibold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] lg:py-[3px] py-[4.86px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius4 text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-white_A700 w-[37%]">{`ETHEREUM`}</Button>
                    </Row>
                    <Image
                      src="img_seemoreic_1.svg"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] my-[1px] object-contain lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      alt="seemoreic"
                    />
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] opacity-op5 w-[87%]" />
                  <Row className="font-roboto items-center justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] w-[85%]">
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`$4,267.90`}</Text>
                      <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`2.22%`}</Text>
                    </Column>
                    <Image
                      src="img_chartstate1_1.png"
                      className="lg:h-[42px] xl:h-[48px] h-[53.27px] 2xl:h-[54px] 3xl:h-[64px] mb-[6.37px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[6.36px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[40%]"
                      alt="chartstate1"
                    />
                  </Row>
                </Column>
                <Column className="bg-black_900 border border-solid border-white_A700 items-center justify-start lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius18 shadow-bs w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[86%]">
                    <Row className="items-center justify-between w-[69%]">
                      <Image
                        src="img_bitcoinic2_2.png"
                        className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius50 w-[50px]"
                        alt="bitcoinic2"
                      />
                      <Text className="font-semibold lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`BNB`}</Text>
                      <Button className="bg-gray_400_4c border-bw font-semibold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] lg:py-[3px] py-[4.86px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius4 text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-white_A700 w-[33%]">{`BINANCE`}</Button>
                    </Row>
                    <Image
                      src="img_seemoreic_2.svg"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] my-[1px] object-contain lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      alt="seemoreic"
                    />
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] opacity-op5 w-[87%]" />
                  <Row className="font-roboto items-center justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] w-[85%]">
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`$587.74`}</Text>
                      <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_600 text-left">{`0.82%`}</Text>
                    </Column>
                    <Image
                      src="img_chartstate1_2.png"
                      className="lg:h-[42px] xl:h-[48px] h-[53.27px] 2xl:h-[54px] 3xl:h-[64px] mb-[6.37px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[6.36px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[40%]"
                      alt="chartstate1"
                    />
                  </Row>
                </Column>
                <Column className="bg-black_900 border border-solid border-white_A700 items-center justify-start lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius18 shadow-bs w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[86%]">
                    <Row className="items-center justify-between w-[70%]">
                      <Image
                        src="img_bitcoinic2_3.png"
                        className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius50 w-[50px]"
                        alt="bitcoinic2"
                      />
                      <Text className="font-semibold lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`USDT`}</Text>
                      <Button className="bg-gray_400_4c border-bw font-semibold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] lg:py-[3px] py-[4.86px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius4 text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-white_A700 w-[29%]">{`TETHER`}</Button>
                    </Row>
                    <Image
                      src="img_seemoreic_2.svg"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] my-[1px] object-contain lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      alt="seemoreic"
                    />
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] opacity-op5 w-[87%]" />
                  <Row className="font-roboto items-center justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] w-[85%]">
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`$0.9998`}</Text>
                      <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`0,03%`}</Text>
                    </Column>
                    <Image
                      src="img_chartstate1_3.png"
                      className="lg:h-[42px] xl:h-[48px] h-[53.27px] 2xl:h-[54px] 3xl:h-[64px] mb-[6.37px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[6.36px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[40%]"
                      alt="chartstate1"
                    />
                  </Row>
                </Column>
                <Column className="bg-black_900 border border-solid border-white_A700 items-center justify-start lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius18 shadow-bs w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[86%]">
                    <Row className="items-center justify-between w-[66%]">
                      <Image
                        src="img_bitcoinic2.png"
                        className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius50 w-[50px]"
                        alt="bitcoinic2"
                      />
                      <Text className="font-semibold lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`BTC`}</Text>
                      <Button className="bg-black_900 border-bw font-semibold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] lg:py-[3px] py-[4.86px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius4 text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-white_A700 w-[32%]">{`BITCOIN`}</Button>
                    </Row>
                    <Image
                      src="img_seemoreic.svg"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] my-[1px] object-contain lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      alt="seemoreic"
                    />
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] opacity-op5 w-[87%]" />
                  <Row className="font-roboto items-center justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] w-[85%]">
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`$56,623.54`}</Text>
                      <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`1.41%`}</Text>
                    </Column>
                    <Image
                      src="img_chartstate1.png"
                      className="lg:h-[42px] xl:h-[48px] h-[53.27px] 2xl:h-[54px] 3xl:h-[64px] mb-[6.37px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[6.36px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[40%]"
                      alt="chartstate1"
                    />
                  </Row>
                </Column>
                <Column className="bg-black_900 border border-black_900 border-solid items-center justify-start lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius18 shadow-bs w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[86%]">
                    <Row className="items-center justify-between w-[71%]">
                      <Image
                        src="img_bitcoinic2_1.png"
                        className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius50 w-[50px]"
                        alt="bitcoinic2"
                      />
                      <Text className="font-semibold lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`ETH`}</Text>
                      <Button className="bg-white_A700 border-bw font-semibold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] lg:py-[3px] py-[4.86px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius4 text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-white_A700 w-[37%]">{`ETHEREUM`}</Button>
                    </Row>
                    <Image
                      src="img_seemoreic_1.svg"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] my-[1px] object-contain lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      alt="seemoreic"
                    />
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] opacity-op5 w-[87%]" />
                  <Row className="font-roboto items-center justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] w-[85%]">
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`$4,267.90`}</Text>
                      <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`2.22%`}</Text>
                    </Column>
                    <Image
                      src="img_chartstate1_1.png"
                      className="lg:h-[42px] xl:h-[48px] h-[53.27px] 2xl:h-[54px] 3xl:h-[64px] mb-[6.37px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[6.36px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[40%]"
                      alt="chartstate1"
                    />
                  </Row>
                </Column>
                <Column className="bg-black_900 border border-solid border-white_A700 items-center justify-start lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius18 shadow-bs w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[86%]">
                    <Row className="items-center justify-between w-[69%]">
                      <Image
                        src="img_bitcoinic2_2.png"
                        className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius50 w-[50px]"
                        alt="bitcoinic2"
                      />
                      <Text className="font-semibold lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`BNB`}</Text>
                      <Button className="bg-gray_400_4c border-bw font-semibold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] lg:py-[3px] py-[4.86px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius4 text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-white_A700 w-[33%]">{`BINANCE`}</Button>
                    </Row>
                    <Image
                      src="img_seemoreic_2.svg"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] my-[1px] object-contain lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      alt="seemoreic"
                    />
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] opacity-op5 w-[87%]" />
                  <Row className="font-roboto items-center justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] w-[85%]">
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`$587.74`}</Text>
                      <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_600 text-left">{`0.82%`}</Text>
                    </Column>
                    <Image
                      src="img_chartstate1_2.png"
                      className="lg:h-[42px] xl:h-[48px] h-[53.27px] 2xl:h-[54px] 3xl:h-[64px] mb-[6.37px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[6.36px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[40%]"
                      alt="chartstate1"
                    />
                  </Row>
                </Column>
                <Column className="bg-black_900 border border-solid border-white_A700 items-center justify-start lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius18 shadow-bs w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[86%]">
                    <Row className="items-center justify-between w-[70%]">
                      <Image
                        src="img_bitcoinic2_3.png"
                        className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius50 w-[50px]"
                        alt="bitcoinic2"
                      />
                      <Text className="font-semibold lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`USDT`}</Text>
                      <Button className="bg-gray_400_4c border-bw font-semibold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] lg:py-[3px] py-[4.86px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius4 text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-white_A700 w-[29%]">{`TETHER`}</Button>
                    </Row>
                    <Image
                      src="img_seemoreic_2.svg"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] my-[1px] object-contain lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      alt="seemoreic"
                    />
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] opacity-op5 w-[87%]" />
                  <Row className="font-roboto items-center justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] w-[85%]">
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`$0.9998`}</Text>
                      <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`0,03%`}</Text>
                    </Column>
                    <Image
                      src="img_chartstate1_3.png"
                      className="lg:h-[42px] xl:h-[48px] h-[53.27px] 2xl:h-[54px] 3xl:h-[64px] mb-[6.37px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[6.36px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[40%]"
                      alt="chartstate1"
                    />
                  </Row>
                </Column>
                <Column className="bg-black_900 border border-solid border-white_A700 items-center justify-start lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius18 shadow-bs w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[86%]">
                    <Row className="items-center justify-between w-[66%]">
                      <Image
                        src="img_bitcoinic2.png"
                        className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius50 w-[50px]"
                        alt="bitcoinic2"
                      />
                      <Text className="font-semibold lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`BTC`}</Text>
                      <Button className="bg-black_900 border-bw font-semibold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] lg:py-[3px] py-[4.86px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius4 text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-white_A700 w-[32%]">{`BITCOIN`}</Button>
                    </Row>
                    <Image
                      src="img_seemoreic.svg"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] my-[1px] object-contain lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      alt="seemoreic"
                    />
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] opacity-op5 w-[87%]" />
                  <Row className="font-roboto items-center justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] w-[85%]">
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`$56,623.54`}</Text>
                      <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`1.41%`}</Text>
                    </Column>
                    <Image
                      src="img_chartstate1.png"
                      className="lg:h-[42px] xl:h-[48px] h-[53.27px] 2xl:h-[54px] 3xl:h-[64px] mb-[6.37px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[6.36px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[40%]"
                      alt="chartstate1"
                    />
                  </Row>
                </Column>
                <Column className="bg-black_900 border border-black_900 border-solid items-center justify-start lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius18 shadow-bs w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[86%]">
                    <Row className="items-center justify-between w-[71%]">
                      <Image
                        src="img_bitcoinic2_1.png"
                        className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius50 w-[50px]"
                        alt="bitcoinic2"
                      />
                      <Text className="font-semibold lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`ETH`}</Text>
                      <Button className="bg-white_A700 border-bw font-semibold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] lg:py-[3px] py-[4.86px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius4 text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-white_A700 w-[37%]">{`ETHEREUM`}</Button>
                    </Row>
                    <Image
                      src="img_seemoreic_1.svg"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] my-[1px] object-contain lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      alt="seemoreic"
                    />
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] opacity-op5 w-[87%]" />
                  <Row className="font-roboto items-center justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] w-[85%]">
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`$4,267.90`}</Text>
                      <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`2.22%`}</Text>
                    </Column>
                    <Image
                      src="img_chartstate1_1.png"
                      className="lg:h-[42px] xl:h-[48px] h-[53.27px] 2xl:h-[54px] 3xl:h-[64px] mb-[6.37px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[6.36px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[40%]"
                      alt="chartstate1"
                    />
                  </Row>
                </Column>
                <Column className="bg-black_900 border border-solid border-white_A700 items-center justify-start lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius18 shadow-bs w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[86%]">
                    <Row className="items-center justify-between w-[69%]">
                      <Image
                        src="img_bitcoinic2_2.png"
                        className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius50 w-[50px]"
                        alt="bitcoinic2"
                      />
                      <Text className="font-semibold lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`BNB`}</Text>
                      <Button className="bg-gray_400_4c border-bw font-semibold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] lg:py-[3px] py-[4.86px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius4 text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-white_A700 w-[33%]">{`BINANCE`}</Button>
                    </Row>
                    <Image
                      src="img_seemoreic_2.svg"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] my-[1px] object-contain lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      alt="seemoreic"
                    />
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] opacity-op5 w-[87%]" />
                  <Row className="font-roboto items-center justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] w-[85%]">
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`$587.74`}</Text>
                      <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-gray_600 text-left">{`0.82%`}</Text>
                    </Column>
                    <Image
                      src="img_chartstate1_2.png"
                      className="lg:h-[42px] xl:h-[48px] h-[53.27px] 2xl:h-[54px] 3xl:h-[64px] mb-[6.37px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[6.36px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[40%]"
                      alt="chartstate1"
                    />
                  </Row>
                </Column>
                <Column className="bg-black_900 border border-solid border-white_A700 items-center justify-start lg:py-[14px] xl:py-[16px] py-[18px] 3xl:py-[21px] rounded-radius18 shadow-bs w-[100%]">
                  <Row className="items-center justify-between mx-[auto] w-[86%]">
                    <Row className="items-center justify-between w-[70%]">
                      <Image
                        src="img_bitcoinic2_3.png"
                        className="lg:h-[39px] xl:h-[45px] h-[50px] 2xl:h-[51px] 3xl:h-[61px] object-contain rounded-radius50 w-[50px]"
                        alt="bitcoinic2"
                      />
                      <Text className="font-semibold lg:my-[11px] xl:my-[12px] my-[14.5px] 2xl:my-[14px] 3xl:my-[17px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`USDT`}</Text>
                      <Button className="bg-gray_400_4c border-bw font-semibold lg:my-[11px] xl:my-[13px] my-[15px] 3xl:my-[18px] lg:px-[4px] xl:px-[5px] px-[6px] 3xl:px-[7px] lg:py-[3px] py-[4.86px] 2xl:py-[4px] xl:py-[4px] 3xl:py-[5px] rounded-radius4 text-center text-fs10 3xl:text-fs12 lg:text-fs7 xl:text-fs8 text-white_A700 w-[29%]">{`TETHER`}</Button>
                    </Row>
                    <Image
                      src="img_seemoreic_2.svg"
                      className="lg:h-[38px] xl:h-[43px] h-[48px] 2xl:h-[49px] 3xl:h-[58px] my-[1px] object-contain lg:w-[37px] xl:w-[42px] w-[48px] 3xl:w-[57px]"
                      alt="seemoreic"
                    />
                  </Row>
                  <Line className="bg-white_A700 h-[1px] lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] opacity-op5 w-[87%]" />
                  <Row className="font-roboto items-center justify-start lg:mt-[13px] xl:mt-[15px] mt-[17px] 3xl:mt-[20px] mx-[auto] w-[85%]">
                    <Column className="w-[56%]">
                      <Text className="font-medium lg:text-fs18 xl:text-fs21 text-fs24 3xl:text-fs28 text-left text-white_A700">{`$0.9998`}</Text>
                      <Text className="font-medium 3xl:mt-[10px] lg:mt-[7px] xl:mt-[8px] mt-[9px] lg:text-fs14 xl:text-fs16 text-fs18 3xl:text-fs21 text-left text-white_A700">{`0,03%`}</Text>
                    </Column>
                    <Image
                      src="img_chartstate1_3.png"
                      className="lg:h-[42px] xl:h-[48px] h-[53.27px] 2xl:h-[54px] 3xl:h-[64px] mb-[6.37px] xl:ml-[10px] ml-[12px] 3xl:ml-[14px] lg:ml-[9px] mt-[6.36px] lg:my-[4px] xl:my-[5px] 2xl:my-[6px] 3xl:my-[7px] object-contain w-[40%]"
                      alt="chartstate1"
                    />
                  </Row>
                </Column>
              </Grid>
            </Column>
            <Stack className="font-montserrat lg:h-[294px] xl:h-[336px] h-[377px] 2xl:h-[378px] 3xl:h-[453px] 3xl:mt-[114px] lg:mt-[73px] xl:mt-[84px] mt-[95px] lg:mx-[63px] xl:mx-[72px] mx-[82px] 3xl:mx-[98px] w-[78%]">
              <div className="absolute backdrop-opacity-[0.5] bg-green_A200_af blur-[139.00px] lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] right-[1%] rounded-radius50 top-[0] lg:w-[192px] xl:w-[220px] w-[248px] 3xl:w-[297px]"></div>
              <div className="absolute backdrop-opacity-[0.5] bg-green_A200_af blur-[139.00px] bottom-[0] lg:h-[193px] xl:h-[221px] h-[248px] 2xl:h-[249px] 3xl:h-[298px] left-[0] rounded-radius50 lg:w-[192px] xl:w-[220px] w-[248px] 3xl:w-[297px]"></div>
              <Column className="absolute bg-black_900 bottom-[12%] items-start justify-start right-[0] rounded-radius10 shadow-bs1 w-[90%]">
                <Text className="font-bold lg:mt-[25px] xl:mt-[29px] mt-[33px] 3xl:mt-[39px] lg:mx-[154px] xl:mx-[177px] mx-[199px] 3xl:mx-[238px] text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-white_A700">{`Want to be aware of all update`}</Text>
                <Column className="lg:mb-[52px] xl:mb-[59px] mb-[67px] 3xl:mb-[80px] lg:mt-[42px] xl:mt-[48px] mt-[55px] 3xl:mt-[66px] w-[100%]">
                  <Row className="items-center justify-start w-[100%]">
                    <div className="bg-white_A700 border-bw3 border-green_A200 border-solid lg:h-[48px] xl:h-[55px] h-[61px] 2xl:h-[62px] 3xl:h-[74px] lg:ml-[50px] xl:ml-[57px] ml-[65px] 3xl:ml-[78px] rounded-radius10 w-[68%]"></div>
                    <Button className="bg-green_A200 border-bw font-bold lg:mb-[5px] xl:mb-[6px] mb-[7px] 3xl:mb-[8px] lg:ml-[14px] xl:ml-[16px] ml-[19px] 3xl:ml-[22px] lg:mr-[21px] xl:mr-[24px] mr-[28px] 3xl:mr-[33px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:px-[27px] xl:px-[31px] px-[35px] 3xl:px-[42px] lg:py-[12px] xl:py-[14px] py-[16.375px] 2xl:py-[16px] 3xl:py-[19px] rounded-radius20 text-black_900 text-center lg:text-fs12 xl:text-fs14 text-fs16 3xl:text-fs19 w-[21%]">{`Subscribe`}</Button>
                  </Row>
                </Column>
              </Column>
            </Stack>
            <Column className="font-montserrat items-center lg:mt-[35px] xl:mt-[40px] mt-[46px] 3xl:mt-[55px] w-[100%]">
              <footer className="w-[100%]">
                <Column className="bg-black_900 items-center justify-center shadow-bs2 w-[100%]">
                  <Row className="items-center justify-start 3xl:mt-[115px] lg:mt-[74px] xl:mt-[85px] mt-[96px] mx-[auto] w-[87%]">
                    <Image
                      src="img_group2.svg"
                      className="lg:h-[46px] xl:h-[52px] h-[58px] 2xl:h-[59px] 3xl:h-[70px] object-contain lg:w-[45px] xl:w-[51px] w-[58px] 3xl:w-[69px]"
                      alt="Group2"
                    />
                    <Text className="font-bold lg:ml-[10px] xl:ml-[12px] ml-[14px] 3xl:ml-[16px] my-[10px] 3xl:my-[12px] lg:my-[7px] xl:my-[8px] lg:text-fs24 xl:text-fs28 text-fs32 3xl:text-fs38 text-left text-white_A700">{`Circlechain`}</Text>
                    <Text className="font-bold 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[238px] xl:ml-[273px] ml-[307px] 3xl:ml-[368px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-white_A700">{`Quick Link`}</Text>
                    <Text className="font-bold 3xl:mb-[10px] lg:mb-[7px] xl:mb-[8px] mb-[9px] lg:ml-[201px] xl:ml-[230px] ml-[259px] 3xl:ml-[310px] lg:mt-[4px] xl:mt-[5px] mt-[6px] 3xl:mt-[7px] text-center lg:text-fs28 xl:text-fs32 text-fs36 3xl:text-fs43 text-white_A700">{`Social Media`}</Text>
                  </Row>
                  <Row className="items-start justify-between lg:mb-[48px] xl:mb-[55px] mb-[62px] 3xl:mb-[74px] lg:mt-[19px] xl:mt-[22px] mt-[25px] 3xl:mt-[30px] w-[100%]">
                    <Text className="font-bold leading-lh xl:mb-[100px] mb-[113px] 3xl:mb-[135px] lg:mb-[87px] lg:ml-[63px] xl:ml-[72px] ml-[82px] 3xl:ml-[98px] lg:mt-[3px] xl:mt-[4px] mt-[5px] 3xl:mt-[6px] lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-left text-white_A700 w-[24%]">{`Amet minim mollit non deserunt ullamco est aliqua dolor do amet sint. Velit officia consequatduis enim velit mollit. Exercitation veniamconsequat sunt nostrud amet.`}</Text>
                    <Column className="items-start justify-start lg:mr-[60px] xl:mr-[69px] mr-[78px] 3xl:mr-[93px] w-[50%]">
                      <Column className="w-[100%]">
                        <Row className="items-start justify-between w-[100%]">
                          <Text className="font-medium lg:mb-[15px] xl:mb-[17px] mb-[20px] 3xl:mb-[24px] text-center lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-white_A700">{`How it work`}</Text>
                          <Image
                            src="img_socialmedia_1.svg"
                            className="lg:h-[32px] xl:h-[37px] h-[41px] 2xl:h-[42px] 3xl:h-[50px] xl:mt-[2px] lg:mt-[2px] mt-[3px] object-contain w-[42%]"
                            alt="SocialMedia"
                          />
                        </Row>
                      </Column>
                      <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[10px] xl:mt-[12px] mt-[14px] 3xl:mt-[16px] text-center lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-white_A700">{`Blog`}</Text>
                      <Text className="font-medium mr-[10px] 3xl:mr-[12px] lg:mr-[7px] xl:mr-[8px] lg:mt-[26px] xl:mt-[30px] mt-[34px] 3xl:mt-[40px] text-center lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-white_A700">{`Support`}</Text>
                      <Column className="items-end 3xl:mt-[117px] lg:mt-[76px] xl:mt-[87px] mt-[98px] w-[100%]">
                        <Text className="font-medium lg:ml-[397px] xl:ml-[454px] ml-[511px] 3xl:ml-[613px] lg:mr-[6px] xl:mr-[7px] mr-[8px] 3xl:mr-[9px] text-center lg:text-fs15 xl:text-fs17 text-fs20 3xl:text-fs24 text-white_A700">{`(c) 2022 Circlechain`}</Text>
                      </Column>
                    </Column>
                  </Row>
                </Column>
              </footer>
            </Column>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default Home1Page;
