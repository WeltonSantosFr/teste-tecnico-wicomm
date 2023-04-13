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
          <button className="font-barlow font-bold text-[0.875rem] text-grey1 text-center hover:bg-dark2 hover:h-[72px]">
            CATEGORIAS
          </button>
          <button className="font-barlow font-bold text-[0.875rem] text-grey1 text-center hover:bg-dark2 hover:h-[72px]">
            VESTUÁRIO
          </button>
          <button className="font-barlow font-bold text-[0.875rem] text-grey1 text-center hover:bg-dark2 hover:h-[72px]">
            OBJETIVOS
          </button>
          <button className="font-barlow font-bold text-[0.875rem] text-grey1 text-center hover:bg-dark2 hover:h-[72px]">
            PROMOÇÕES
          </button>
          <button className="font-barlow font-bold text-[0.875rem] text-grey1 text-center hover:bg-dark2 hover:h-[72px]">
            ATLETAS
          </button>
          <button className="font-barlow font-bold text-[0.875rem] text-grey1 text-center hover:bg-dark2 hover:h-[72px]">
            ASSINATURA
          </button>
          <div className="w-[216px] h-[40px] flex bg-dark1 items-center justify-evenly border-[1px] border-dark3 rounded">
            <input
              type="text"
              placeholder="Buscar"
              name="busca"
              className="font-barlow font-medium text-[12px] w-[80%] h-[100%] outline-none bg-dark1 text-grey1 focus:placeholder:opacity-0"
            />
            <BiSearch className="text-grey1 hover:cursor-pointer" />
          </div>
          <BiUserCircle className="text-grey1 w-5 h-5" />
          <BiStar className="text-grey1 w-5 h-5" />
          <BiCart className="text-grey1 w-5 h-5" />
        </div>
      </div>
    </header>
  );
};

export default Header;
