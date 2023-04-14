import { TbTruckDelivery } from "react-icons/tb";
import { BiUserCircle, BiStar, BiCart, BiSearch } from "react-icons/bi";
const Header = () => {
  return (
    <header className="h-[104px] flex flex-col">
      <div className="bg-dark1 min-h-[32px] flex justify-center">
        <div className="flex justify-between w-[90%]">
          <button className="font-barlow font-bold text-orange1 text-[0.75rem]">
            FALE CONOSCO
          </button>
          <div className="flex justify-center items-center gap-2">
            <TbTruckDelivery className="text-orange1" />
            <p className="font-barlow font-medium text-grey2 text-[0.75rem]">
              FRETE GRATIS A PARTIR DE R$ 199,90 PARA TODO BRASIL
            </p>
          </div>
          <button className="font-barlow font-bold text-orange1 text-[0.75rem]">
            BLOG.BLACKSKULL
          </button>
        </div>
      </div>
      <div className="bg-black1 min-h-[72px] flex items-center justify-center">
        <div className="flex justify-between w-[90%] items-center">
          <img
            src="src\assets\LogoP.png"
            alt="Black Skull Logo"
            className="w-44 -ml-2 hover:cursor-pointer"
          />
          <div className="flex">
            <button className="w-[103px] h-[72px] font-barlow font-bold text-[0.875rem] text-grey1 text-center hover:bg-dark2 relative items-center transition ease-in-out duration-150 hover:text-white1">
              <span>CATEGORIAS</span>
              <div className="h-1 w-0 bg-orange1 absolute bottom-0 left-0 transition-all duration-500"></div>
            </button>

            <button className="w-[103px] h-[72px] font-barlow font-bold text-[0.875rem] text-grey1 text-center hover:bg-dark2 relative items-center transition ease-in-out duration-150 hover:text-white1">
              <span>VESTUÁRIO</span>
              <div className="h-1 w-0 bg-orange1 absolute bottom-0 left-0 transition-all duration-500"></div>
            </button>

            <button className="w-[103px] h-[72px] font-barlow font-bold text-[0.875rem] text-grey1 text-center hover:bg-dark2 relative items-center transition ease-in-out duration-150 hover:text-white1">
              <span>OBJETIVOS</span>
              <div className="h-1 w-0 bg-orange1 absolute bottom-0 left-0 transition-all duration-500"></div>
            </button>

            <button className="w-[103px] h-[72px] font-barlow font-bold text-[0.875rem] text-grey1 text-center hover:bg-dark2 relative items-center transition ease-in-out duration-150 hover:text-white1">
              <span>PROMOÇÕES</span>
              <div className="h-1 w-0 bg-orange1 absolute bottom-0 left-0 transition-all duration-500"></div>
            </button>

            <button className="w-[103px] h-[72px] font-barlow font-bold text-[0.875rem] text-grey1 text-center hover:bg-dark2 relative items-center transition ease-in-out duration-150 hover:text-white1">
              <span>ATLETAS</span>
              <div className="h-1 w-0 bg-orange1 absolute bottom-0 left-0 transition-all duration-500"></div>
            </button>

            <button className="w-[103px] h-[72px] font-barlow font-bold text-[0.875rem] text-grey1 text-center hover:bg-dark2 relative items-center transition ease-in-out duration-150 hover:text-white1">
              <span>ASSINATURA</span>
              <div className="h-1 w-0 bg-orange1 absolute bottom-0 left-0 transition-all duration-500"></div>
            </button>
          </div>
          <div className="w-[216px] h-[40px] flex bg-dark1 items-center justify-evenly border-[1px] border-dark3 rounded hover:bg-dark2">
            <input
              type="text"
              placeholder="Buscar"
              name="busca"
              className="font-barlow font-medium text-[12px] w-[80%] h-[100%] outline-none bg-dark1 text-grey1 focus:placeholder:opacity-0 hover:bg-dark2"
            />
            <BiSearch className="text-grey1 hover:cursor-pointer" />
          </div>
          <BiUserCircle className="text-grey1 w-5 h-5 hover:cursor-pointer hover:text-white1" />
          <BiStar className="text-grey1 w-5 h-5 hover:cursor-pointer hover:text-white1" />
          <BiCart className="text-grey1 w-5 h-5 hover:cursor-pointer hover:text-white1" />
        </div>
      </div>
    </header>
  );
};

export default Header;
