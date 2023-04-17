import {
  BsFacebook,
  BsInstagram,
  BsYoutube,
  BsTwitter,
  BsTiktok,
} from "react-icons/bs";

const Footer = () => {
  return (
    <footer className="overflow-hidden mt-[50px]">
      <div className="bg-black1 w-full flex justify-evenly h-[500px]">
        {/* div bloco pai de todos */}
        <div className="flex flex-col justify-evenly">
          {/* div que vai conter as partes de cima e de baixo */}
          <div className="flex gap-[50px]">
            {/* div que vai conter todas as divs da parte de cima */}
            <div className="flex flex-col gap-[20px] -mt-[20px]">
              {/* div do logo e redes sociais */}
              <img
                src="src\assets\LogoP.png"
                alt="logoP"
                className="w-[250px] h-[70px]"
              />
              <p className="font-barlow font-normal text-[14px] leading-[16px] text-center text-white1">
                Nos siga:
              </p>
              <div className="flex justify-evenly">
                <BsFacebook className="h-[25px] w-[25px] text-white1 bg-black1 rounded-full" />
                <div className="h-[25px] w-[25px] bg-white1 rounded-full flex items-center justify-center">
                  <BsInstagram className="h-[15px] w-[15px] text-black1 bg-white1 rounded-full" />
                </div>
                <div className="w-[25px] h-[25px] bg-white1 rounded-full flex items-center justify-center">
                  <BsYoutube className="h-[15px] w-[15px] border-none" />
                </div>
                <div className="w-[25px] h-[25px] bg-white1 rounded-full flex items-center justify-center">
                  <BsTwitter className="h-[15px] w-[15px]" />
                </div>
                <div className="w-[25px] h-[25px] bg-white1 rounded-full flex items-center justify-center">
                  <BsTiktok className="h-[15px] w-[15px]" />
                </div>
              </div>
            </div>
            <div className="flex flex-col font-barlow font-normal text-[14px] leading-[16px] text-grey1 gap-[15px]">
              {/* blackskull usa */}
              <p className="font-bold text-[16px] leading-[20px] text-white1">
                BLACKSKULL USA
              </p>
              <p>Sobre Nós</p>
              <p>Black Skull é confiável?</p>
              <p>Atletas Black Skull</p>
              <p>Nosso Blog</p>
              <p>Seja um Revendedor</p>
              <p>Entre em Contato</p>
            </div>
            <div className="flex flex-col font-barlow font-normal text-[14px] leading-[16px] text-grey1 gap-[15px]">
              {/* istitucional */}
              <p className="font-bold text-[16px] leading-[20px] text-white1">
                INSTITUCIONAL
              </p>
              <p>Trocas e Devoluções</p>
              <p>Política de Entregas</p>
              <p>Política de Privacidade</p>
              <p>Política de Cancelamentos</p>
            </div>
            <div className="flex flex-col font-barlow font-normal text-[14px] leading-[16px] text-grey1 gap-[15px]">
              {/* afiliados */}
              <p className="font-bold text-[16px] leading-[20px] text-white1">
                AFILIADOS
              </p>
              <p>Programa de Afiliados</p>
              <p>Desconto para Militares</p>
              <p>Benefícios para Profissionais da Saúde</p>
              <p>Benefícios para Profs. de Educação Física</p>
              <p>Assinaturas</p>
            </div>
          </div>
          <div className="flex self-center gap-[40px] ml-[45px]">
            {/* div que vai conter a parte de baixo */}
            <div className=" flex flex-col w-[220px]">
              {/* formas de pagamento */}
              <p className="font-barlow font-bold text-[16px] leading-[20px] text-white1 mb-[25px]">
                FORMAS DE PAGAMENTO
              </p>
              <div className="w-full h-full flex flex-wrap gap-[8px]">
                <div className="w-[35px] h-[25px] bg-white1 border-[1px] border-grey2 rounded-md flex items-center justify-center">
                  <img
                    src="src\assets\MercadoPago.png"
                    alt="icon mercado pago"
                    className="w-[25px]"
                  />
                </div>
                <div className="w-[35px] h-[25px] bg-white1 border-[1px] border-grey2 rounded-md flex items-center justify-center">
                  <img
                    src="src\assets\Visa.png"
                    alt="icon visa"
                    className="w-[25px]"
                  />
                </div>
                <div className="w-[35px] h-[25px] bg-white1 border-[1px] border-grey2 rounded-md flex items-center justify-center">
                  <img
                    src="src\assets\Mastercard.png"
                    alt="icon mastercard"
                    className="w-[25px]"
                  />
                </div>
                <div className="w-[35px] h-[25px] bg-white1 border-[1px] border-grey2 rounded-md flex items-center justify-center">
                  <img
                    src="src\assets\Hipercard.png"
                    alt="icon hipercard"
                    className="w-[25px]"
                  />
                </div>
                <div className="w-[35px] h-[25px] bg-white1 border-[1px] border-grey2 rounded-md flex items-center justify-center">
                  <img
                    src="src\assets\Pix.png"
                    alt="icon pix"
                    className="w-[25px]"
                  />
                </div>
                <div className="w-[35px] h-[25px] bg-[##1F72CD] border-[1px] border-[#1F72CD] rounded-md flex items-center justify-center">
                  <img
                    src="src\assets\Amex.png"
                    alt="icon american express"
                    className="w-[35px] h-[25px] bg-[#1F72CD] rounded-md"
                  />
                </div>
                <div className="w-[35px] h-[25px] bg-white1 border-[1px] border-grey2 rounded-md flex items-center justify-center">
                  <img
                    src="src\assets\DinnersClub.png"
                    alt="icon pix"
                    className="w-[25px]"
                  />
                </div>
                <div className="w-[35px] h-[25px] bg-white1 border-[1px] border-grey2 rounded-md flex items-center justify-center">
                  <img
                    src="src\assets\Elo.png"
                    alt="icon pix"
                    className="w-[25px]"
                  />
                </div>
                <div className="w-[35px] h-[25px] bg-white1 border-[1px] border-grey2 rounded-md flex items-center justify-center">
                  <img
                    src="src\assets\Boleto.png"
                    alt="icon pix"
                    className="w-[25px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              {/* segurança */}
              <p className="font-barlow font-bold text-[16px] leading-[20px] text-white1 mb-[20px]">
                SEGURANÇA
              </p>
              <div className="flex gap-[10px]">
                <div>
                  <img
                    src="src\assets\vtex.png"
                    alt="icon vtex pci certified"
                  />
                </div>
                <div>
                  <img src="src\assets\Ebit.png" alt="icon ebit" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center h-[500px] w-[350px] border-l-[1px] border-dark3">
          {/* div com o formulario */}
          <div className="w-[270px] gap-[15px] flex flex-col justify-evenly items-center">
            <p className="font-roboto font-bold italic text-[32px] leading-[38px] text-center  text-white1">
              FIQUE POR <br />
              <span className="text-orange1">DENTRO</span>
            </p>
            <p className="font-barlow font-normal text-[14px] leading-[17px] text-center text-grey1">
              Inscreva-se e seja o primeiro a saber sobre as novidades,
              promoções e muito mais!
            </p>
            <input
              type="text"
              placeholder="Digite seu nome"
              className="w-[270px] h-[50px] bg-dark1 border-[1px] border-dark3 font-barlow font-medium text-[12px] leading-[14px] text-grey2 placeholder:text-center placeholder:ml-[100px] rounded-[4px]"
            />
            <input
              type="text"
              placeholder="Digite seu e-mail"
              className="w-[270px] h-[50px] bg-dark1 border-[1px] border-dark3 font-barlow font-medium text-[12px] leading-[14px] text-grey2 placeholder:text-center placeholder:ml-[100px] rounded-[4px]"
            />
            <button className="font-barlow font-bold text-[14px] leading-[20px] text-center text-black1 w-[140px] h-[40px] bg-orange1 rounded-[4px]">
              ENVIAR
            </button>
          </div>
        </div>
      </div>
      <div className="bg-black1 w-full h-[90px] border-t-[1px] border-dark3 flex justify-center items-center">
        {/* div direitos reservados */}
        <div className="flex justify-between w-[90%]">
          {/* div que engloba as duas divs dos direitos reservados */}
          <div className="flex justify-center items-center">
            <p className="font-barlow font-normal text[16px] leading-[20px] text-white1">
              Black Skull 2022. Todos os direitos reservados.
            </p>
          </div>
          <div className="flex items-center justify-between w-[200px]">
            <img
              src="src\assets\Logo_Wicomm_WhiteBlue 1.png"
              alt="logo wicomm"
            />
            <img src="src\assets\VTEX_pink_RGB.png" alt="logo vtex" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
