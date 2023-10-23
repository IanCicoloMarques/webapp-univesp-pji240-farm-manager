export default function Footer() {
  return (
    <footer className="bg-emerald-100">
      <div className="max-w-7xl mx-auto py-10 px-6 xl:px-0 md:flex justify-between">
        <div className="footer-left mb-12 md:mb-0">
          <h2 className="mb-5 uppercase text-lg ">Sobre nós</h2>
          <a
            href="#"
            className="text-xl font-bold text-gray-500 hover:text-gray-400">
            Sitio Nova Esperança
          </a>
          <p className="py-2 text-gray-500 sm:py-0">
            @2023 todos os direitos reservados
          </p>
          <br />
          <p className="py-2 text-lg font-semibold text-gray-500 sm:py-0">
            Desenvolvido por:{" "}
          </p>
          <p className="py-2 text-gray-500 sm:py-0">
            Alunos UNIVESP PI2-S4G15-2023
          </p>
        </div>
        <div className="footer-right mb-12 md:mb-0">
          <h2 className="mb-5 uppercase text-lg ">Entre em contato</h2>
          <a
            href="#"
            className="text-xl font-bold text-gray-500 hover:text-gray-400">
            Email
          </a>
          <p className="py-2 text-gray-500 sm:py-0"></p>
        </div>
      </div>
    </footer>
  );
}
