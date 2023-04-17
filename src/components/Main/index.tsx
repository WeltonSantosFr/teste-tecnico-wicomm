import {
  BsChatRightDotsFill,
  BsArrowLeftShort,
  BsArrowRightShort,
} from "react-icons/bs";
import { BiStar, BiCart } from "react-icons/bi";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

const Main = () => {
  return (
    <main className="flex flex-col gap-5 overflow-x-hidden">
      <div className="bg-[url('/src/assets/unsplash_FP7cfYPPUKM.png')] bg-no-repeat bg-center bg-cover w-full h-[550px] flex flex-col justify-center items-center">
        <div className="flex flex-col justify-evenly w-[80%] h-[70%]">
          <h2 className="font-roboto font-bold text-[56px] text-orange1 leading-[65px] italic">
            AJUDANDO VOCÊ A TER
            <br />
            <span className="text-white1">MAIS PERFORMACE</span>
          </h2>
          <p className="font-barlow font-normal text[16px] leading-[20px] text-white1 w-[350px] h-min">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna
          </p>
          <button className="font-barlow font-bold text-base leading-5 text-center text-black1 bg-orange1 h-[50px] w-[120px] rounded-[4px] hover:bg-orange2">
            CONFIRA
          </button>
        </div>
        <div className="h-[6px] flex justify-between w-[140px] items-end -mb-10 mt-10">
          <div className="h-[6px] w-[40px] bg-orange1"></div>
          <div className="h-[2px] w-[40px] bg-grey2"></div>
          <div className="h-[2px] w-[40px] bg-grey2"></div>
        </div>
      </div>

      <div className="container mx-auto w-full">
        <div className="flex items-center justify-center w-[90%] h-full py-24 sm:py-8 px-4 mx-auto">
          <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            isIntrinsicHeight={true}
            totalSlides={1}
            visibleSlides={1}
            step={2}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 -left-[50px] ml-8 focus:outline-none cursor-pointer"
                id="prev"
              >
                <BsArrowLeftShort className="bg-grey2 w-[32px] h-[32px] rounded-[4px] hover:bg-orange2">
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </BsArrowLeftShort>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-[20px] md:gap-6 gap-14 items-center justify-center transition ease-out duration-700"
                  >
                    <Slide index={0}>
                      <div className="flex flex-col items-center">
                        <div className="bg-background rounded-full w-[180px] h-[180px] flex items-center justify-center relative hover:bg-orange1 transition-colors duration-500 hover:border-[5px] border-[rgba(255,255,255,0.2)]">
                          <img
                            src="src/assets/image 2.png"
                            alt="protein bag"
                            className="object-center w-[110px] relative hover:grow duration-[400ms]"
                          />
                        </div>
                      </div>
                      <p className="text-dark1 font-barlow font-bold text-[12px] leading-[16px] text-center mt-[16px]">
                        PROTEÍNAS
                      </p>
                    </Slide>
                    <Slide index={1}>
                      <div className="flex flex-col items-center">
                        <div className="bg-background rounded-full w-[180px] h-[180px] flex items-center justify-center relative hover:bg-orange1 transition-colors duration-500 hover:border-[5px] border-[rgba(255,255,255,0.2)]">
                          <img
                            src="src\assets\image 2.png"
                            alt="protein bag"
                            className="object-center w-[110px] relative hover:grow duration-[400ms]"
                          />
                        </div>
                        <p className="text-dark1 font-barlow font-bold text-[12px] leading-[16px] text-center mt-[16px]">
                          HIPERCALÓRICOS
                        </p>
                      </div>
                    </Slide>

                    <Slide index={2}>
                      <div className="flex flex-col items-center">
                        <div className="bg-background rounded-full w-[180px] h-[180px] flex items-center justify-center relative hover:bg-orange1 transition-colors duration-500 hover:border-[5px] border-[rgba(255,255,255,0.2)]">
                          <img
                            src="src\assets\image 2.png"
                            alt="protein bag"
                            className="object-center w-[110px] relative hover:grow duration-[400ms]"
                          />
                        </div>
                        <p className="text-dark1 font-barlow font-bold text-[12px] leading-[16px] text-center mt-[16px]">
                          CREATINA
                        </p>
                      </div>
                    </Slide>
                    <Slide index={3}>
                      <div className="flex flex-col items-center">
                        <div className="bg-background rounded-full w-[180px] h-[180px] flex items-center justify-center relative hover:bg-orange1 transition-colors duration-500 hover:border-[5px] border-[rgba(255,255,255,0.2)]">
                          <img
                            src="src\assets\image 2.png"
                            alt="protein bag"
                            className="object-center w-[110px] relative hover:grow duration-[400ms]"
                          />
                        </div>
                        <p className="text-dark1 font-barlow font-bold text-[12px] leading-[16px] text-center mt-[16px]">
                          PACKS
                        </p>
                      </div>
                    </Slide>
                    <Slide index={4}>
                      <div className="flex flex-col items-center">
                        <div className="bg-background rounded-full w-[180px] h-[180px] flex items-center justify-center relative hover:bg-orange1 transition-colors duration-500 hover:border-[5px] border-[rgba(255,255,255,0.2)]">
                          <img
                            src="src\assets\image 2.png"
                            alt="protein bag"
                            className="object-center w-[110px] relative hover:grow duration-[400ms]"
                          />
                        </div>
                        <p className="text-dark1 font-barlow font-bold text-[12px] leading-[16px] text-center mt-[16px]">
                          AMINOÁCIDOS
                        </p>
                      </div>
                    </Slide>
                    <Slide index={5}>
                      <div className="flex flex-col items-center">
                        <div className="bg-background rounded-full w-[180px] h-[180px] flex items-center justify-center relative hover:bg-orange1 transition-colors duration-500 hover:border-[5px] border-[rgba(255,255,255,0.2)]">
                          <img
                            src="src\assets\image 2.png"
                            alt="protein bag"
                            className="object-center w-[110px] relative hover:grow duration-[400ms]"
                          />
                        </div>
                        <p className="text-dark1 font-barlow font-bold text-[12px] leading-[16px] text-center mt-[16px]">
                          SAÚDE
                        </p>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 -right-[50px] mr-8 focus:outline-none"
                id="next"
              >
                <BsArrowRightShort className="bg-grey2 w-[32px] h-[32px] rounded-[4px] hover:bg-orange2">
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </BsArrowRightShort>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>

      <div className="container mx-auto w-full z-10">
        <div className="flex items-center justify-center w-[90%] h-full py-24 sm:py-8 px-4 mx-auto">
          <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            isIntrinsicHeight={true}
            totalSlides={1}
            visibleSlides={1}
            step={2}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 -left-[50px] ml-8 focus:outline-none cursor-pointer"
                id="prev"
              >
                <BsArrowLeftShort className="bg-grey2 w-[32px] h-[32px] rounded-[4px] hover:bg-orange2">
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </BsArrowLeftShort>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <p className="font-roboto font-bold italic text-[32px] leading-[38px] text-center mb-6">
                  LANÇAMENTOS
                </p>
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-[20px] md:gap-6 gap-14 items-center justify-center transition ease-out duration-700"
                  >
                    <Slide index={0} className="w-[280px] h-[350px] relative">
                      <div className="border-[1px] border-background rounded-[4px] w-[280px] h-[350px] flex flex-col justify-evenly items-center">
                        <div className="flex flex-row w-full justify-center">
                          <img
                            src="src/assets/image 1.png"
                            alt="suplemento"
                            className="w-[165px] h-[165px]"
                          />
                          <div className="flex flex-col gap-[20px] ">
                            <BiStar className="text-grey1 text-[20px] hover:text-black1 cursor-pointer" />
                            <BiCart className="text-grey1 text-[20px] hover:text-black1 cursor-pointer" />
                          </div>
                        </div>
                        <div className="self-start ml-[24px]">
                          <p className="font-barlow font-semibold text-[12px] leading-[16px] text-black1">
                            WHEY ZERO &#40;COM LACTASE&#41; <br /> BLACK SKULL -
                            900G
                          </p>
                          <p className="font-barlow font-bold text-[22px] leading-[26px] text-orange1">
                            R&#36; 349&#44;90 <br />{" "}
                            <span className="font-normal text-[14px] leading-[16px] text-dark3">
                              ou 12x de R&#36; 29&#44;16
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition ease-linear duration-500 hover:flex flex-col justify-end items-center">
                        <div className="bg-background w-full h-[50%] flex flex-col items center justify-center">
                          <p className="font-barlow font-bold text-[14px] leading-[16px] text-center text-dark1">
                            SABOR
                          </p>
                          <div className="flex flex-wrap w-[60%] self-center gap-[5px] mt-[10px]">
                            <button className="w-[80px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              TOFFEE
                            </button>
                            <button className="w-[80px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              CHOCOLATE
                            </button>
                            <button className="w-[80px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              MORANGO
                            </button>
                            <button className="w-[80px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              BAUNILHA
                            </button>
                          </div>
                        </div>
                        <button className="w-full h-[50px] bg-orange1 rounded-[4px] font-barlow font-bold text-[16px] leading-[20px] text-dark1 hover:bg-orange2">
                          COMPRAR
                        </button>
                      </div>
                    </Slide>
                    <Slide index={1} className="w-[280px] h-[350px] relative">
                      <div className="border-[1px] border-background rounded-[4px] w-[280px] h-[350px] flex flex-col justify-evenly items-center">
                        <div className="flex flex-row w-full justify-center">
                          <img
                            src="src\assets\image 1.png"
                            alt="suplemento"
                            className="w-[165px] h-[165px]"
                          />
                          <div className="flex flex-col gap-[20px] ">
                            <BiStar className="text-grey1 text-[20px] hover:text-black1 cursor-pointer" />
                            <BiCart className="text-grey1 text-[20px] hover:text-black1 cursor-pointer" />
                          </div>
                        </div>
                        <div className="self-start ml-[24px]">
                          <p className="font-barlow font-semibold text-[12px] leading-[16px] text-black1">
                            WHEY ZERO &#40;COM LACTASE&#41; <br /> BLACK SKULL -
                            900G
                          </p>
                          <p className="font-barlow font-bold text-[22px] leading-[26px] text-orange1">
                            R&#36; 349&#44;90 <br />{" "}
                            <span className="font-normal text-[14px] leading-[16px] text-dark3">
                              ou 12x de R&#36; 29&#44;16
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition ease-linear duration-500 hover:flex flex-col justify-end items-center">
                        <div className="bg-background w-full h-[50%] flex flex-col items center justify-center">
                          <p className="font-barlow font-bold text-[14px] leading-[16px] text-center text-dark1">
                            SABOR
                          </p>
                          <div className="flex flex-wrap w-[60%] self-center gap-[5px] mt-[10px]">
                            <button className="w-[80px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              TOFFEE
                            </button>
                            <button className="w-[80px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              CHOCOLATE
                            </button>
                            <button className="w-[80px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              MORANGO
                            </button>
                            <button className="w-[80px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              BAUNILHA
                            </button>
                          </div>
                        </div>
                        <button className="w-full h-[50px] bg-orange1 rounded-[4px] font-barlow font-bold text-[16px] leading-[20px] text-dark1 hover:bg-orange2">
                          COMPRAR
                        </button>
                      </div>
                    </Slide>
                    <Slide index={2} className="w-[280px] h-[350px] relative">
                      <div className="border-[1px] border-background rounded-[4px] w-[280px] h-[350px] flex flex-col justify-evenly items-center">
                        <div className="flex flex-row w-full justify-center">
                          <img
                            src="src\assets\image 1.png"
                            alt="suplemento"
                            className="w-[165px] h-[165px]"
                          />
                          <div className="flex flex-col gap-[20px] ">
                            <BiStar className="text-grey1 text-[20px] hover:text-black1 cursor-pointer" />
                            <BiCart className="text-grey1 text-[20px] hover:text-black1 cursor-pointer" />
                          </div>
                        </div>
                        <div className="self-start ml-[24px]">
                          <p className="font-barlow font-semibold text-[12px] leading-[16px] text-black1">
                            WHEY ZERO &#40;COM LACTASE&#41; <br /> BLACK SKULL -
                            900G
                          </p>
                          <p className="font-barlow font-bold text-[22px] leading-[26px] text-orange1">
                            R&#36; 349&#44;90 <br />{" "}
                            <span className="font-normal text-[14px] leading-[16px] text-dark3">
                              ou 12x de R&#36; 29&#44;16
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition ease-linear duration-500 hover:flex flex-col justify-end items-center">
                        <div className="bg-background w-full h-[50%] flex flex-col items center justify-center gap-[10px]">
                          <p className="font-barlow font-bold text-[14px] leading-[16px] text-center text-dark1">
                            TAMANHO
                          </p>
                          <div className="flex flex-wrap w-[60%] self-center gap-[5px] mt-[10px]">
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              P
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              M
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              G
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              GG
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              EXGG2
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              EXGG2
                            </button>
                          </div>
                          <div className="flex justify-center gap-[10px]">
                            <button className="w-[32px] h-[32px] rounded-full bg-[#CD3232]"></button>
                            <button className="w-[32px] h-[32px] rounded-full bg-[#596DB3]"></button>
                            <button className="w-[32px] h-[32px] rounded-full bg-[#66CA64]"></button>
                            <button className="w-[32px] h-[32px] rounded-full bg-[#ECBD17]"></button>
                          </div>
                        </div>
                        <button className="w-full h-[50px] bg-orange1 rounded-[4px] font-barlow font-bold text-[16px] leading-[20px] text-dark1 hover:bg-orange2">
                          COMPRAR
                        </button>
                      </div>
                    </Slide>
                    <Slide index={3} className="w-[280px] h-[350px] relative">
                      <div className="border-[1px] border-background rounded-[4px] w-[280px] h-[350px] flex flex-col justify-evenly items-center">
                        <div className="flex flex-row w-full justify-center">
                          <img
                            src="src\assets\image 1.png"
                            alt="suplemento"
                            className="w-[165px] h-[165px]"
                          />
                          <div className="flex flex-col gap-[20px]">
                            <BiStar className="text-grey1 text-[20px] hover:text-black1 cursor-pointer" />
                            <BiCart className="text-grey1 text-[20px] hover:text-black1 cursor-pointer" />
                          </div>
                        </div>
                        <div className="self-start ml-[24px]">
                          <p className="font-barlow font-semibold text-[12px] leading-[16px] text-black1">
                            WHEY ZERO &#40;COM LACTASE&#41; <br /> BLACK SKULL -
                            900G
                          </p>
                          <p className="font-barlow font-bold text-[22px] leading-[26px] text-orange1">
                            R&#36; 349&#44;90 <br />{" "}
                            <span className="font-normal text-[14px] leading-[16px] text-dark3">
                              ou 12x de R&#36; 29&#44;16
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition ease-linear duration-500 hover:flex flex-col justify-end items-center">
                        <div className="bg-background w-full h-[50%] flex flex-col items center justify-center gap-[10px]">
                          <p className="font-barlow font-bold text-[14px] leading-[16px] text-center text-dark1">
                            TAMANHO
                          </p>
                          <div className="flex flex-wrap w-[60%] self-center gap-[5px] mt-[10px]">
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              P
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              M
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              G
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              GG
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              EXGG2
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              EXGG2
                            </button>
                          </div>
                          <div className="flex justify-center gap-[10px]">
                            <button className="w-[32px] h-[32px] rounded-full bg-[#CD3232]"></button>
                            <button className="w-[32px] h-[32px] rounded-full bg-[#596DB3]"></button>
                            <button className="w-[32px] h-[32px] rounded-full bg-[#66CA64]"></button>
                            <button className="w-[32px] h-[32px] rounded-full bg-[#ECBD17]"></button>
                          </div>
                        </div>
                        <button className="w-full h-[50px] bg-orange1 rounded-[4px] font-barlow font-bold text-[16px] leading-[20px] text-dark1 hover:bg-orange2">
                          COMPRAR
                        </button>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 -right-[50px] mr-8 focus:outline-none"
                id="next"
              >
                <BsArrowRightShort className="bg-grey2 w-[32px] h-[32px] rounded-[4px] hover:bg-orange2">
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </BsArrowRightShort>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
      <div className="h-[6px] flex justify-between w-[140px] items-end   self-center">
        <div className="h-[6px] w-[40px] bg-orange1"></div>
        <div className="h-[2px] w-[40px] bg-grey2"></div>
        <div className="h-[2px] w-[40px] bg-grey2"></div>
      </div>
      <div className="bg-[url('/src/assets/background.png')] bg-no-repeat bg-center bg-cover w-full h-[460px] flex flex-col justify-center items-center bg-black1 relative">
        <img
          src="src\assets\logo.png"
          alt="logo"
          className="w-[420px] h-[420px] origin-top-left rotate-[15deg] invert -top-[200px] -right-[40px] z-0 opacity-10 absolute"
        />
        <div className="flex w-[63%] -mb-[60px] mt-[40px]">
          <p className="font-roboto font-bold italic text-[40px] leading-[45px] text-white1">
            CONHEÇA A TROPA <span className="text-orange1">BLACK SKULL</span>
          </p>
        </div>
        <div className="container mx-auto min-w-full min-h-full z-20">
          <div className="flex items-center justify-center w-[90%] h-full py-24 sm:py-8 px-4 mx-auto">
            <CarouselProvider
              className="lg:block hidden"
              naturalSlideWidth={100}
              naturalSlideHeight={100}
              isIntrinsicHeight={true}
              totalSlides={1}
              visibleSlides={1}
              step={2}
              infinite={true}
            >
              <div className="w-full relative flex items-center justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute z-30 -left-[100px] ml-8 focus:outline-none cursor-pointer"
                  id="prev"
                >
                  <BsArrowLeftShort className="bg-grey2 w-[32px] h-[32px] rounded-[4px] hover:bg-orange2">
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </BsArrowLeftShort>
                </ButtonBack>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full flex lg:gap-[20px] md:gap-6 gap-14 items-center justify-center transition ease-out duration-700"
                    >
                      <Slide index={0} className="w-[280px] h-[300px] relative">
                        <img src="src/assets/Rectangle 38.png" alt="member1" />
                        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition ease-linear duration-500 hover:flex flex-col justify-end items-center">
                          <div className="bg-[rgba(58,58,60,0.9)] w-full h-[35%] flex flex-col items center justify-evenly">
                            <p className="font-roboto font-bold italic text-[16px] leading-[20px] text-orange1 ml-[20px]">
                              CEDRIC MCMILLAN
                            </p>
                            <button className="flex items-center font-barlow font-bold text-[12px] leading-[15px] text-white1 ml-[20px]">
                              MAIS INFORMAÇÃO
                              <BsArrowRightShort className="bg-transparent w-[32px] h-[32px] rounded-[4px] text-white1" />
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={1} className="w-[280px] h-[300px] relative">
                        <img src="src\assets\Rectangle 39.png" alt="member2" />
                        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition ease-linear duration-500 hover:flex flex-col justify-end items-center">
                          <div className="bg-[rgba(58,58,60,0.9)] w-full h-[35%] flex flex-col items center justify-evenly">
                            <p className="font-roboto font-bold italic text-[16px] leading-[20px] text-orange1 ml-[20px]">
                              CEDRIC MCMILLAN
                            </p>
                            <button className="flex items-center font-barlow font-bold text-[12px] leading-[15px] text-white1 ml-[20px]">
                              MAIS INFORMAÇÃO
                              <BsArrowRightShort className="bg-transparent w-[32px] h-[32px] rounded-[4px] text-white1" />
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={2} className="w-[280px] h-[300px] relative">
                        <img src="src\assets\Rectangle 40.png" alt="member3" />
                        <div className="absolute inset-0 opacity-0 hover:opacity-100 transition ease-linear duration-500 hover:flex flex-col justify-end items-center">
                          <div className="bg-[rgba(58,58,60,0.9)] w-full h-[35%] flex flex-col items center justify-evenly">
                            <p className="font-roboto font-bold italic text-[16px] leading-[20px] text-orange1 ml-[20px]">
                              CEDRIC MCMILLAN
                            </p>
                            <button className="flex items-center font-barlow font-bold text-[12px] leading-[15px] text-white1 ml-[20px]">
                              MAIS INFORMAÇÃO
                              <BsArrowRightShort className="bg-transparent w-[32px] h-[32px] rounded-[4px] text-white1" />
                            </button>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </Slider>
                </div>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="absolute z-30 -right-[100px] mr-8 focus:outline-none"
                  id="next"
                >
                  <BsArrowRightShort className="bg-grey2 w-[32px] h-[32px] rounded-[4px] hover:bg-orange2">
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </BsArrowRightShort>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
        <button className="font-barlow font-bold text-[16px] leading-[20px] text-center bg-orange1 w-[140px] h-[50px] absolute -bottom-[20px] rounded-[4px] hover:bg-orange2">
          VER TODOS
        </button>
      </div>
      <div className="container mx-auto w-full z-10">
        <div className="flex items-center justify-center w-[90%] h-full py-24 sm:py-8 px-4 mx-auto">
          <CarouselProvider
            className="lg:block hidden"
            naturalSlideWidth={100}
            naturalSlideHeight={100}
            isIntrinsicHeight={true}
            totalSlides={1}
            visibleSlides={1}
            step={2}
            infinite={true}
          >
            <div className="w-full relative flex items-center justify-center">
              <ButtonBack
                role="button"
                aria-label="slide backward"
                className="absolute z-30 -left-[50px] ml-8 focus:outline-none cursor-pointer"
                id="prev"
              >
                <BsArrowLeftShort className="bg-grey2 w-[32px] h-[32px] rounded-[4px] hover:bg-orange2">
                  <path
                    d="M7 1L1 7L7 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </BsArrowLeftShort>
              </ButtonBack>
              <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                <p className="font-roboto font-bold italic text-[32px] leading-[38px] text-center mb-6">
                  PROMOÇÕES
                </p>
                <Slider>
                  <div
                    id="slider"
                    className="h-full flex lg:gap-[20px] md:gap-6 gap-14 items-center justify-center transition ease-out duration-700"
                  >
                    <Slide index={0} className="w-[280px] h-[350px] relative">
                      <div className="border-[1px] border-background rounded-[4px] w-[280px] h-[350px] flex flex-col justify-evenly items-center">
                        <div className="flex flex-row w-full justify-center">
                          <img
                            src="src\assets\image 1.png"
                            alt="suplemento"
                            className="w-[165px] h-[165px]"
                          />
                          <div className="flex flex-col gap-[20px] ">
                            <BiStar className="text-grey1 text-[20px] hover:text-black1 cursor-pointer" />
                            <BiCart className="text-grey1 text-[20px] hover:text-black1 cursor-pointer" />
                          </div>
                        </div>
                        <div className="self-start ml-[24px]">
                          <p className="font-barlow font-semibold text-[12px] leading-[16px] text-black1">
                            WHEY ZERO &#40;COM LACTASE&#41; <br /> BLACK SKULL -
                            900G
                          </p>
                          <p className="font-barlow font-bold text-[22px] leading-[26px] text-orange1">
                            R&#36; 349&#44;90 <br />{" "}
                            <span className="font-normal text-[14px] leading-[16px] text-dark3">
                              ou 12x de R&#36; 29&#44;16
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition ease-linear duration-500 hover:flex flex-col justify-end items-center">
                        <div className="bg-background w-full h-[50%] flex flex-col items center justify-center">
                          <p className="font-barlow font-bold text-[14px] leading-[16px] text-center text-dark1">
                            SABOR
                          </p>
                          <div className="flex flex-wrap w-[60%] self-center gap-[5px] mt-[10px]">
                            <button className="w-[80px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              TOFFEE
                            </button>
                            <button className="w-[80px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              CHOCOLATE
                            </button>
                            <button className="w-[80px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              MORANGO
                            </button>
                            <button className="w-[80px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              BAUNILHA
                            </button>
                          </div>
                        </div>
                        <button className="w-full h-[50px] bg-orange1 rounded-[4px] font-barlow font-bold text-[16px] leading-[20px] text-dark1 hover:bg-orange2">
                          COMPRAR
                        </button>
                      </div>
                    </Slide>
                    <Slide index={1} className="w-[280px] h-[350px] relative">
                      <div className="border-[1px] border-background rounded-[4px] w-[280px] h-[350px] flex flex-col justify-evenly items-center">
                        <div className="flex flex-row w-full justify-center">
                          <img
                            src="src\assets\image 1.png"
                            alt="suplemento"
                            className="w-[165px] h-[165px]"
                          />
                          <div className="flex flex-col gap-[20px] ">
                            <BiStar className="text-grey1 text-[20px] hover:text-black1 cursor-pointer" />
                            <BiCart className="text-grey1 text-[20px] hover:text-black1 cursor-pointer" />
                          </div>
                        </div>
                        <div className="self-start ml-[24px]">
                          <p className="font-barlow font-semibold text-[12px] leading-[16px] text-black1">
                            WHEY ZERO &#40;COM LACTASE&#41; <br /> BLACK SKULL -
                            900G
                          </p>
                          <p className="font-barlow font-bold text-[22px] leading-[26px] text-orange1">
                            R&#36; 349&#44;90 <br />{" "}
                            <span className="font-normal text-[14px] leading-[16px] text-dark3">
                              ou 12x de R&#36; 29&#44;16
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition ease-linear duration-500 hover:flex flex-col justify-end items-center">
                        <div className="bg-background w-full h-[50%] flex flex-col items center justify-center">
                          <p className="font-barlow font-bold text-[14px] leading-[16px] text-center text-dark1">
                            SABOR
                          </p>
                          <div className="flex flex-wrap w-[60%] self-center gap-[5px] mt-[10px]">
                            <button className="w-[80px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              TOFFEE
                            </button>
                            <button className="w-[80px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              CHOCOLATE
                            </button>
                            <button className="w-[80px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              MORANGO
                            </button>
                            <button className="w-[80px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              BAUNILHA
                            </button>
                          </div>
                        </div>
                        <button className="w-full h-[50px] bg-orange1 rounded-[4px] font-barlow font-bold text-[16px] leading-[20px] text-dark1 hover:bg-orange2">
                          COMPRAR
                        </button>
                      </div>
                    </Slide>
                    <Slide index={2} className="w-[280px] h-[350px] relative">
                      <div className="border-[1px] border-background rounded-[4px] w-[280px] h-[350px] flex flex-col justify-evenly items-center">
                        <div className="flex flex-row w-full justify-center">
                          <img
                            src="src\assets\image 1.png"
                            alt="suplemento"
                            className="w-[165px] h-[165px]"
                          />
                          <div className="flex flex-col gap-[20px] ">
                            <BiStar className="text-grey1 text-[20px] hover:text-black1 cursor-pointer" />
                            <BiCart className="text-grey1 text-[20px] hover:text-black1 cursor-pointer" />
                          </div>
                        </div>
                        <div className="self-start ml-[24px]">
                          <p className="font-barlow font-semibold text-[12px] leading-[16px] text-black1">
                            WHEY ZERO &#40;COM LACTASE&#41; <br /> BLACK SKULL -
                            900G
                          </p>
                          <p className="font-barlow font-bold text-[22px] leading-[26px] text-orange1">
                            R&#36; 349&#44;90 <br />{" "}
                            <span className="font-normal text-[14px] leading-[16px] text-dark3">
                              ou 12x de R&#36; 29&#44;16
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition ease-linear duration-500 hover:flex flex-col justify-end items-center">
                        <div className="bg-background w-full h-[50%] flex flex-col items center justify-center gap-[10px]">
                          <p className="font-barlow font-bold text-[14px] leading-[16px] text-center text-dark1">
                            TAMANHO
                          </p>
                          <div className="flex flex-wrap w-[60%] self-center gap-[5px] mt-[10px]">
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              P
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              M
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              G
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              GG
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              EXGG2
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              EXGG2
                            </button>
                          </div>
                          <div className="flex justify-center gap-[10px]">
                            <button className="w-[32px] h-[32px] rounded-full bg-[#CD3232]"></button>
                            <button className="w-[32px] h-[32px] rounded-full bg-[#596DB3]"></button>
                            <button className="w-[32px] h-[32px] rounded-full bg-[#66CA64]"></button>
                            <button className="w-[32px] h-[32px] rounded-full bg-[#ECBD17]"></button>
                          </div>
                        </div>
                        <button className="w-full h-[50px] bg-orange1 rounded-[4px] font-barlow font-bold text-[16px] leading-[20px] text-dark1 hover:bg-orange2">
                          COMPRAR
                        </button>
                      </div>
                    </Slide>
                    <Slide index={3} className="w-[280px] h-[350px] relative">
                      <div className="border-[1px] border-background rounded-[4px] w-[280px] h-[350px] flex flex-col justify-evenly items-center">
                        <div className="flex flex-row w-full justify-center">
                          <img
                            src="src\assets\image 1.png"
                            alt="suplemento"
                            className="w-[165px] h-[165px]"
                          />
                          <div className="flex flex-col gap-[20px]">
                            <BiStar className="text-grey1 text-[20px] hover:text-black1 cursor-pointer" />
                            <BiCart className="text-grey1 text-[20px] hover:text-black1 cursor-pointer" />
                          </div>
                        </div>
                        <div className="self-start ml-[24px]">
                          <p className="font-barlow font-semibold text-[12px] leading-[16px] text-black1">
                            WHEY ZERO &#40;COM LACTASE&#41; <br /> BLACK SKULL -
                            900G
                          </p>
                          <p className="font-barlow font-bold text-[22px] leading-[26px] text-orange1">
                            R&#36; 349&#44;90 <br />{" "}
                            <span className="font-normal text-[14px] leading-[16px] text-dark3">
                              ou 12x de R&#36; 29&#44;16
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="absolute inset-0 opacity-0 hover:opacity-100 transition ease-linear duration-500 hover:flex flex-col justify-end items-center">
                        <div className="bg-background w-full h-[50%] flex flex-col items center justify-center gap-[10px]">
                          <p className="font-barlow font-bold text-[14px] leading-[16px] text-center text-dark1">
                            TAMANHO
                          </p>
                          <div className="flex flex-wrap w-[60%] self-center gap-[5px] mt-[10px]">
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              P
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              M
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              G
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              GG
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              EXGG2
                            </button>
                            <button className="w-[50px] h-[32px] bg-gray1 border-[1px] border-grey1 rounded-[4px] font-barlow font-bold text-[10px] leading-[20px] text-center text-grey1 hover:border-dark1 hover:text-dark1">
                              EXGG2
                            </button>
                          </div>
                          <div className="flex justify-center gap-[10px]">
                            <button className="w-[32px] h-[32px] rounded-full bg-[#CD3232]"></button>
                            <button className="w-[32px] h-[32px] rounded-full bg-[#596DB3]"></button>
                            <button className="w-[32px] h-[32px] rounded-full bg-[#66CA64]"></button>
                            <button className="w-[32px] h-[32px] rounded-full bg-[#ECBD17]"></button>
                          </div>
                        </div>
                        <button className="w-full h-[50px] bg-orange1 rounded-[4px] font-barlow font-bold text-[16px] leading-[20px] text-dark1 hover:bg-orange2">
                          COMPRAR
                        </button>
                      </div>
                    </Slide>
                  </div>
                </Slider>
              </div>
              <ButtonNext
                role="button"
                aria-label="slide forward"
                className="absolute z-30 -right-[50px] mr-8 focus:outline-none"
                id="next"
              >
                <BsArrowRightShort className="bg-grey2 w-[32px] h-[32px] rounded-[4px] hover:bg-orange2">
                  <path
                    d="M1 1L7 7L1 13"
                    stroke="white"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </BsArrowRightShort>
              </ButtonNext>
            </div>
          </CarouselProvider>
        </div>
      </div>
      <div className="h-[6px] flex justify-between w-[140px] items-end   self-center">
        <div className="h-[6px] w-[40px] bg-orange1"></div>
        <div className="h-[2px] w-[40px] bg-grey2"></div>
        <div className="h-[2px] w-[40px] bg-grey2"></div>
      </div>
      <div className="w-full h-[540px] bg-gradient-to-b from-dark3 to-black1 flex flex-col justify-center items-center">
        <div className="flex justify-between w-[85%] mt-[50px] -mb-[50px]">
          <p className="font-roboto font-bold italic text-[32px] leading-[37px] text-white1">
            CONFIRA O <span className="text-orange1">NOSSO BLOG</span>
          </p>
          <button className=" font-barlow font-bold text-[14px] leading-[20px] text-center text-black1 w-[130px] h-[40px] bg-orange1 hover:bg-orange2 rounded-[4px]">
            LER TODOS
          </button>
        </div>
        <div className="container mx-auto min-w-full min-h-full z-20">
          <div className="flex items-center justify-center w-[90%] h-full py-24 sm:py-8 px-4 mx-auto">
            {/* Carousel for desktop and large size devices */}
            <CarouselProvider
              className="lg:block hidden"
              naturalSlideWidth={100}
              naturalSlideHeight={100}
              isIntrinsicHeight={true}
              totalSlides={1}
              visibleSlides={1}
              step={2}
              infinite={true}
            >
              <div className="w-full relative flex items-center justify-center">
                <ButtonBack
                  role="button"
                  aria-label="slide backward"
                  className="absolute z-30 -left-[50px] ml-8 focus:outline-none cursor-pointer"
                  id="prev"
                >
                  <BsArrowLeftShort className="bg-grey2 w-[32px] h-[32px] rounded-[4px] hover:bg-orange2">
                    <path
                      d="M7 1L1 7L7 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </BsArrowLeftShort>
                </ButtonBack>
                <div className="w-full h-full mx-auto overflow-x-hidden overflow-y-hidden">
                  <Slider>
                    <div
                      id="slider"
                      className="h-full flex lg:gap-[20px] md:gap-6 gap-14 items-center justify-center transition ease-out duration-700"
                    >
                      <Slide index={0} className="min-w-[380px] min-h-[380px]">
                        <div className=" w-[380px] h-[380px] flex flex-col justify-between border-[1px] border-dark3 relative hover:grow duration-300 hover:bg-dark3 transition-colors">
                          <img
                            src="src/assets/unsplash_WvDYdXDzkhs.png"
                            alt="member1"
                            className="object-center relative hover:grow"
                          />
                          <div className="flex flex-col justify-evenly h-full ml-[24px]">
                            <p className="font-barlow font-normal text-[14px] leading-[16px] text-grey2">
                              03&#46;05&#46;21
                            </p>
                            <p className="font-barlow font-bold text-[18px] leading-[22px] text-white1">
                              Lorem ipsum dolor sit amet, <br /> consectetur
                              adipiscing elit.
                            </p>
                            <button className="font-barlow font-bold text-[14px] leading-[20px] text-center text-black1 w-[140px] h-[40px] bg-orange1 rounded-[4px] hover:bg-orange2">
                              LER MAIS
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={1} className="w-[380px] h-[380px]">
                        <div className=" w-[380px] h-[380px] flex flex-col justify-between border-[1px] border-dark3 relative hover:grow duration-300 hover:bg-dark3 transition-colors">
                          <img
                            src="src\assets\unsplash_0ShTs8iPY28.png"
                            alt="member1"
                          />
                          <div className="flex flex-col justify-evenly h-full ml-[24px]">
                            <p className="font-barlow font-normal text-[14px] leading-[16px] text-grey2">
                              03&#46;05&#46;21
                            </p>
                            <p className="font-barlow font-bold text-[18px] leading-[22px] text-white1">
                              Lorem ipsum dolor sit amet, <br /> consectetur
                              adipiscing elit.
                            </p>
                            <button className="font-barlow font-bold text-[14px] leading-[20px] text-center text-black1 w-[140px] h-[40px] bg-orange1 rounded-[4px] hover:bg-orange2">
                              LER MAIS
                            </button>
                          </div>
                        </div>
                      </Slide>
                      <Slide index={2} className="w-[380px] h-[380px]">
                        <div className=" w-[380px] h-[380px] flex flex-col justify-between border-[1px] border-dark3 relative hover:grow duration-300 hover:bg-dark3 transition-colors">
                          <img
                            src="src\assets\unsplash_0Wra5YYVQJE.png"
                            alt="member1"
                          />
                          <div className="flex flex-col justify-evenly h-full ml-[24px]">
                            <p className="font-barlow font-normal text-[14px] leading-[16px] text-grey2">
                              03&#46;05&#46;21
                            </p>
                            <p className="font-barlow font-bold text-[18px] leading-[22px] text-white1">
                              Lorem ipsum dolor sit amet, <br /> consectetur
                              adipiscing elit.
                            </p>
                            <button className="font-barlow font-bold text-[14px] leading-[20px] text-center text-black1 w-[140px] h-[40px] bg-orange1 rounded-[4px] hover:bg-orange2">
                              LER MAIS
                            </button>
                          </div>
                        </div>
                      </Slide>
                    </div>
                  </Slider>
                </div>
                <ButtonNext
                  role="button"
                  aria-label="slide forward"
                  className="absolute z-30 -right-[50px] mr-8 focus:outline-none"
                  id="next"
                >
                  <BsArrowRightShort className="bg-grey2 w-[32px] h-[32px] rounded-[4px] hover:bg-orange2">
                    <path
                      d="M1 1L7 7L1 13"
                      stroke="white"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </BsArrowRightShort>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col h-full items-center gap-[20px] mt-[40px]">
        <p className="font-roboto font-bold italic text-[32px] leading-[38px] text-center text-dark1">
          OBJETIVOS
        </p>
        <div className="max-w-[90%] flex gap-[20px]">
          <div className="bg-[url('src/assets/unsplash_7kEpUPB8vNk.png')] bg-no-repeat bg-center bg-cover w-[280px] h-[340px] relative">
            <div className="font-barlow font-bold italic text-[14px] leading-[16px] text-black1 bg-orange1 absolute bottom-0 w-[212px] h-[40px] flex justify-start items-center clip">
              <p className="ml-[15px]">GANHO DE MASSA</p>
            </div>
          </div>
          <div className="bg-[url('src/assets/unsplash_7kEpUPB8vN4.png')] bg-no-repeat bg-center bg-cover w-[280px] h-[340px] relative">
            <div className="font-barlow font-bold italic text-[14px] leading-[16px] text-black1 bg-orange1 absolute bottom-0 w-[212px] h-[40px] flex justify-start items-center clip">
              <p className="ml-[15px]">ENERGIA</p>
            </div>
          </div>
          <div className="bg-[url('src/assets/unsplash_7kEpUPB8vN3.png')] bg-no-repeat bg-center bg-cover w-[280px] h-[340px] relative">
            <div className="font-barlow font-bold italic text-[14px] leading-[16px] text-black1 bg-orange1 absolute bottom-0 w-[212px] h-[40px] flex justify-start items-center clip">
              <p className="ml-[15px]">RECUPERAÇÃO MUSCULAR</p>
            </div>
          </div>
          <div className="bg-[url('src/assets/unsplash_7kEpUPB8vN2.png')] bg-no-repeat bg-center bg-cover w-[280px] h-[340px] relative ">
            <div className="font-barlow font-bold italic text-[14px] leading-[16px] text-black1 bg-orange1  absolute bottom-0 w-[212px] h-[40px] flex justify-start items-center clip">
              <p className="ml-[15px]">EMAGRECIMENTO</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-[20px] mt-[60px]">
        <div className="w-[475px] h-[280px] bg-gradient-to-bl from-grey1 via-dark2 to-black1 flex">
          <div className="flex flex-col justify-center gap-[25px] ml-[40px]">
            <p className="font-roboto font-bold italic text-[40px] leading-[46px] text-white1">
              GARANTA O <br />{" "}
              <span className="text-orange1">FRETE GRÁTIS</span>
            </p>
            <button className="font-barlow font-bold text-[14px] leading-[20px] text-center text-black1 w-[120px] h-[40px] bg-orange1 hover:bg-orange2 rounded-[4px]">
              CONSULTE
            </button>
          </div>
          <div className="flex justify-end items-end mb-[10px]">
            <img
              src="src\assets\Package.png"
              alt="package"
              className="w-[180px] h-[180px]"
            />
          </div>
        </div>
        <div className="w-[475px] h-[280px] bg-gradient-to-bl from-grey1 via-dark2 to-black1 flex">
          <div className="flex flex-col justify-center gap-[25px] ml-[40px]">
            <p className="font-roboto font-bold italic text-[40px] leading-[46px] text-white1">
              SEU DINHEIRO <br /> <span className="text-orange1">DE VOLTA</span>
            </p>
            <button className="font-barlow font-bold text-[14px] leading-[20px] text-center text-black1 w-[120px] h-[40px] bg-orange1 hover:bg-orange2 rounded-[4px]">
              ENTENDA
            </button>
          </div>
          <div className="flex justify-end items-end mb-[10px]">
            <img
              src="src\assets\CurrencyCircleDollar.png"
              alt="package"
              className="w-[180px] h-[180px]"
            />
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center relative h-[280px] justify-end gap-[25px] mt-[65px]">
        <img
          src="src\assets\logo.png"
          alt="logo"
          className="w-[160px] h-[160px] opacity-10 absolute top-0"
        />
        <p className="font-roboto font-bold italic text-[32px] leading-[38px] text-center text-dark1">
          SOBRE A BLACK SKULL
        </p>
        <p className="font-barlow font-normal text-[16px] leading-[20px] text-center text-dark3 w-[640px]">
          A Black Skull USA é uma marca de suplementos alimentares com foco em
          atletas de alta performance. Nossa sede no Brasil está alocada em Embu
          das Artes – SP, com mais de 12.000 m² de área construída, com alta
          capacidade produtiva. Nossos produtos trabalham com as melhores
          matérias-primas do mercado e tem como principal característica maior
          concentração de insumos, que proporcionam níveis de pureza mais altos
          e por consequência otimizam a qualidade de nossos produtos.
        </p>
      </div>
    </main>
  );
};

export default Main;
